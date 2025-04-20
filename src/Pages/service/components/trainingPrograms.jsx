import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFire, FaBolt, FaShieldAlt, FaChartLine } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const TrainingPrograms = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const program1Ref = useRef(null);
  const program2Ref = useRef(null);
  const program3Ref = useRef(null);
  const program4Ref = useRef(null);

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
        ease: "back.out(1.7)"
      });

      // Programs animation
      const programs = [program1Ref.current, program2Ref.current, program3Ref.current, program4Ref.current];
      
      programs.forEach((program, index) => {
        gsap.from(program, {
          scrollTrigger: {
            trigger: program,
            start: "top 75%",
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          onComplete: () => {
            // Icon animation
            gsap.to(program.querySelector('.program-icon'), {
              scale: 1.2,
              duration: 0.5,
              yoyo: true,
              repeat: 1,
              ease: "elastic.out(1, 0.5)"
            });
          }
        });

        // Hover effect
        program.addEventListener('mouseenter', () => {
          gsap.to(program, {
            y: -10,
            duration: 0.3,
            boxShadow: "0 15px 30px rgba(224, 40, 40, 0.2)",
            ease: "power1.out"
          });
        });

        program.addEventListener('mouseleave', () => {
          gsap.to(program, {
            y: 0,
            duration: 0.3,
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            ease: "power1.out"
          });
        });
      });

      // Continuous icon animations
      gsap.to(".program-icon", {
        y: -5,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.2
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 px-6 bg-iron-dark text-white overflow-x-hidden"
      id="programs"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-20 font-title"
        >
          <span className="text-iron-pulse">ELITE</span> TRAINING SYSTEMS
        </h2>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Program 1 */}
          <div 
            ref={program1Ref}
            className="program-card bg-gradient-to-br from-iron to-iron-steel p-8 rounded-2xl shadow-xl border border-iron-pulse/20 relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-iron-pulse rounded-full opacity-10"></div>
            <FaFire className="program-icon text-5xl text-iron-pulse mb-6" />
            <h3 className="text-2xl font-bold mb-4">Ignite Program</h3>
            <p className="text-gray-300 mb-6">
              8-week fat burning system combining metabolic conditioning with strength circuits
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-iron-pulse rounded-full mr-3"></span>
                <span>4 weekly training sessions</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-iron-pulse rounded-full mr-3"></span>
                <span>Nutrition guidance</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-iron-pulse rounded-full mr-3"></span>
                <span>Progress tracking</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-iron-pulse hover:bg-iron-energy text-white font-bold rounded-lg transition-all duration-300">
              LEARN MORE
            </button>
          </div>

          {/* Program 2 */}
          <div 
            ref={program2Ref}
            className="program-card bg-gradient-to-br from-iron to-iron-steel p-8 rounded-2xl shadow-xl border border-iron-pulse/20 relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-iron-pulse rounded-full opacity-10"></div>
            <FaBolt className="program-icon text-5xl text-iron-pulse mb-6" />
            <h3 className="text-2xl font-bold mb-4">Power Surge</h3>
            <p className="text-gray-300 mb-6">
              12-week strength building protocol focusing on compound lifts and progressive overload
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-iron-pulse rounded-full mr-3"></span>
                <span>5 weekly training sessions</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-iron-pulse rounded-full mr-3"></span>
                <span>Recovery protocols</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-iron-pulse rounded-full mr-3"></span>
                <span>1-on-1 coaching</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-iron-pulse hover:bg-iron-energy text-white font-bold rounded-lg transition-all duration-300">
              LEARN MORE
            </button>
          </div>

          {/* Program 3 */}
          <div 
            ref={program3Ref}
            className="program-card bg-gradient-to-br from-iron to-iron-steel p-8 rounded-2xl shadow-xl border border-iron-pulse/20 relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-iron-pulse rounded-full opacity-10"></div>
            <FaShieldAlt className="program-icon text-5xl text-iron-pulse mb-6" />
            <h3 className="text-2xl font-bold mb-4">Armor Build</h3>
            <p className="text-gray-300 mb-6">
              Functional training program enhancing joint stability and injury resilience
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-iron-pulse rounded-full mr-3"></span>
                <span>3 weekly training sessions</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-iron-pulse rounded-full mr-3"></span>
                <span>Mobility drills</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-iron-pulse rounded-full mr-3"></span>
                <span>Posture correction</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-iron-pulse hover:bg-iron-energy text-white font-bold rounded-lg transition-all duration-300">
              LEARN MORE
            </button>
          </div>

          {/* Program 4 */}
          <div 
            ref={program4Ref}
            className="program-card bg-gradient-to-br from-iron to-iron-steel p-8 rounded-2xl shadow-xl border border-iron-pulse/20 relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-iron-pulse rounded-full opacity-10"></div>
            <FaChartLine className="program-icon text-5xl text-iron-pulse mb-6" />
            <h3 className="text-2xl font-bold mb-4">Peak Performance</h3>
            <p className="text-gray-300 mb-6">
              Comprehensive 16-week program for athletes preparing for competition
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-iron-pulse rounded-full mr-3"></span>
                <span>6 weekly training sessions</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-iron-pulse rounded-full mr-3"></span>
                <span>Video analysis</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-iron-pulse rounded-full mr-3"></span>
                <span>Stage preparation</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-iron-pulse hover:bg-iron-energy text-white font-bold rounded-lg transition-all duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;