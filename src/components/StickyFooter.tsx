'use client';

export default function StickyFooter() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-600 shadow-lg z-50 border-t border-red-700">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <div className="font-bold text-sm">🔥 Limited Time Offer</div>
            <div className="text-xs">Fast, effective pain relief - £19.95</div>
          </div>
          
          <button
            onClick={scrollToPricing}
            className="bg-white text-red-600 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-colors text-sm"
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
}