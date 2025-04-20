import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaDumbbell, FaUserTie, FaHeartbeat, FaTrophy } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            const cards = [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current];

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
                        gsap.to(card.querySelector('.feature-icon'), {
                            scale: 1.2,
                            duration: 0.4,
                            yoyo: true,
                            repeat: 1,
                            ease: "power1.inOut"
                        });
                    }
                });

                // Hover effects
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -10,
                        duration: 0.1,
                        boxShadow: "0 10px 30px rgba(224, 40, 40, 0.3)",
                        ease: "power1.out"
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        duration: 0.1,
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        ease: "power1.out"
                    });
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 px-6 bg-iron text-white overflow-hidden"
            id="features"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2
                    ref={titleRef}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 font-title"
                >
                    <span className="text-iron-pulse">IRONPULSE</span> ADVANTAGE
                </h2>

                {/* Features Grid - Individual Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div
                        ref={card1Ref}
                        className="feature-card bg-iron-steel p-8 rounded-2xl shadow-lg border border-iron/20 hover:border-iron-pulse/40 transition-all"
                    >
                        <div className="icon-container mb-6 text-5xl text-iron-pulse flex justify-center">
                            <FaDumbbell className="feature-icon" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Premium Equipment</h3>
                        <p className="text-gray-300 text-lg">
                            300+ cutting-edge machines and free weights for complete training
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div
                        ref={card2Ref}
                        className="feature-card bg-iron-steel p-8 rounded-2xl shadow-lg border border-iron/20 hover:border-iron-pulse/40 transition-all"
                    >
                        <div className="icon-container mb-6 text-5xl text-iron-pulse flex justify-center">
                            <FaUserTie className="feature-icon" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Elite Coaching</h3>
                        <p className="text-gray-300 text-lg">
                            Certified trainers with 10+ years experience guiding your journey
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div
                        ref={card3Ref}
                        className="feature-card bg-iron-steel p-8 rounded-2xl shadow-lg border border-iron/20 hover:border-iron-pulse/40 transition-all"
                    >
                        <div className="icon-container mb-6 text-5xl text-iron-pulse flex justify-center">
                            <FaHeartbeat className="feature-icon" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Recovery Focus</h3>
                        <p className="text-gray-300 text-lg">
                            Cryotherapy, massage, and recovery protocols for peak performance
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div
                        ref={card4Ref}
                        className="feature-card bg-iron-steel p-8 rounded-2xl shadow-lg border border-iron/20 hover:border-iron-pulse/40 transition-all"
                    >
                        <div className="icon-container mb-6 text-5xl text-iron-pulse flex justify-center">
                            <FaTrophy className="feature-icon" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Competitions</h3>
                        <p className="text-gray-300 text-lg">
                            Monthly challenges to test your limits and track progress
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;