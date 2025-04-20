import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const testimonial1Ref = useRef(null);
  const testimonial2Ref = useRef(null);
  const testimonial3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Container fade in
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%"
        },
        opacity: 0,
        duration: 0.6
      });

      // Testimonial cards animation
      const testimonials = [testimonial1Ref.current, testimonial2Ref.current, testimonial3Ref.current];
      
      testimonials.forEach((testimonial, index) => {
        gsap.from(testimonial, {
          scrollTrigger: {
            trigger: testimonial,
            start: "top 75%",
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "back.out(1.7)",
          onComplete: () => {
            // Quote icon animation
            gsap.from(testimonial.querySelector('.quote-icon'), {
              scale: 0,
              duration: 0.5,
              ease: "elastic.out(1, 0.5)"
            });
          }
        });
      });

      // Continuous animation for stars
      gsap.to(".star-icon", {
        y: -3,
        yoyo: true,
        repeat: -1,
        duration: 1.5,
        stagger: 0.1,
        ease: "sine.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 px-6 bg-iron text-white overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-20 font-title"
        >
          <span className="text-iron-pulse">TRUSTED</span> BY ATHLETES
        </h2>

        {/* Testimonials Container */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {/* Testimonial 1 */}
          <div 
            ref={testimonial1Ref}
            className="testimonial-card bg-iron-steel p-8 rounded-2xl shadow-xl relative"
          >
            <FaQuoteLeft className="quote-icon text-4xl text-iron-pulse opacity-20 absolute top-6 right-6" />
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-icon text-yellow-400 text-lg mx-0.5" />
              ))}
            </div>
            <p className="text-lg mb-6">
              "IronPulse transformed my training. The equipment is top-notch and the coaches helped me break through plateaus I'd had for years."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-iron-pulse mr-4 overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="User" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Marcus R.</h4>
                <p className="text-sm text-gray-400">Professional Athlete</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div 
            ref={testimonial2Ref}
            className="testimonial-card bg-iron-steel p-8 rounded-2xl shadow-xl relative"
          >
            <FaQuoteLeft className="quote-icon text-4xl text-iron-pulse opacity-20 absolute top-6 right-6" />
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-icon text-yellow-400 text-lg mx-0.5" />
              ))}
            </div>
            <p className="text-lg mb-6">
              "The nutrition guidance alone was worth joining. Combined with their training programs, I've never been in better shape."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-iron-pulse mr-4 overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="User" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Sarah L.</h4>
                <p className="text-sm text-gray-400">Fitness Competitor</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div 
            ref={testimonial3Ref}
            className="testimonial-card bg-iron-steel p-8 rounded-2xl shadow-xl relative"
          >
            <FaQuoteLeft className="quote-icon text-4xl text-iron-pulse opacity-20 absolute top-6 right-6" />
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-icon text-yellow-400 text-lg mx-0.5" />
              ))}
            </div>
            <p className="text-lg mb-6">
              "The community at IronPulse keeps me motivated. I've made more progress here in 6 months than 2 years at other gyms."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-iron-pulse mr-4 overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/75.jpg" 
                  alt="User" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">David T.</h4>
                <p className="text-sm text-gray-400">Bodybuilder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;