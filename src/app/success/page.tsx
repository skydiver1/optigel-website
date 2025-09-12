'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: (action: string, event: string, data?: any) => void;
  }
}

interface OrderDetails {
  sessionId: string;
  customerEmail: string;
  amountTotal: number;
  currency: string;
  paymentStatus: string;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // In a real implementation, you'd fetch order details from your API
      // For now, we'll simulate the success state
      setTimeout(() => {
        setOrderDetails({
          sessionId,
          customerEmail: 'customer@example.com',
          amountTotal: 3745, // £37.45 in pence
          currency: 'gbp',
          paymentStatus: 'paid'
        });
        setLoading(false);
        
        // Track Facebook Pixel purchase event
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Purchase');
        }
      }, 1000);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your order...</p>
        </div>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Order Not Found</h1>
          <p className="text-gray-600 mb-8">We couldn't find your order details.</p>
          <Link href="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Success icon */}
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Thank You for Your Order!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Your Opti-15 Gel is on its way. We've sent a confirmation email with all the details.
          </p>

          {/* Order details */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-mono text-sm">{orderDetails.sessionId.substring(0, 16)}...</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-bold">£{(orderDetails.amountTotal / 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-green-600 font-semibold capitalize">{orderDetails.paymentStatus}</span>
              </div>
            </div>
          </div>

          {/* What happens next */}
          <div className="text-left mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">What Happens Next?</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold">Order Processing</p>
                  <p className="text-gray-600 text-sm">We'll prepare your Opti-15 Gel for dispatch within 24 hours.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold">Express Shipping</p>
                  <p className="text-gray-600 text-sm">Free express delivery - your order will arrive within 1-2 business days.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold">Start Your Relief Journey</p>
                  <p className="text-gray-600 text-sm">Begin experiencing natural pain relief with your 90-day guarantee.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="bg-red-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about your order, our customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@optigel.co.uk" className="text-red-600 hover:text-red-700 font-semibold">
                support@optigel.co.uk
              </a>
              <a href="tel:08004700316" className="text-red-600 hover:text-red-700 font-semibold">
                0800 470 0316
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Link href="/" className="btn-primary inline-block">
              Return to Home
            </Link>
            <p className="text-sm text-gray-500">
              Remember: You're protected by our 90-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}