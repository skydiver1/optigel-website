export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      age: 54,
      location: "Manchester",
      rating: 5,
      text: "I've struggled with joint pain for years, trying every cream and gel on the market. Opti-15 Gel is honestly the only thing that's given me real, lasting relief. Within minutes of applying it, the cooling sensation kicks in and the pain just melts away.",
      condition: "Arthritis pain"
    },
    {
      name: "James P.",
      age: 42,
      location: "London",
      rating: 5,
      text: "As a construction worker, muscle aches and pains are part of my daily life. This gel has been a game changer for me. I use it after long days on site and it helps me recover so much faster. The natural ingredients give me peace of mind too.",
      condition: "Muscle soreness"
    },
    {
      name: "Margaret T.",
      age: 67,
      location: "Edinburgh",
      rating: 5,
      text: "I was skeptical at first, but after just three days of using Opti-15 Gel on my knee, I could feel a real difference. The cooling effect is immediate and the relief lasts for hours. I've recommended it to all my friends!",
      condition: "Knee pain"
    },
    {
      name: "David R.",
      age: 38,
      location: "Birmingham",
      rating: 5,
      text: "I injured my shoulder playing football and was looking for something natural to help with the pain. This gel exceeded all my expectations. It's non-greasy, absorbs quickly, and provides excellent pain relief. Couldn't be happier!",
      condition: "Sports injury"
    },
    {
      name: "Linda K.",
      age: 59,
      location: "Liverpool",
      rating: 5,
      text: "Having tried countless pain relief products over the years, I can honestly say Opti-15 Gel stands out from the rest. The combination of natural ingredients works wonderfully, and I love that there are no harsh chemicals.",
      condition: "General pain relief"
    },
    {
      name: "Michael B.",
      age: 45,
      location: "Glasgow",
      rating: 5,
      text: "The 90-day guarantee convinced me to try it, but I knew within the first week that this was something special. My back pain that's bothered me for months is finally manageable. Thank you for creating such an effective product!",
      condition: "Back pain"
    }
  ];

  return (
    <section id="reviews" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Real Stories from <span className="text-red-600">Real Customers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what thousands of satisfied customers 
            are saying about their experience with Opti-15 Gel.
          </p>
          
          {/* Overall rating */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex text-yellow-400 text-2xl">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-gray-800">4.6/5</div>
              <div className="text-gray-600">Based on 2,847 reviews</div>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
              {/* Rating stars */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-800">
                      {testimonial.name}, {testimonial.age}
                    </div>
                    <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {testimonial.condition}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="bg-red-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-black mb-4">Trusted by Thousands</h3>
            <p className="text-lg text-gray-600">
              Join the growing community of people who've found relief with Opti-15 Gel.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">4.6★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-600">Would Recommend</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">90</div>
              <div className="text-gray-600">Day Guarantee</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a href="#pricing" className="btn-primary inline-block mr-4">
              Try Opti-15 Risk Free
            </a>
            <p className="text-sm text-gray-600 mt-4">
              * Based on customer surveys and verified purchase reviews
            </p>
          </div>
        </div>

        {/* Video testimonial placeholder */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-black mb-8">See What Customers Are Saying</h3>
          
          <div className="bg-gray-100 rounded-2xl p-12 max-w-2xl mx-auto">
            <div className="aspect-video bg-gray-300 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600">Customer video testimonial placeholder</p>
                <p className="text-sm text-gray-500 mt-2">Real customers sharing their success stories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}