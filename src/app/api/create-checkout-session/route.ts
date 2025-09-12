import { NextRequest, NextResponse } from 'next/server';
import { stripe, products, ProductKey } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  let lineItems: any[] = [];
  
  try {
    const body = await request.json();
    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_SITE_URL;
    
    // Debug logging for production troubleshooting
    console.log('Checkout request received:', {
      body,
      origin,
      hasSecretKey: !!process.env.STRIPE_SECRET_KEY,
      hasPublishableKey: !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      priceIds: {
        small: process.env.STRIPE_PRICE_ID_SMALL,
        single: process.env.STRIPE_PRICE_ID_SINGLE,
        triple: process.env.STRIPE_PRICE_ID_TRIPLE,
        sixPack: process.env.STRIPE_PRICE_ID_SIX_PACK,
        cbdPatches: process.env.STRIPE_PRICE_ID_CBD_PATCHES,
      }
    });

    // Handle legacy single product requests
    if (body.productKey) {
      const { productKey }: { productKey: ProductKey } = body;
      
      if (!productKey || !products[productKey]) {
        return NextResponse.json(
          { error: 'Invalid product selection' },
          { status: 400 }
        );
      }

      const product = products[productKey];
      lineItems = [{
        price: product.priceId,
        quantity: 1,
      }];
    } 
    // Handle new cart-based requests with multiple items
    else if (body.items) {
      const { items } = body;
      
      lineItems = items.map((item: any) => ({
        price: item.priceId,
        quantity: item.quantity || 1,
      }));
    } else {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      metadata: {
        source: body.productKey ? 'legacy' : 'cart',
        ...(body.productKey && { productKey: body.productKey }),
      },
      shipping_address_collection: {
        allowed_countries: ['GB'], // UK only initially
      },
      billing_address_collection: 'required',
      customer_creation: 'always',
      invoice_creation: {
        enabled: true,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    
    // Provide more specific error information
    let errorMessage = 'Internal Server Error';
    let errorDetails = '';
    
    if (error instanceof Error) {
      errorMessage = error.message;
      errorDetails = error.name;
      
      // Check for common Stripe errors
      if (errorMessage.includes('No such price')) {
        errorMessage = 'Invalid price ID - please check Stripe configuration';
      } else if (errorMessage.includes('API key')) {
        errorMessage = 'Invalid Stripe API key - please check environment variables';
      }
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: errorDetails,
        // Include environment check for debugging (only in development)
        debug: process.env.NODE_ENV === 'development' ? {
          hasSecretKey: !!process.env.STRIPE_SECRET_KEY,
          hasPublishableKey: !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
          lineItems: lineItems
        } : undefined
      },
      { status: 500 }
    );
  }
}