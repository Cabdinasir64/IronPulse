import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaDumbbell, FaRunning, FaHeartbeat } from 'react-icons/fa';
import Navbar from '../../Components/Navbar'
import ServiceListing from './components/serviceListing'

const Service = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const icon1Ref = useRef(null);
    const icon2Ref = useRef(null);
    const icon3Ref = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial state
            gsap.set([titleRef.current, subtitleRef.current, ctaRef.current, icon1Ref.current, icon2Ref.current, icon3Ref.current], {
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

            // Title animation
            tl.to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "back.out(1.7)"
            }, 0.2);

            // Subtitle animation
            tl.to(subtitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8
            }, 0.4);

            // Icons animation (staggered)
            tl.to([icon1Ref.current, icon2Ref.current, icon3Ref.current], {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.5)"
            }, 0.6);

            // CTA button animation
            tl.to(ctaRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)"
            }, 0.9);

            // Continuous icon animations
            tl.to(icon1Ref.current, {
                y: -5,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            }, 1.5);

            tl.to(icon2Ref.current, {
                y: -5,
                duration: 2.2,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                delay: 0.3
            }, 1.5);

            tl.to(icon3Ref.current, {
                y: -5,
                duration: 1.8,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                delay: 0.6
            }, 1.5);

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
                    {/* Animated Icons */}
                    <div className="flex space-x-8 mb-12">
                        <div ref={icon1Ref} className="text-4xl text-iron-pulse">
                            <FaDumbbell />
                        </div>
                        <div ref={icon2Ref} className="text-4xl text-iron-energy">
                            <FaRunning />
                        </div>
                        <div ref={icon3Ref} className="text-4xl text-iron-pulse">
                            <FaHeartbeat />
                        </div>
                    </div>

                    {/* Title */}
                    <h1
                        ref={titleRef}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-title"
                    >
                        <span className="text-white">OUR</span> <span className="text-iron-pulse">SERVICES</span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        ref={subtitleRef}
                        className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12"
                    >
                        Premium training programs designed to push your limits and achieve extraordinary results
                    </p>

                    {/* CTA Button */}
                    <div ref={ctaRef}>
                        <button className="px-10 py-4 bg-iron-pulse hover:bg-iron-energy text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                            BOOK YOUR SESSION NOW
                        </button>
                    </div>
                </div>
            </section>
            <ServiceListing />
        </>
    );
};

export default Service;