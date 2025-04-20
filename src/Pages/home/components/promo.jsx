import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFire, FaCalendarAlt, FaPercentage } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Promo = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

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

      // Promo cards animation
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];
      
      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "back.out(1.7)",
          onComplete: () => {
            // Pulse effect on icon
            gsap.to(card.querySelector('.promo-icon'), {
              scale: 1.2,
              duration: 0.5,
              yoyo: true,
              repeat: 1,
              ease: "power1.inOut"
            });
          }
        });

        // Hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            duration: 0.3,
            boxShadow: "0 10px 30px rgba(224, 40, 40, 0.3)",
            ease: "power1.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            ease: "power1.out"
          });
        });
      });

      // Continuous flame animation
      gsap.to(".flame-icon", {
        y: -5,
        scale: 1.1,
        yoyo: true,
        repeat: -1,
        duration: 1.5,
        ease: "sine.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 px-6 bg-iron-dark text-white overflow-hidden"
      id="promotions"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-20 font-title"
        >
          <span className="text-iron-pulse">LIMITED-TIME</span> OFFERS
        </h2>

        {/* Promo Cards Container */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* New Members Offer */}
          <div 
            ref={card1Ref}
            className="promo-card bg-gradient-to-br from-iron to-iron-steel p-8 rounded-2xl shadow-xl border border-iron-pulse/20 relative overflow-hidden"
          >
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-iron-pulse rounded-full opacity-10"></div>
            <FaPercentage className="promo-icon text-5xl text-iron-pulse mb-6" />
            <h3 className="text-2xl font-bold mb-4">30% OFF</h3>
            <p className="text-lg mb-6">
              New members get <span className="font-bold text-iron-pulse">30% off</span> their first 3 months of membership
            </p>
            <button className="w-full py-3 bg-iron-pulse hover:bg-iron-energy text-white font-bold rounded-lg transition-all duration-300">
              CLAIM OFFER
            </button>
          </div>

          {/* Summer Challenge */}
          <div 
            ref={card2Ref}
            className="promo-card bg-gradient-to-br from-iron to-iron-steel p-8 rounded-2xl shadow-xl border border-iron-pulse/20 relative overflow-hidden"
          >
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-iron-pulse rounded-full opacity-10"></div>
            <FaFire className="promo-icon flame-icon text-5xl text-iron-pulse mb-6" />
            <h3 className="text-2xl font-bold mb-4">Summer Challenge</h3>
            <p className="text-lg mb-6">
              Complete our 8-week challenge and win <span className="font-bold text-iron-pulse">free supplements</span>
            </p>
            <button className="w-full py-3 bg-iron-pulse hover:bg-iron-energy text-white font-bold rounded-lg transition-all duration-300">
              JOIN NOW
            </button>
          </div>

          {/* Personal Training */}
          <div 
            ref={card3Ref}
            className="promo-card bg-gradient-to-br from-iron to-iron-steel p-8 rounded-2xl shadow-xl border border-iron-pulse/20 relative overflow-hidden"
          >
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-iron-pulse rounded-full opacity-10"></div>
            <FaCalendarAlt className="promo-icon text-5xl text-iron-pulse mb-6" />
            <h3 className="text-2xl font-bold mb-4">Free Session</h3>
            <p className="text-lg mb-6">
              Get a <span className="font-bold text-iron-pulse">free personal training</span> session with annual signup
            </p>
            <button className="w-full py-3 bg-iron-pulse hover:bg-iron-energy text-white font-bold rounded-lg transition-all duration-300">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;