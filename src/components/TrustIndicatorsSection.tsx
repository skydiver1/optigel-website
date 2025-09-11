export default function TrustIndicatorsSection() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Award Winning */}
          <div className="space-y-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
              <span className="text-lg">🏆</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-xs uppercase">AWARD WINNING</h3>
              <p className="text-xs text-gray-600">Over 40,000 sold globally</p>
            </div>
          </div>

          {/* Thousands Sold */}
          <div className="space-y-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
              <span className="text-lg">👥</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-xs uppercase">THOUSANDS SOLD</h3>
              <p className="text-xs text-gray-600">Join 1000s more satisfied customers</p>
            </div>
          </div>

          {/* Money Back */}
          <div className="space-y-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
              <span className="text-lg">💰</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-xs uppercase">MONEY BACK</h3>
              <p className="text-xs text-gray-600">90-day guarantee</p>
            </div>
          </div>

          {/* No Side Effects */}
          <div className="space-y-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
              <span className="text-lg">🌿</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-xs uppercase">NO SIDE EFFECTS</h3>
              <p className="text-xs text-gray-600">Safe, natural ingredients</p>
            </div>
          </div>
        </div>

        {/* Trust message */}
        <div className="text-center mt-10">
          <h2 className="font-bold text-black mb-4">
            Trusted, reliable, and effective relief
          </h2>
          <p className="text-gray-600 text-sm max-w-4xl mx-auto mb-6 leading-relaxed">
            Every bottle of Opti-15 Gel is tested and made according to the highest quality standards backed with a industry leading 90-day money-back guarantee.
          </p>
          
          <a href="#pricing" className="btn-primary text-sm px-6 py-3">
            ORDER OPTI-15 GEL
          </a>
        </div>
      </div>
    </section>
  );
}