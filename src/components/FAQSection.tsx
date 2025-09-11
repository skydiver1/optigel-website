'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "How quickly does Opti-15 Gel work?",
      answer: "Most users experience cooling relief within 2-5 minutes of application. The natural menthol and camphor provide immediate cooling sensation, while the other active ingredients work to provide longer-lasting pain relief that can last for several hours."
    },
    {
      question: "Is Opti-15 Gel safe to use daily?",
      answer: "Yes, Opti-15 Gel is formulated with natural ingredients and is safe for daily use. However, we recommend following the usage instructions and not exceeding 3-4 applications per day. If you have sensitive skin or medical conditions, consult with your healthcare provider before use."
    },
    {
      question: "What types of pain does Opti-15 Gel help with?",
      answer: "Opti-15 Gel is effective for various types of pain including joint pain, muscle aches, arthritis discomfort, sports injuries, back pain, neck pain, and general muscle soreness. It's particularly effective for localized pain that can benefit from topical application."
    },
    {
      question: "Are there any side effects?",
      answer: "Opti-15 Gel is made with natural ingredients and is generally well-tolerated. Some users may experience mild skin cooling or tingling, which is normal due to the menthol content. Rare cases of skin irritation may occur in sensitive individuals. Discontinue use if irritation persists."
    },
    {
      question: "How is Opti-15 Gel different from other pain relief products?",
      answer: "Unlike many pain relief products that contain harsh chemicals, Opti-15 Gel uses a carefully balanced blend of natural ingredients. Our unique formula provides both immediate cooling relief and longer-lasting comfort. Plus, we offer a 90-day money-back guarantee, showing our confidence in the product."
    },
    {
      question: "Can I use Opti-15 Gel with other medications?",
      answer: "Since Opti-15 Gel is applied topically and contains natural ingredients, it typically doesn't interfere with oral medications. However, we always recommend consulting with your healthcare provider before combining any treatments, especially if you're taking blood thinners or have skin conditions."
    },
    {
      question: "How long does one tube last?",
      answer: "A single tube contains enough gel for approximately 30-40 applications, depending on the area being treated. For most users applying it 1-2 times daily to localized areas, one tube typically lasts 2-4 weeks."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we offer free express shipping throughout the UK. We're working on expanding our shipping options to include international delivery. Please check our shipping page for the most current information about delivery to your location."
    },
    {
      question: "What if Opti-15 Gel doesn't work for me?",
      answer: "We're confident in our product, which is why we offer a full 90-day money-back guarantee. If you're not completely satisfied with Opti-15 Gel, simply contact our customer service team within 90 days of purchase for a full refund, no questions asked."
    },
    {
      question: "How should I store Opti-15 Gel?",
      answer: "Store Opti-15 Gel in a cool, dry place away from direct sunlight. Keep the cap tightly closed when not in use. The gel has a shelf life of 2 years from the manufacture date. Do not store in extreme temperatures (below freezing or above 85°F/30°C)."
    },
    {
      question: "Is Opti-15 Gel tested on animals?",
      answer: "No, we are committed to cruelty-free practices. Opti-15 Gel and all our products are never tested on animals. We use alternative testing methods and work only with suppliers who share our commitment to ethical practices."
    },
    {
      question: "Can pregnant or breastfeeding women use Opti-15 Gel?",
      answer: "While Opti-15 Gel contains natural ingredients, we recommend that pregnant or breastfeeding women consult with their healthcare provider before using any topical pain relief products. Your doctor can advise whether the ingredients are appropriate for your specific situation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions about Opti-15 Gel? We've got answers. Here are the most common 
            questions our customers ask about our natural pain relief solution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200">
                <button
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <div className={`transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Our friendly customer support team is here to help. Get in touch with us 
              and we'll be happy to answer any questions you might have.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Email Support</h4>
                <p className="text-gray-600">support@optigel.co.uk</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Phone Support</h4>
                <p className="text-gray-600">0800 470 0316</p>
                <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM GMT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}