import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import MembershipTiers from './components/membershipTiers'
import MembershipBenefit from './components/membershipBenefit'
const Membership = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current, icon1Ref.current, icon2Ref.current, icon3Ref.current, badgeRef.current], {
        opacity: 0,
        y: 30
      });

      // Animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Background fade in
      tl.fromTo(heroRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.8 }
      );

      // Badge animation (first to appear)
      tl.to(badgeRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      });

      // Title animation
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)"
      }, 0.3);

      // Subtitle animation
      tl.to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8
      }, 0.5);

      // Icons animation (staggered)
      tl.to([icon1Ref.current, icon2Ref.current, icon3Ref.current], {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.5)"
      }, 0.7);

      // CTA button animation
      tl.to(ctaRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      }, 1);

      // Continuous icon animations
      tl.to(icon1Ref.current, {
        rotation: -10,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      }, 1.5);

      tl.to(icon2Ref.current, {
        y: -8,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 0.3
      }, 1.5);

      tl.to(icon3Ref.current, {
        scale: 1.1,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 0.6
      }, 1.5);

      // Badge continuous animation
      tl.to(badgeRef.current, {
        y: -5,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      }, 1.8);

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <Navbar />
    <section 
      ref={heroRef}
      className="relative h-screen w-full bg-gradient-to-b from-iron-dark to-iron overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-6 text-center">
        {/* Premium Badge */}
        <div 
          ref={badgeRef}
          className="hidden md:flex items-center justify-center bg-iron-pulse text-white px-6 py-2 rounded-full mb-8 shadow-lg  "
        >
          <FaCrown className="mr-2" />
          <span className="font-bold">PREMIUM MEMBERSHIPS</span>
        </div>

        {/* Title */}
        <h1 
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-title"
        >
          <span className="text-white">UNLOCK</span>{' '}
          <span className="text-iron-pulse">YOUR POTENTIAL</span>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12"
        >
          Choose the perfect membership to match your fitness goals with exclusive benefits and premium facilities
        </p>

        {/* Animated Icons */}
        <div className="flex space-x-8 mb-12">
          <div ref={icon1Ref} className="text-4xl text-iron-pulse">
            <FaMedal />
          </div>
          <div ref={icon2Ref} className="text-4xl text-iron-energy">
            <FaStar />
          </div>
          <div ref={icon3Ref} className="text-4xl text-iron-pulse">
            <FaCrown />
          </div>
        </div>

        {/* CTA Button */}
        <div ref={ctaRef}>
          <button className="px-10 py-4 bg-iron-pulse hover:bg-iron-energy text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
            EXPLORE PLANS
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
    <MembershipTiers />
    <MembershipBenefit />
    <Footer />
    </>
  );
};

export default Membership;