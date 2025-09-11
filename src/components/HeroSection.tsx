import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-black">Drug-Free,</span><br />
              <span className="text-red-600">Instant,</span><br />
              <span className="text-black">Cooling Pain Relief</span>
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Revolutionary Opti-15 Gel provides fast-acting, natural pain relief 
              for joints and muscles. Clinically proven ingredients deliver cooling 
              comfort exactly where you need it most.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Natural ingredients, no harsh chemicals</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Fast-acting relief in minutes</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">90-day money-back guarantee</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#pricing" className="btn-primary text-center">
                Order Now
              </a>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold uppercase hover:border-red-600 hover:text-red-600 transition-all">
                Learn More
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.6/5 (2,847 reviews)</span>
              </div>
            </div>
          </div>

          {/* Right content - Product image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 lg:p-12">
              {/* Placeholder for product image */}
              <div className="aspect-square bg-white rounded-xl shadow-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-red-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">Opti-15</span>
                  </div>
                  <p className="text-gray-600">Product image placeholder</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                NEW
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold">
                90-DAY GUARANTEE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}