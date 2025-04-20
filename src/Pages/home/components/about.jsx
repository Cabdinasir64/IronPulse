import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaDumbbell, FaHeartbeat, FaMedal } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef([]);

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

      // Container animation
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%"
        },
        opacity: 0,
        duration: 0.6
      });

      // Text block animation
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%"
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

      // Image animation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%"
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

      // Stats counter animation
      statsRef.current.forEach((stat, index) => {
        const target = stat.getAttribute('data-target');
        const count = {value : 0};
        
        gsap.to(count, {
          value: target,
          duration: 2,
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            stat.textContent = Math.ceil(count.value);
            
          },
          delay: index * 0.3
        });
      });

      // Floating icons animation
      const icons = gsap.utils.toArray('.about-icon');
      icons.forEach((icon, i) => {
        gsap.to(icon, {
          y: 10,
          duration: 2 + i,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut"
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 px-6 bg-gradient-to-b from-iron to-iron/50 text-white overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-20 font-title"
        >
          <span className="text-iron-pulse">OUR</span> STORY
        </h2>

        {/* Content Container */}
        <div 
          ref={containerRef}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Text Content */}
          <div 
            ref={textRef}
            className="flex-1 space-y-8"
          >
            <h3 className="text-3xl font-bold">
              Building Champions Since 2012
            </h3>
            <p className="text-lg leading-relaxed">
              IronPulse was founded by professional athletes who saw a need for a training facility that combines elite equipment with scientific programming. What started as a single location has grown into the region's premier fitness destination.
            </p>
            <p className="text-lg leading-relaxed">
              Our philosophy is simple: provide the tools, knowledge, and environment that allow every member to perform at their peak, whether they're training for competition or personal transformation.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div 
                  ref={el => statsRef.current[0] = el}
                  data-target="1500"
                  className="text-4xl md:text-5xl font-bold text-iron-pulse mb-2"
                >
                  0
                </div>
                <p className="text-gray-300">Active Members</p>
              </div>
              <div className="text-center">
                <div 
                  ref={el => statsRef.current[1] = el}
                  data-target="12"
                  className="text-4xl md:text-5xl font-bold text-iron-pulse mb-2"
                >
                  0
                </div>
                <p className="text-gray-300">Certified Coaches</p>
              </div>
              <div className="text-center">
                <div 
                  ref={el => statsRef.current[2] = el}
                  data-target="300"
                  className="text-4xl md:text-5xl font-bold text-iron-pulse mb-2"
                >
                  0
                </div>
                <p className="text-gray-300">Pieces of Equipment</p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div 
            ref={imageRef}
            className="flex-1 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" 
                alt="IronPulse Gym"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Floating Icons */}
            <FaDumbbell className="about-icon text-3xl text-iron-pulse absolute -top-6 -left-6" />
            <FaHeartbeat className="about-icon text-4xl text-iron-energy absolute -bottom-6 left-1/4" />
            <FaMedal className="about-icon text-3xl text-iron-pulse absolute -right-6 top-1/3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;