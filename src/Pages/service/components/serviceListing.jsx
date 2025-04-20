import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaDumbbell, FaRunning, FaHeartbeat, FaUserFriends, FaClipboardList, FaTrophy } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const ServiceListing = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const servicesRef = useRef([]);

    const services = [
        {
            icon: <FaDumbbell className="service-icon" />,
            title: "Strength Training",
            description: "Customized programs to build muscle and increase power with our premium equipment",
            highlight: "Personalized workout plans"
        },
        {
            icon: <FaRunning className="service-icon" />,
            title: "Cardio Conditioning",
            description: "High-intensity programs to boost endurance and burn fat efficiently",
            highlight: "Metabolic rate optimization"
        },
        {
            icon: <FaHeartbeat className="service-icon" />,
            title: "Recovery Therapy",
            description: "Advanced recovery techniques including cryotherapy and sports massage",
            highlight: "Reduced muscle soreness"
        },
        {
            icon: <FaUserFriends className="service-icon" />,
            title: "Group Classes",
            description: "Dynamic group sessions including HIIT, CrossFit, and functional training",
            highlight: "Community motivation"
        },
        {
            icon: <FaClipboardList className="service-icon" />,
            title: "Nutrition Planning",
            description: "Custom meal plans tailored to your fitness goals and dietary needs",
            highlight: "Macro-balanced diets"
        },
        {
            icon: <FaTrophy className="service-icon" />,
            title: "Competition Prep",
            description: "Specialized training for bodybuilding and fitness competitions",
            highlight: "Stage-ready conditioning"
        }
    ];

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

            // Service cards animation
            servicesRef.current.forEach((service, index) => {
                gsap.from(service, {
                    scrollTrigger: {
                        trigger: service,
                        start: "top 75%",
                        toggleActions: "play none none none"
                    },
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "power2.out",
                    onComplete: () => {
                        // Icon animation
                        gsap.to(service.querySelector('.service-icon'), {
                            scale: 1.2,
                            duration: 0.5,
                            yoyo: true,
                            repeat: 1,
                            ease: "elastic.out(1, 0.5)"
                        });
                    }
                });

                // Hover effect
                service.addEventListener('mouseenter', () => {
                    gsap.to(service, {
                        y: -10,
                        duration: 0.1,
                        boxShadow: "0 15px 30px rgba(224, 40, 40, 0.2)",
                        ease: "power1.out"
                    });
                });

                service.addEventListener('mouseleave', () => {
                    gsap.to(service, {
                        y: 0,
                        duration: 0.1,
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                        ease: "power1.out"
                    });
                });
            });

            // Continuous floating effect for all icons
            gsap.to(".service-icon", {
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
            className="py-24 px-6 bg-iron text-white"
            id="services"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2
                    ref={titleRef}
                    className="text-4xl md:text-5xl font-bold text-center mb-20 font-title"
                >
                    <span className="text-iron-pulse">PREMIUM</span> TRAINING PROGRAMS
                </h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={el => servicesRef.current[index] = el}
                            className="service-card bg-iron-steel p-8 rounded-2xl shadow-lg border border-iron/20 hover:border-iron-pulse/40 transition-all"
                        >
                            <div className="icon-container text-5xl text-iron-pulse mb-6 flex justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
                            <p className="text-gray-300 mb-6 text-center">{service.description}</p>
                            <div className="highlight bg-iron-dark rounded-lg p-4 border-l-4 border-iron-pulse">
                                <p className="font-semibold text-iron-pulse">{service.highlight}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceListing;