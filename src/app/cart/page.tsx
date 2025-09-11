'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image?: string;
  priceId: string;
}

function CartContent() {
  const searchParams = useSearchParams();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const selectedProduct = searchParams.get('selectedProduct') || 'single';
    const includeUpsell = searchParams.get('upsell') === 'true';

    // Product mapping based on the pricing tiers
    const productMap: { [key: string]: CartItem } = {
      single: {
        id: 'single',
        name: '1 - Opti-15 Gel - Single Trial',
        price: 19.95,
        originalPrice: 24.95,
        image: '/01_3014.jpg',
        priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_SINGLE || 'price_1S68ZEJIj1H8x0NCn7eWEeIs'
      },
      triple: {
        id: 'triple',
        name: '2 - Buy 2 Get 1 FREE',
        price: 37.45,
        originalPrice: 74.85,
        image: '/01_3014.jpg',
        priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_TRIPLE || 'price_1S68XWJIj1H8x0NCUPGAR5Yg'
      },
      'six-pack': {
        id: 'six-pack',
        name: '3 - Buy 3 Get 3 FREE',
        price: 59.70,
        originalPrice: 149.70,
        image: '/01_3014.jpg',
        priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_SIX_PACK || 'price_1S68YiJIj1H8x0NC92OKKebk'
      }
    };

    const items: CartItem[] = [productMap[selectedProduct] || productMap.single];

    // Check if user accepted the upsell
    if (includeUpsell) {
      items.push({
        id: 'cbd-patches',
        name: 'High Strength (16mg) CBD Patches - 18 days supply',
        price: 14.95,
        originalPrice: 29.95,
        image: '/axxess16mg.webp',
        priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_CBD_PATCHES || 'price_1RRBC9JIj1H8x0NC0pio4LsX'
      });
    }

    setCartItems(items);
  }, [searchParams]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const getTotalSavings = () => {
    return cartItems.reduce((total, item) => 
      total + ((item.originalPrice || item.price) - item.price), 0
    );
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          items: cartItems.map(item => ({
            priceId: item.priceId,
            quantity: 1
          }))
        }),
      });

      const { sessionId } = await response.json();

      if (!sessionId) {
        throw new Error('Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      const stripe = (await import('@/lib/stripe')).stripePromise;
      const stripeInstance = await stripe;
      
      if (stripeInstance) {
        const { error } = await stripeInstance.redirectToCheckout({ sessionId });
        if (error) {
          console.error('Stripe redirect error:', error);
          alert('Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-black">Opti-15</span>
            <span className="text-3xl font-bold text-red-600 ml-1">Gel</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-bold text-black mb-6">Your Order</h1>
              
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0">
                    {item.image && (
                      <div className="w-16 h-20 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    )}
                    {!item.image && (
                      <div className="w-16 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold text-center">CBD<br/>16mg</span>
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-lg font-bold text-green-600">£{item.price.toFixed(2)}</span>
                        {item.originalPrice && item.originalPrice !== item.price && (
                          <span className="text-sm text-gray-500 line-through">£{item.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-black mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">£{getTotalPrice().toFixed(2)}</span>
                </div>
                
                {getTotalSavings() > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>You Save:</span>
                    <span className="font-semibold">£{getTotalSavings().toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping:</span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>
                
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>£{getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-3 px-6 rounded-lg transition-colors mb-4"
              >
                {isLoading ? 'Processing...' : 'Proceed to Checkout'}
              </button>

              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center space-x-1">
                  <span className="text-green-500">✓</span>
                  <span>90-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-green-500">✓</span>
                  <span>Free Express UK Shipping</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-green-500">✓</span>
                  <span>Secure SSL Encrypted Checkout</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 mb-3">🔒 Secure payment powered by Stripe</p>
                <div className="flex justify-center space-x-3">
                  {/* Visa */}
                  <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                    <svg width="40" height="13" viewBox="0 0 40 13" fill="none">
                      <path d="M18.5 0.5L16.8 12.5H14.2L15.9 0.5H18.5Z" fill="#1A1F71"/>
                      <path d="M29.2 0.8C28.7 0.6 27.8 0.4 26.6 0.4C23.9 0.4 22 2 22 4.3C22 6 23.4 6.9 24.4 7.5C25.5 8.1 25.9 8.5 25.9 9C25.9 9.8 24.9 10.2 24 10.2C22.8 10.2 22.2 10 21.3 9.6L20.9 9.4L20.5 11.9C21.1 12.2 22.2 12.4 23.4 12.4C26.3 12.4 28.1 10.8 28.1 8.4C28.1 7.1 27.3 6.1 25.5 5.4C24.6 4.9 24.1 4.5 24.1 3.9C24.1 3.4 24.7 2.9 25.9 2.9C26.8 2.9 27.5 3.1 28 3.3L28.3 3.4L28.7 1L29.2 0.8Z" fill="#1A1F71"/>
                      <path d="M35.3 0.5H33.2C32.4 0.5 31.8 0.7 31.4 1.4L26.5 12.5H29.4L30 11H33.4L33.7 12.5H36.2L35.3 0.5ZM30.8 8.7L32.3 5.2L32.9 8.7H30.8Z" fill="#1A1F71"/>
                      <path d="M12.1 0.5L9.6 8.9L9.3 7.4C8.8 5.8 7.3 4.1 5.6 3.2L7.8 12.5H10.8L15.1 0.5H12.1Z" fill="#1A1F71"/>
                      <path d="M7.1 0.5H2.1L2 0.8C5.4 1.7 7.5 4 8.2 6.7L6.9 1.3C6.7 0.7 6.2 0.5 5.6 0.5H7.1Z" fill="#FFBC00"/>
                    </svg>
                  </div>
                  
                  {/* Mastercard */}
                  <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                    <svg width="36" height="22" viewBox="0 0 36 22" fill="none">
                      <circle cx="14" cy="11" r="10" fill="#EB001B"/>
                      <circle cx="22" cy="11" r="10" fill="#FF5F00"/>
                      <path d="M18 4.464C19.602 5.806 20.6 7.787 20.6 10C20.6 12.213 19.602 14.194 18 15.536C16.398 14.194 15.4 12.213 15.4 10C15.4 7.787 16.398 5.806 18 4.464Z" fill="#FF5F00"/>
                    </svg>
                  </div>
                  
                  {/* American Express */}
                  <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                    <svg width="36" height="14" viewBox="0 0 36 14" fill="none">
                      <rect width="36" height="14" fill="#006FCF" rx="2"/>
                      <path d="M6.5 3.5H8.5L9 4.5L9.5 3.5H14V4.2L14.5 3.5H16.5L17 4.2V3.5H22V10.5H20V9.8L19.5 10.5H17.5L17 9.8V10.5H11.5L11.2 9.8H10.3L10 10.5H8L9.5 7L8 3.5H10L10.5 6.2L11 3.5H6.5V10.5H4.5V3.5Z" fill="white"/>
                      <path d="M7.5 4.5V9.5H9L10.2 6.5V9.5H11.5V7.5H12.5V9.5H13V4.5H11L10 7L9 4.5H7.5Z" fill="#006FCF"/>
                    </svg>
                  </div>
                  
                  {/* PayPal */}
                  <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                    <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                      <path d="M3 2H6.5C7.9 2 9 3.1 9 4.5C9 6.2 7.6 7.5 5.9 7.5H4.8L4.5 9.5H3L3 2ZM4.8 6.2H5.8C6.8 6.2 7.5 5.5 7.5 4.5C7.5 3.5 6.8 2.8 5.8 2.8H4.8L4.8 6.2Z" fill="#003087"/>
                      <path d="M10.5 2H14C15.4 2 16.5 3.1 16.5 4.5C16.5 6.2 15.1 7.5 13.4 7.5H12.3L12 9.5H10.5L10.5 2ZM12.3 6.2H13.3C14.3 6.2 15 5.5 15 4.5C15 3.5 14.3 2.8 13.3 2.8H12.3L12.3 6.2Z" fill="#0070BA"/>
                      <path d="M18 2.2C18.5 2.1 19.2 2 20 2C21.2 2 22 2.3 22.5 2.8C23 3.3 23.2 4 23.2 4.8C23.2 6.8 21.8 8 19.8 8C19.4 8 19.1 8 18.9 7.9L18.6 9.5H17.1L18 2.2ZM18.5 6.8C18.7 6.9 19 6.9 19.3 6.9C20.5 6.9 21.3 6.2 21.3 5.1C21.3 4.4 20.8 3.9 19.9 3.9C19.6 3.9 19.3 3.9 19.1 4L18.5 6.8Z" fill="#0070BA"/>
                      <path d="M24 2.2C24.5 2.1 25.2 2 26 2C27.2 2 28 2.3 28.5 2.8C29 3.3 29.2 4 29.2 4.8C29.2 6.8 27.8 8 25.8 8C25.4 8 25.1 8 24.9 7.9L24.6 9.5H23.1L24 2.2ZM24.5 6.8C24.7 6.9 25 6.9 25.3 6.9C26.5 6.9 27.3 6.2 27.3 5.1C27.3 4.4 26.8 3.9 25.9 3.9C25.6 3.9 25.3 3.9 25.1 4L24.5 6.8Z" fill="#0070BA"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CartPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <CartContent />
    </Suspense>
  );
}