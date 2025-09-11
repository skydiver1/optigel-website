import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-black">Opti-15</span>
              <span className="text-3xl font-bold text-red-600 ml-1">Gel</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-black mb-8">Terms and Conditions</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <p className="text-sm text-gray-500 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">2. Product Information</h2>
              <p className="mb-4">
                Opti-15 Gel is a topical pain relief product made with natural ingredients. While we strive to provide accurate product information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Product descriptions and images are for informational purposes</li>
                <li>Individual results may vary</li>
                <li>This product is not intended to diagnose, treat, cure, or prevent any disease</li>
                <li>Consult your healthcare provider before use if you have medical conditions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">3. Orders and Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All orders are subject to acceptance and product availability</li>
                <li>Prices are in GBP and include VAT where applicable</li>
                <li>Payment is processed securely through Stripe</li>
                <li>We reserve the right to refuse or cancel orders</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">4. Shipping and Delivery</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We offer free shipping within the UK</li>
                <li>Delivery times are estimates and not guaranteed</li>
                <li>Risk of loss transfers to you upon delivery</li>
                <li>International shipping may be available with additional charges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">5. Returns and Refunds</h2>
              <p className="mb-4">We offer a 90-day money-back guarantee:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact us within 90 days of purchase for returns</li>
                <li>Products must be in original condition</li>
                <li>Return shipping costs may apply</li>
                <li>Refunds will be processed to original payment method</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">6. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of Medical Technology Ltd and is protected by copyright and intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">7. Limitation of Liability</h2>
              <p>
                Medical Technology Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">9. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Medical Technology Ltd</strong></p>
                <p>Email: support@optigel.co.uk</p>
                <p>Phone: 0800 470 0316</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to update these terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of the website after any changes constitutes acceptance of the new terms.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}