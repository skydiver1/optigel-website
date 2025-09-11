import Image from 'next/image';

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              How does Opti-15<br />
              work?
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              Opti-15 Gel contains only natural ingredients that have been scientifically shown to:
            </p>

            <div className="space-y-4">
              {/* Reduce Inflammation */}
              <div>
                <h3 className="font-bold text-black mb-2">• Reduces Inflammation</h3>
                <p className="text-gray-600 text-sm pl-4">
                  Arnica and rosemary oil first natural inflammation in the body and provide relief from swelling and pain.
                </p>
              </div>

              {/* Improves Circulation */}
              <div>
                <h3 className="font-bold text-black mb-2">• Improves Circulation</h3>
                <p className="text-gray-600 text-sm pl-4">
                  Horse chestnut oil and peppermint oil improve blood flow around pain and inflamed areas and promote healing.
                </p>
              </div>

              {/* Soothes & Cools */}
              <div>
                <h3 className="font-bold text-black mb-2">• Soothes & Cools</h3>
                <p className="text-gray-600 text-sm pl-4">
                  Menthol and eucalyptus oil deliver a refreshing cooling sensation that provides relief and lasting comfort.
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm italic">
              Opti-15 Gel is the simple, reliable way to relieve your pain.
            </p>

            <div className="mt-8">
              <a href="#pricing" className="btn-primary">
                ORDER OPTI-15 GEL
              </a>
            </div>
          </div>

          {/* Right content - Product image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="bg-white rounded-lg shadow-lg flex items-center justify-center p-6">
                <Image
                  src="/01_3014.jpg"
                  alt="Opti-15 Gel Tube"
                  width={400}
                  height={500}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}