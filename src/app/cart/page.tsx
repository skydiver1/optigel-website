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

    // Product mapping based on the pricing tiers - using hardcoded values for client-side
    const productMap: { [key: string]: CartItem } = {
      small: {
        id: 'small',
        name: 'Small Gel - Trial Size - 50ml',
        price: 9.95,
        originalPrice: 14.95,
        image: '/brand.png',
        priceId: 'price_1RRBBFJIj1H8x0NCozdnTgeV'
      },
      single: {
        id: 'single',
        name: '1 - Opti-15 Gel - Single Trial',
        price: 19.95,
        originalPrice: 24.95,
        image: '/01_3014.jpg',
        priceId: 'price_1S68ZEJIj1H8x0NCn7eWEeIs'
      },
      triple: {
        id: 'triple',
        name: '2 - Buy 2 Get 1 FREE',
        price: 37.45,
        originalPrice: 74.85,
        image: '/3pack.png',
        priceId: 'price_1S68XWJIj1H8x0NCUPGAR5Yg'
      },
      'six-pack': {
        id: 'six-pack',
        name: '3 - Buy 3 Get 3 FREE',
        price: 59.70,
        originalPrice: 149.70,
        image: '/6pack.png',
        priceId: 'price_1S68YiJIj1H8x0NC92OKKebk'
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
        priceId: 'price_1RRBC9JIj1H8x0NC0pio4LsX'
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

      const data = await response.json();

      if (!response.ok) {
        // API returned an error
        console.error('API Error:', data);
        throw new Error(data.error || `API Error: ${response.status}`);
      }

      const { sessionId } = data;

      if (!sessionId) {
        throw new Error('No session ID returned from Stripe');
      }

      // Redirect to Stripe Checkout
      const { stripePromise } = await import('@/lib/stripe-client');
      const stripeInstance = await stripePromise;
      
      if (!stripeInstance) {
        throw new Error('Stripe failed to initialize. Please check your publishable key.');
      }
      
      const { error } = await stripeInstance.redirectToCheckout({ sessionId });
      if (error) {
        console.error('Stripe redirect error:', error);
        throw new Error(`Stripe redirect failed: ${error.message}`);
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
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-3 px-6 rounded-lg transition-colors mb-3"
              >
                {isLoading ? 'Processing...' : 'Proceed to Checkout'}
              </button>

              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors mb-4"
              >
                ← Continue Shopping
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
                  <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                    <Image
                      src="/visa.png"
                      alt="Visa"
                      width={40}
                      height={25}
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Mastercard */}
                  <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                    <Image
                      src="/master.png"
                      alt="Mastercard"
                      width={40}
                      height={25}
                      className="object-contain"
                    />
                  </div>
                  
                  {/* PayPal */}
                  <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                    <Image
                      src="/paypal.png"
                      alt="PayPal"
                      width={40}
                      height={25}
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Apple Pay */}
                  <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                    <Image
                      src="/applepay.png"
                      alt="Apple Pay"
                      width={40}
                      height={25}
                      className="object-contain"
                    />
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