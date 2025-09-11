import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left content - exactly matching ArthroGel */}
          <div className="space-y-4">
            <h1 className="font-bold leading-tight text-black mb-4">
              Fast, Effective Relief For<br />
              Painful Joints
            </h1>
            
            <p className="text-gray-600 mb-6">
              Opti-15 Gel is a drug-free, instant cooling pain relief gel formulated with powerful, natural ingredients that provide relief from pain and inflammation and help improve joint health and mobility.
            </p>

            <div className="mb-6">
              <div className="flex items-start space-x-2">
                <div className="text-green-500 text-sm mt-0.5">✓</div>
                <span className="text-gray-700 text-sm">It's a drug-free, powerful natural relief, and its great results will start taking effect right away</span>
              </div>
            </div>

            <div className="mt-6">
              <a href="#upsell" className="btn-primary text-center inline-block text-sm px-6 py-3">
                ORDER OPTI-15 GEL
              </a>
            </div>
          </div>

          {/* Right content - GET OPTI-15 GEL box exactly like ArthroGel */}
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="text-center">
                {/* Product video */}
                <div className="mb-4">
                  <video 
                    className="w-full h-auto rounded object-contain mx-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ maxWidth: '400px', maxHeight: '300px' }}
                  >
                    <source src="/e83f08302dda43ed9598ecc8ac9c42a4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                <div className="space-y-1 text-xs text-gray-600">
                  <p>✓ Fast, effective relief for painful joints</p>
                  <p>✓ Drug-free, natural formula</p>
                  <p>✓ 90-day money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}