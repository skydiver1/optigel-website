import Link from 'next/link';

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-black">Opti-15</span>
              <span className="text-3xl font-bold text-red-600 ml-1">Gel</span>
            </Link>
            <Link href="/" className="text-red-600 hover:text-red-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Returns & Refunds</h1>
          <p className="text-gray-600 text-lg">
            Your satisfaction is our priority
          </p>
        </div>

        <div className="space-y-8">
          {/* 90-Day Guarantee Banner */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🛡️</div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">90-Day Money-Back Guarantee</h2>
            <p className="text-green-700 text-lg">
              If you're not completely satisfied with Opti-15 Gel, we'll refund your money. No questions asked.
            </p>
          </div>

          {/* Return Policy */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Return Policy</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-bold text-black mb-2">90-Day Return Period</h3>
                <p className="text-gray-600">
                  You have 90 days from the date of purchase to return your Opti-15 Gel for a full refund. 
                  This gives you plenty of time to try the product and see if it works for you.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-bold text-black mb-2">Condition of Returns</h3>
                <p className="text-gray-600">
                  We accept returns of both opened and unopened products. You don't need to return unused 
                  product - simply contact us to initiate your refund process.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="font-bold text-black mb-2">No Questions Asked</h3>
                <p className="text-gray-600">
                  We don't require lengthy explanations. If Opti-15 Gel didn't meet your expectations, 
                  that's all we need to know to process your refund.
                </p>
              </div>
            </div>
          </div>

          {/* How to Return */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6">How to Return Your Order</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="font-bold text-black mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">
                  Email support@optigel.co.uk or call 0800 470 0316 with your order number
                </p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="font-bold text-black mb-2">Get Return Label</h3>
                <p className="text-gray-600 text-sm">
                  We'll email you a prepaid return label - no cost to you
                </p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="font-bold text-black mb-2">Get Refunded</h3>
                <p className="text-gray-600 text-sm">
                  Full refund processed within 5-7 business days of receipt
                </p>
              </div>
            </div>
          </div>

          {/* Refund Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Refund Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">Refund Method</h3>
                <p className="text-gray-600">
                  Refunds are processed back to your original payment method. Credit card refunds typically 
                  appear within 3-5 business days, while PayPal refunds are usually instant.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Full Purchase Price</h3>
                <p className="text-gray-600">
                  We refund 100% of what you paid, including any taxes. Since shipping was free, 
                  there are no shipping charges to deduct.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Processing Time</h3>
                <p className="text-gray-600">
                  Once we receive your return or your return request (for opened products), 
                  we process refunds within 5-7 business days.
                </p>
              </div>
            </div>
          </div>

          {/* Damaged or Defective Products */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Damaged or Defective Products</h2>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="font-bold text-black mb-3">Received a damaged product?</h3>
              <p className="text-gray-600 mb-4">
                If your Opti-15 Gel arrives damaged or defective, please contact us immediately. 
                We'll send you a replacement at no charge and arrange for return of the damaged item.
              </p>
              <p className="text-sm text-gray-500">
                Please take photos of any damage and include them when you contact us - this helps us 
                improve our packaging and work with our shipping partners.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">Do I need to return unused product for a refund?</h3>
                <p className="text-gray-600">
                  No, you can keep any unused product. Simply contact us to initiate the refund process.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">What if I ordered multiple tubes?</h3>
                <p className="text-gray-600">
                  Our 90-day guarantee applies to your entire order. You can return all or part of your order 
                  for a full or partial refund respectively.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Can I return after 90 days?</h3>
                <p className="text-gray-600">
                  Our standard policy is 90 days, but we understand special circumstances arise. 
                  Contact us and we'll do our best to help you.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Do you charge restocking fees?</h3>
                <p className="text-gray-600">
                  No, we never charge restocking fees. Returns are completely free for our customers.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-red-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-black mb-2">Need to Start a Return?</h3>
            <p className="text-gray-600 mb-4">
              Our customer service team will make the process quick and easy.
            </p>
            <div className="space-y-2">
              <p className="font-medium">
                Email: <a href="mailto:support@optigel.co.uk" className="text-red-600 hover:text-red-700">support@optigel.co.uk</a>
              </p>
              <p className="font-medium">
                Phone: <a href="tel:08004700316" className="text-red-600 hover:text-red-700">0800 470 0316</a>
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Have your order number ready to help us assist you faster
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}