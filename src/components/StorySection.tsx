import Image from 'next/image';

export default function StorySection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content - Story text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              The story behind the<br />
              'miracle' pain relief gel...
            </h2>
            
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Opti-15 Gel was created by the Czech herbalist, Jiří. Jiří's love for herbs was passed on by his grandmother, who taught him what each herb was good for and how to combine them.
              </p>
              
              <p>
                Fast forward over 30 years and Jiří's formula is <strong>used worldwide</strong> for it's incredible soothing properties helping people overcome pain and get back to doing what they love.
              </p>
              
              <p>
                This was picked up by Tower Health a company that believes in using only <strong>high quality natural ingredients</strong>, that do not contain artificial perfumes, dyes, preservatives or genetically modified raw materials. Jiří and Tower Health both share this <strong>love of health and wellness through nature</strong> and instead of focusing on cheap alternatives to short term relief, we focus on using only the <strong>highest quality ingredients</strong> and these are truly reflected in the quality and efficacy of the products.
              </p>
            </div>
          </div>

          {/* Right content - Product image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
              <div className="transform rotate-12">
                <Image
                  src="/01_3014.jpg"
                  alt="Opti-15 Gel Tube"
                  width={200}
                  height={300}
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}