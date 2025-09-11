import Link from 'next/link';

export default function ShippingPage() {
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
          <h1 className="text-4xl font-bold text-black mb-4">Shipping Information</h1>
          <p className="text-gray-600 text-lg">
            Fast, free delivery straight to your door
          </p>
        </div>

        <div className="space-y-8">
          {/* Free Shipping Banner */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🚚</div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">FREE Express Shipping</h2>
            <p className="text-green-700">
              Free 1-2 day express UK shipping on ALL orders - no minimum purchase required!
            </p>
          </div>

          {/* Shipping Details */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Shipping Details</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-black mb-4">UK Delivery</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-black">Express Delivery</p>
                      <p className="text-gray-600 text-sm">1-2 business days</p>
                      <p className="text-green-600 font-bold text-sm">FREE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-black">Tracked Delivery</p>
                      <p className="text-gray-600 text-sm">Full tracking provided</p>
                      <p className="text-green-600 font-bold text-sm">Included</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-4">Coverage</h3>
                <div className="space-y-2">
                  <p className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>England</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Scotland</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Wales</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Northern Ireland</span>
                  </p>
                  <p className="text-gray-500 text-sm mt-4">
                    Currently shipping within the UK only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Processing Times */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Order Processing</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="font-bold text-black mb-2">Processing Time</h3>
                <p className="text-gray-600">
                  Orders placed before 2 PM are typically processed and dispatched the same business day. 
                  Orders placed after 2 PM or on weekends will be processed the next business day.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-bold text-black mb-2">Packaging</h3>
                <p className="text-gray-600">
                  All orders are carefully packaged in discrete, recyclable packaging to ensure your 
                  Opti-15 Gel arrives in perfect condition.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-bold text-black mb-2">Tracking Information</h3>
                <p className="text-gray-600">
                  You'll receive a tracking number via email once your order ships, allowing you to 
                  monitor your delivery progress in real-time.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Shipping FAQ</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">What if I'm not home for delivery?</h3>
                <p className="text-gray-600">
                  Our courier will attempt delivery and leave a card with instructions if you're not available. 
                  You can typically reschedule delivery or arrange collection from a local pickup point.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Can I change my delivery address?</h3>
                <p className="text-gray-600">
                  Please contact us immediately at <a href="mailto:support@optigel.co.uk" className="text-red-600 hover:text-red-700">support@optigel.co.uk</a> 
                  if you need to change your delivery address. We can only make changes before your order ships.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Do you ship internationally?</h3>
                <p className="text-gray-600">
                  Currently, we only ship within the United Kingdom. We're working on expanding our 
                  shipping options and hope to offer international delivery soon.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">What if my package is damaged or lost?</h3>
                <p className="text-gray-600">
                  If your package arrives damaged or doesn't arrive at all, please contact us immediately. 
                  We'll work with our shipping partners to resolve the issue and send you a replacement at no charge.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-red-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-black mb-2">Need Help with Your Shipping?</h3>
            <p className="text-gray-600 mb-4">
              Our customer service team is here to help with any shipping questions.
            </p>
            <div className="space-y-2">
              <p className="font-medium">
                Email: <a href="mailto:support@optigel.co.uk" className="text-red-600 hover:text-red-700">support@optigel.co.uk</a>
              </p>
              <p className="font-medium">
                Phone: <a href="tel:08004700316" className="text-red-600 hover:text-red-700">0800 470 0316</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}