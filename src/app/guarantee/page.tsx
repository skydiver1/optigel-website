import Link from 'next/link';

export default function GuaranteePage() {
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
          <div className="text-6xl mb-4">🛡️</div>
          <h1 className="text-4xl font-bold text-black mb-4">90-Day Money-Back Guarantee</h1>
          <p className="text-gray-600 text-xl">
            We're so confident in Opti-15 Gel, we guarantee your satisfaction
          </p>
        </div>

        <div className="space-y-8">
          {/* Main Guarantee Promise */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Our Promise to You</h2>
            <p className="text-lg text-gray-700 mb-6">
              If Opti-15 Gel doesn't provide the pain relief you're looking for within 90 days, 
              we'll refund every penny you paid. No questions, no hassles, no restocking fees.
            </p>
            <div className="bg-white rounded-lg p-4 inline-block shadow-md">
              <p className="text-2xl font-bold text-green-600">100% Money Back</p>
              <p className="text-sm text-gray-600">Full refund guaranteed</p>
            </div>
          </div>

          {/* Why We Offer This Guarantee */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Why We Offer This Guarantee</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-black mb-3">We Believe in Our Product</h3>
                <p className="text-gray-600 mb-4">
                  Opti-15 Gel is formulated with natural, clinically-studied ingredients that have 
                  helped thousands of people find relief from joint pain and inflammation.
                </p>
                
                <h3 className="text-lg font-bold text-black mb-3">Every Body Is Different</h3>
                <p className="text-gray-600">
                  While most of our customers experience significant relief, we understand that 
                  everyone's body responds differently. Our guarantee ensures you can try our 
                  product risk-free.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">Customer Satisfaction First</h3>
                <p className="text-gray-600 mb-4">
                  Your satisfaction is more important to us than any single sale. We'd rather 
                  earn your trust and potentially your business in the future than have an 
                  unsatisfied customer.
                </p>
                
                <h3 className="text-lg font-bold text-black mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  Over 95% of our customers are satisfied with their purchase. The few who aren't 
                  are always treated with respect and receive their full refund promptly.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6">How Our Guarantee Works</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">90 Full Days to Try</h3>
                  <p className="text-gray-600">
                    From the day you receive your order, you have 90 full days to experience the benefits 
                    of Opti-15 Gel. That's three full months to see if it works for your specific needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">No Questions Asked</h3>
                  <p className="text-gray-600">
                    If you're not satisfied for any reason, simply contact us. We won't ask for detailed 
                    explanations or try to convince you to keep the product. Your word is enough for us.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">Full Refund Processed</h3>
                  <p className="text-gray-600">
                    We refund 100% of your purchase price back to your original payment method within 
                    5-7 business days. No hidden fees, no restocking charges, no deductions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">Keep Any Unused Product</h3>
                  <p className="text-gray-600">
                    You don't need to return unused tubes for a refund. Simply contact us and we'll 
                    process your refund immediately. Any unused product is yours to keep.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Success Stories */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Why Customers Trust Our Guarantee</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic mb-3">
                  "I was hesitant to try another pain relief product, but the 90-day guarantee convinced me. 
                  I'm so glad I did - it's been life-changing for my arthritis pain!"
                </p>
                <p className="text-sm text-gray-500">- Sarah M., verified customer</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic mb-3">
                  "The guarantee showed me they really believed in their product. I didn't need it, 
                  but knowing I could return it made the decision easy."
                </p>
                <p className="text-sm text-gray-500">- David T., verified customer</p>
              </div>
            </div>
          </div>

          {/* Start Your Guarantee */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Start Your Risk-Free Trial Today</h2>
            <p className="text-lg mb-6">
              Join thousands of satisfied customers who've discovered natural pain relief with Opti-15 Gel
            </p>
            <Link 
              href="/#pricing"
              className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Order Now - 90-Day Guarantee
            </Link>
            <p className="text-sm mt-4 opacity-90">
              Remember: You have nothing to lose and pain-free days to gain
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-black mb-2">Questions About Our Guarantee?</h3>
            <p className="text-gray-600 mb-4">
              Our customer service team is happy to explain how our guarantee works.
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