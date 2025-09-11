export default function PainReliefAreasSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Video */}
          <div className="relative">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <video 
                className="w-full h-auto rounded-lg"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/31b8c132c3c04b43984900b1e0a8afd4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              The Only Pain Relief<br />
              You'll Need
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              <strong>Wherever your pain is... try Opti-15 Gel!</strong>
            </p>

            <p className="text-gray-600 leading-relaxed">
              Joint problems can be a constant in our lives and the pain... it just stays. It tends to be worse in the morning or when we're stressed and sometimes there's just no relief.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="text-red-500 font-bold mt-1">✓</div>
                <span className="text-gray-700"><strong>Shoulder and neck pain</strong></span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-red-500 font-bold mt-1">✓</div>
                <span className="text-gray-700"><strong>Arms and elbow pain</strong></span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-red-500 font-bold mt-1">✓</div>
                <span className="text-gray-700"><strong>Wrist and hand pain</strong></span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-red-500 font-bold mt-1">✓</div>
                <span className="text-gray-700"><strong>Hip and knee pain</strong></span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-red-500 font-bold mt-1">✓</div>
                <span className="text-gray-700"><strong>Hip and lower back pain</strong></span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-red-500 font-bold mt-1">✓</div>
                <span className="text-gray-700"><strong>And so much more!</strong></span>
              </div>
            </div>

            <p className="text-gray-600 text-sm">
              Try Opti-15 Gel today and see how comfortable it can be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}