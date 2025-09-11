'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  text: string;
  verified?: boolean;
  image: string;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah",
      text: "Really good gel for massaging painful joints. Useful for pain relief and sore joints.",
      verified: true,
      image: "/face-1.jpg"
    },
    {
      name: "Dee", 
      text: "I suffer with arthritis and Opti-15 Gel helps me with my knee, shoulder and elbow pain.",
      verified: true,
      image: "/face-2.jpg"
    },
    {
      name: "Kelly",
      text: "Ever since I damaged my knee, I've been going to physio. Although not a cure, Opti-15 Gel has really helped my symptoms.",
      verified: true,
      image: "/face-3.jpg"
    },
    {
      name: "Ian",
      text: "I was skeptical at first, but after just three days of using Opti-15 Gel on my knee, I could feel a real difference.",
      verified: true,
      image: "/face-4.jpg"
    },
    {
      name: "David",
      text: "As a construction worker, muscle aches are part of daily life. This gel has been a game changer for my recovery.",
      verified: true,
      image: "/face-5.jpg"
    },
    {
      name: "Oliver",
      text: "I've struggled with joint pain for years. Opti-15 Gel is the only thing that's given me real, lasting relief.",
      verified: true,
      image: "/face-6.jpg"
    }
  ];

  const itemsPerSlide = isMobile ? 1 : 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - itemsPerSlide ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - itemsPerSlide : prevIndex - 1
    );
  };

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsPerSlide]);

  return (
    <section id="reviews" className="bg-gray-100 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-bold text-black mb-4">
            Thousands of satisfied Opti-15 Gel users have already found relief
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden mx-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`${isMobile ? 'w-full' : 'w-1/3'} flex-shrink-0 px-3`}>
                  <div className="bg-white rounded-lg p-6 shadow-sm h-full">
                    {/* Customer Avatar */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full mr-3 overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={`${testimonial.name} headshot`}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-sm">{testimonial.name}</h3>
                        {testimonial.verified && (
                          <div className="flex items-center text-xs text-green-600">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Verified Purchase
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 text-sm leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: testimonials.length - itemsPerSlide + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}