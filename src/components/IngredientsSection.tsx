export default function IngredientsSection() {
  const ingredients = [
    {
      name: "Menthol",
      percentage: "10%",
      description: "Natural cooling agent that provides immediate relief and reduces pain sensation. Derived from mint plants.",
      benefits: ["Instant cooling", "Pain relief", "Anti-inflammatory"]
    },
    {
      name: "Camphor",
      percentage: "4%",
      description: "Traditional remedy known for its analgesic properties. Helps improve circulation and reduce muscle tension.",
      benefits: ["Improves circulation", "Muscle relaxation", "Antimicrobial"]
    },
    {
      name: "Eucalyptus Oil",
      percentage: "2%",
      description: "Essential oil with powerful anti-inflammatory properties. Enhances penetration of other active ingredients.",
      benefits: ["Anti-inflammatory", "Enhanced absorption", "Natural antiseptic"]
    },
    {
      name: "Aloe Vera Extract",
      percentage: "5%",
      description: "Soothing botanical extract that moisturizes skin and reduces irritation. Supports natural healing processes.",
      benefits: ["Skin soothing", "Moisturizing", "Healing support"]
    },
    {
      name: "Arnica Extract",
      percentage: "3%",
      description: "Traditional herbal remedy used for bruises and muscle soreness. Supports natural recovery processes.",
      benefits: ["Bruise healing", "Reduces swelling", "Natural recovery"]
    },
    {
      name: "Tea Tree Oil",
      percentage: "1%",
      description: "Natural antimicrobial agent that keeps skin healthy while providing additional therapeutic benefits.",
      benefits: ["Antimicrobial", "Skin protection", "Additional therapy"]
    }
  ];

  return (
    <section id="ingredients" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Premium <span className="text-red-600">Natural Ingredients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every ingredient in Opti-15 Gel is carefully selected for its proven therapeutic properties. 
            We believe in transparency - here's exactly what's in our formula and why.
          </p>
        </div>

        {/* Main ingredients grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{ingredient.percentage}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{ingredient.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{ingredient.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {ingredient.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality assurance section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-black mb-4">Quality & Safety Assurance</h3>
            <p className="text-lg text-gray-600">
              We maintain the highest standards in sourcing, manufacturing, and testing.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">GMP Certified</h4>
              <p className="text-sm text-gray-600">Good Manufacturing Practice certified facilities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Third-Party Tested</h4>
              <p className="text-sm text-gray-600">Independent laboratory verification</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">UK Sourced</h4>
              <p className="text-sm text-gray-600">Premium ingredients from trusted UK suppliers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">No Harsh Chemicals</h4>
              <p className="text-sm text-gray-600">Free from parabens, sulfates, and synthetic additives</p>
            </div>
          </div>
        </div>

        {/* Usage instructions */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-black mb-8">How to Use Opti-15 Gel</h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">1</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Clean & Dry</h4>
              <p className="text-gray-600">Ensure the affected area is clean and completely dry before application.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">2</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Apply Gently</h4>
              <p className="text-gray-600">Apply a thin layer and massage gently into skin until absorbed.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">3</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Feel Relief</h4>
              <p className="text-gray-600">Experience cooling relief within minutes. Reapply as needed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}