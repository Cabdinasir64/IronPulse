import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFire, FaCrown, FaGem, FaCheck, FaDumbbell, FaUserAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const MembershipTiers = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tier1Ref = useRef(null);
  const tier2Ref = useRef(null);
  const tier3Ref = useRef(null);
  const featuresRef = useRef([]);

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

      // Tier cards animation
      const tiers = [tier1Ref.current, tier2Ref.current, tier3Ref.current];

      tiers.forEach((tier, index) => {
        gsap.from(tier, {
          scrollTrigger: {
            trigger: tier,
            start: "top 75%",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          onComplete: () => {
            // Icon animation
            gsap.to(tier.querySelector('.tier-icon'), {
              scale: 1.2,
              duration: 0.5,
              yoyo: true,
              repeat: 1,
              ease: "elastic.out(1, 0.5)"
            });
          }
        });

        // Hover effect
        tier.addEventListener('mouseenter', () => {
          gsap.to(tier, {
            y: -10,
            duration: 0.3,
            boxShadow: "0 15px 30px rgba(224, 40, 40, 0.2)",
            ease: "power1.out"
          });
        });

        tier.addEventListener('mouseleave', () => {
          gsap.to(tier, {
            y: 0,
            duration: 0.3,
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            ease: "power1.out"
          });
        });
      });

      // Features list animation
      featuresRef.current.forEach((feature, index) => {
        gsap.from(feature, {
          scrollTrigger: {
            trigger: feature,
            start: "top 85%",
          },
          x: -20,
          opacity: 0,
          duration: 0.5,
          delay: index * 0.05,
          ease: "power2.out"
        });
      });

      // Continuous icon animations
      gsap.to(".tier-icon", {
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

  const features = [
    "24/7 gym access",
    "Free fitness assessment",
    "Locker room amenities",
    "Group class access",
    "Personal training discount",
    "Nutrition consultation",
    "Recovery area access",
    "Guest passes",
    "Towel service",
    "Supplement discounts"
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 bg-iron text-white"
      id="membership-tiers"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-20 font-title"
        >
          <span className="text-iron-pulse">FIND</span> YOUR PERFECT PLAN
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Basic Tier */}
          <div
            ref={tier1Ref}
            className="tier-card bg-gradient-to-b from-iron-steel to-iron-dark p-8 rounded-2xl shadow-lg border border-iron/20 hover:border-iron-pulse/40 transition-all flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <FaFire className="tier-icon text-4xl text-iron-pulse mb-2" />
                <h3 className="text-2xl font-bold">Basic</h3>
                <p className="text-gray-400">Essential access</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">Starting at</p>
                <p className="text-3xl font-bold text-iron-pulse">$49<span className="text-lg">/mo</span></p>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {features.slice(0, 4).map((feature, index) => (
                <li
                  key={index}
                  ref={el => featuresRef.current[index] = el}
                  className="flex items-center"
                >
                  <FaCheck className="text-iron-pulse mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <button className="w-full py-3 bg-iron-dark hover:bg-iron-pulse text-white font-bold rounded-lg transition-all duration-300">
                JOIN BASIC
              </button>
            </div>
          </div>

          {/* Popular Tier */}
          <div
            ref={tier2Ref}
            className="tier-card bg-gradient-to-b from-iron-pulse/10 to-iron-dark p-8 rounded-2xl shadow-lg border-2 border-iron-pulse/50 hover:border-iron-pulse transition-all transform hover:scale-[1.02] relative flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 bg-iron-pulse text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold">
              MOST POPULAR
            </div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <FaCrown className="tier-icon text-4xl text-iron-pulse mb-2" />
                <h3 className="text-2xl font-bold">Premium</h3>
                <p className="text-gray-400">Enhanced experience</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">Starting at</p>
                <p className="text-3xl font-bold text-iron-pulse">$79<span className="text-lg">/mo</span></p>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {features.slice(0, 7).map((feature, index) => (
                <li
                  key={index + 4}
                  ref={el => featuresRef.current[index + 4] = el}
                  className="flex items-center"
                >
                  <FaCheck className="text-iron-pulse mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <button className="w-full py-3 bg-iron-pulse hover:bg-iron-energy text-white font-bold rounded-lg transition-all duration-300">
                JOIN PREMIUM
              </button>
            </div>
          </div>

          {/* Elite Tier */}
          <div
            ref={tier3Ref}
            className="tier-card bg-gradient-to-b from-iron-steel to-iron-dark p-8 rounded-2xl shadow-lg border border-iron/20 hover:border-iron-pulse/40 transition-all flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <FaGem className="tier-icon text-4xl text-iron-pulse mb-2" />
                <h3 className="text-2xl font-bold">Elite</h3>
                <p className="text-gray-400">VIP treatment</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">Starting at</p>
                <p className="text-3xl font-bold text-iron-pulse">$129<span className="text-lg">/mo</span></p>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li
                  key={index + 11}
                  ref={el => featuresRef.current[index + 11] = el}
                  className="flex items-center"
                >
                  <FaCheck className="text-iron-pulse mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <button className="w-full py-3 bg-iron-dark hover:bg-iron-pulse text-white font-bold rounded-lg transition-all duration-300">
                JOIN ELITE
              </button>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="bg-iron-dark rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">FULL FEATURE COMPARISON</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-iron">
                  <th className="text-left pb-4">Features</th>
                  <th className="text-center pb-4">Basic</th>
                  <th className="text-center pb-4">Premium</th>
                  <th className="text-center pb-4">Elite</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-iron/30">
                    <td className="py-4">{feature}</td>
                    <td className="text-center">
                      {index < 4 ? <FaCheck className="text-iron-pulse mx-auto" /> : <span className="text-gray-500">—</span>}
                    </td>
                    <td className="text-center">
                      {index < 7 ? <FaCheck className="text-iron-pulse mx-auto" /> : <span className="text-gray-500">—</span>}
                    </td>
                    <td className="text-center">
                      <FaCheck className="text-iron-pulse mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipTiers;