export default function FeaturesSection() {
  const features = [
    {
      title: "Fast-Acting Relief",
      description: "Experience cooling pain relief within minutes of application. Our advanced formula penetrates deep to target pain at its source.",
      icon: "⚡"
    },
    {
      title: "Natural Ingredients",
      description: "Made with carefully selected natural ingredients including menthol, camphor, and essential oils. No harsh chemicals or synthetic additives.",
      icon: "🌿"
    },
    {
      title: "Multi-Purpose Formula",
      description: "Perfect for joint pain, muscle aches, arthritis discomfort, sports injuries, and general pain relief throughout the body.",
      icon: "🎯"
    },
    {
      title: "Easy Application",
      description: "Non-greasy gel formula absorbs quickly without leaving residue. Apply directly to affected area for targeted relief.",
      icon: "👋"
    },
    {
      title: "Long-Lasting Comfort",
      description: "Extended relief that lasts for hours, allowing you to get back to the activities you love without constant reapplication.",
      icon: "⏰"
    },
    {
      title: "Clinically Tested",
      description: "Developed with medical professionals and tested for safety and effectiveness. Trusted by thousands of satisfied customers.",
      icon: "🔬"
    }
  ];

  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Why Choose <span className="text-red-600">Opti-15 Gel?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary pain relief technology meets natural healing ingredients. 
            Discover why thousands trust Opti-15 Gel for their daily comfort needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How it works section */}
        <div className="bg-red-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              How <span className="text-red-600">Opti-15 Gel</span> Works
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our scientifically formulated gel uses a unique combination of natural ingredients 
              to provide fast, effective pain relief through three key mechanisms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Penetration</h4>
              <p className="text-gray-600">
                Advanced formula penetrates deep into skin layers to reach affected tissues and joints.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Cooling Action</h4>
              <p className="text-gray-600">
                Natural menthol and camphor create an immediate cooling sensation that soothes pain.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Relief</h4>
              <p className="text-gray-600">
                Active ingredients work together to reduce inflammation and provide long-lasting comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}