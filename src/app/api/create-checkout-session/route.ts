import { NextRequest, NextResponse } from 'next/server';
import { stripe, products, ProductKey } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { productKey }: { productKey: ProductKey } = await request.json();
    
    if (!productKey || !products[productKey]) {
      return NextResponse.json(
        { error: 'Invalid product selection' },
        { status: 400 }
      );
    }

    const product = products[productKey];
    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_SITE_URL;

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: product.priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#pricing`,
      metadata: {
        productKey,
        tubes: product.tubes.toString(),
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
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}