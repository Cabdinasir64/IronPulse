import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaDumbbell, FaHeartbeat, FaUsers, FaClipboardCheck, FaCalendarAlt, FaTrophy, FaUserAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const MembershipBenefits = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const benefit1Ref = useRef(null);
  const benefit2Ref = useRef(null);
  const benefit3Ref = useRef(null);
  const benefit4Ref = useRef(null);

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

      // Container animation
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%"
        },
        opacity: 0,
        duration: 0.6
      });

      // Benefits animation
      const benefits = [benefit1Ref.current, benefit2Ref.current, benefit3Ref.current, benefit4Ref.current];
      
      benefits.forEach((benefit, index) => {
        gsap.from(benefit, {
          scrollTrigger: {
            trigger: benefit,
            start: "top 75%",
          },
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power2.out",
          onComplete: () => {
            // Icon animation
            gsap.to(benefit.querySelector('.benefit-icon'), {
              scale: 1.2,
              duration: 0.5,
              yoyo: true,
              repeat: 1,
              ease: "elastic.out(1, 0.5)"
            });
          }
        });

        // Hover effect
        benefit.addEventListener('mouseenter', () => {
          gsap.to(benefit, {
            y: -5,
            duration: 0.3,
            boxShadow: "0 10px 25px rgba(224, 40, 40, 0.2)",
            ease: "power1.out"
          });
        });

        benefit.addEventListener('mouseleave', () => {
          gsap.to(benefit, {
            y: 0,
            duration: 0.3,
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            ease: "power1.out"
          });
        });
      });

      // Continuous icon animations
      gsap.to(".benefit-icon", {
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
      className="py-24 px-6 bg-gradient-to-tr from-iron to-iron/50 text-white overflow-x-hidden"
      id="membership-benefits"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-20 font-title"
        >
          <span className="text-iron-pulse">EXCLUSIVE</span> MEMBER BENEFITS
        </h2>

        {/* Benefits Container */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Benefit 1 */}
          <div 
            ref={benefit1Ref}
            className="benefit-card bg-gradient-to-br from-iron to-iron-steel p-8 rounded-2xl shadow-lg border border-iron/20 hover:border-iron-pulse/40 transition-all"
          >
            <div className="flex items-start mb-6">
              <div className="benefit-icon-container bg-iron-pulse/10 p-4 rounded-lg mr-6">
                <FaDumbbell className="benefit-icon text-3xl text-iron-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Premium Equipment</h3>
                <p className="text-gray-300">
                  Access to our $500,000 worth of cutting-edge strength and cardio equipment from top brands like Life Fitness and Hammer Strength.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 2 */}
          <div 
            ref={benefit2Ref}
            className="benefit-card bg-gradient-to-br from-iron to-iron-steel p-8 rounded-2xl shadow-lg border border-iron/20 hover:border-iron-pulse/40 transition-all"
          >
            <div className="flex items-start mb-6">
              <div className="benefit-icon-container bg-iron-pulse/10 p-4 rounded-lg mr-6">
                <FaHeartbeat className="benefit-icon text-3xl text-iron-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Recovery Zone</h3>
                <p className="text-gray-300">
                  Unlimited access to our recovery area featuring cryotherapy, percussion massagers, and NormaTec compression boots.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 3 */}
          <div 
            ref={benefit3Ref}
            className="benefit-card bg-gradient-to-br from-iron to-iron-steel p-8 rounded-2xl shadow-lg border border-iron/20 hover:border-iron-pulse/40 transition-all"
          >
            <div className="flex items-start mb-6">
              <div className="benefit-icon-container bg-iron-pulse/10 p-4 rounded-lg mr-6">
                <FaUsers className="benefit-icon text-3xl text-iron-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Community Events</h3>
                <p className="text-gray-300">
                  Free entry to member-only events like fitness challenges, nutrition workshops, and guest speaker sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 4 */}
          <div 
            ref={benefit4Ref}
            className="benefit-card bg-gradient-to-br from-iron to-iron-steel p-8 rounded-2xl shadow-lg border border-iron/20 hover:border-iron-pulse/40 transition-all"
          >
            <div className="flex items-start mb-6">
              <div className="benefit-icon-container bg-iron-pulse/10 p-4 rounded-lg mr-6">
                <FaClipboardCheck className="benefit-icon text-3xl text-iron-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Progress Tracking</h3>
                <p className="text-gray-300">
                  Complimentary body composition scans every 90 days and access to our IronPulse training app for workout tracking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-iron p-6 rounded-xl text-center">
            <FaDumbbell className="text-4xl text-iron-pulse mx-auto mb-4" />
            <p className="text-3xl font-bold mb-2">200+</p>
            <p className="text-gray-400">Pieces of Equipment</p>
          </div>
          <div className="bg-iron p-6 rounded-xl text-center">
            <FaCalendarAlt className="text-4xl text-iron-pulse mx-auto mb-4" />
            <p className="text-3xl font-bold mb-2">50+</p>
            <p className="text-gray-400">Weekly Classes</p>
          </div>
          <div className="bg-iron p-6 rounded-xl text-center">
            <FaUserAlt className="text-4xl text-iron-pulse mx-auto mb-4" />
            <p className="text-3xl font-bold mb-2">12</p>
            <p className="text-gray-400">Certified Coaches</p>
          </div>
          <div className="bg-iron p-6 rounded-xl text-center">
            <FaTrophy className="text-4xl text-iron-pulse mx-auto mb-4" />
            <p className="text-3xl font-bold mb-2">24/7</p>
            <p className="text-gray-400">Gym Access</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;