export default function BenefitsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Benefits of Using<br />
              Opti-15 Gel
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-black mb-2">Natural and Safe</h3>
                <p className="text-gray-600 text-sm">
                  Made from 100% natural ingredients, Opti-15 Gel is a safe alternative for reducing pain without the need for harmful drugs or chemicals that can be harmful to your body.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Effective Pain Relief</h3>
                <p className="text-gray-600 text-sm">
                  Clinical studies have shown that the natural ingredients in Opti-15 Gel are extremely effective in reducing joint pain and inflammation pain throughout the body.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Easy to Use</h3>
                <p className="text-gray-600 text-sm">
                  Simply apply to the affected area and gently massage in. For those who suffer from chronic pain or stiffness, this pain management tool can be used several times throughout the day.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a href="#pricing" className="btn-primary">
                ORDER OPTI-15 GEL
              </a>
            </div>
          </div>

          {/* Right content - Video */}
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8">
              <video 
                className="w-full h-auto rounded-lg"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/knee-rub.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}