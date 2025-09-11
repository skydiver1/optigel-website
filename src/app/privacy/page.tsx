import Link from 'next/link';

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold text-black mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <div>
              <p className="text-sm text-gray-500 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                When you visit our website or make a purchase, we collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely through Stripe)</li>
                <li>Order history and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and shipping updates</li>
                <li>Provide customer support</li>
                <li>Improve our products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment processing (Stripe) to complete transactions</li>
                <li>Shipping companies to deliver your orders</li>
                <li>Legal compliance when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. All payment information is processed securely through Stripe and we use SSL encryption to protect data transmission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">5. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience and remember your preferences. You can disable cookies in your browser settings, though this may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Medical Technology Ltd</strong></p>
                <p>Email: support@optigel.co.uk</p>
                <p>Phone: 0800 470 0316</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
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