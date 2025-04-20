import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const header = useRef(null)

    const toggleMenu = () => {
        if (isOpen) {
            gsap.to(mobileMenuRef.current, {
                y: -100,
                duration: 0.8,
                height: 0,
                opacity: 0,
                ease: "power2.out",
                onComplete: () => setIsOpen(false),
            })
        } else {
            setIsOpen(true);
        }
    };

    useEffect(() => {
        if (isOpen && mobileMenuRef.current) {
            const tl = gsap.timeline();

            tl.fromTo(
                mobileMenuRef.current,
                { y: -100, height: 0 },
                {
                    y: 0,
                    duration: 1.3,
                    height: "100vh",
                    ease: "power2.out",
                }
            )
                .from(".logo", {
                    opacity: 0,
                    duration: 1,
                    y: -20,
                    delay: 0.2,
                    ease: "power3.out",
                }, "<")
                .from(".FaTimes", {
                    opacity: 0,
                    duration: 0.9,
                    y: -20,
                    delay: 0.2,
                    ease: "power3.out",
                }, "<")
                .from(".nav-link", {
                    opacity: 0,
                    duration: 0.8,
                    y: -20,
                    ease: "power3.out",
                    stagger: 0.2,
                }, "<")

        }
    }, [isOpen]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: document.body,
                start: "top -100",
                onEnter: () => {
                    gsap.to(header.current, {
                        backgroundColor: "#2A2A2A",
                        boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
                        duration: 0.3,
                        ease: "power2.out",
                    });
                },
                onLeaveBack: () => {
                    gsap.to(header.current, {
                        backgroundColor: "transparent",
                        boxShadow: "0 0 0px rgba(0, 0, 0, 0)",
                        duration: 0.3,
                        ease: "power2.out",
                    });
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <header className={`fixed w-full top-0 right-0 py-3 font-sans header z-50 header`} ref={header}>
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-iron-pulse logo">Iron<span className=" text-white">Pulse</span></Link>
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/" className="nav-link text-white font-sans font-semibold hover:text-iron-pulse transition-colors relative group">
                            Home
                            <span className="absolute left-0 -bottom-1 h-0.5 bg-iron-pulse w-0 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/Service" className="nav-link text-white font-sans font-semibold hover:text-iron-pulse transition-colors relative group">
                            Service
                            <span className="absolute left-0 -bottom-1 h-0.5 bg-iron-pulse w-0 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/Membership" className="nav-link text-white font-sans font-semibold hover:text-iron-pulse transition-colors relative group">
                            Membership
                            <span className="absolute left-0 -bottom-1 h-0.5 bg-iron-pulse w-0 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/Contact" className="nav-link text-white font-sans font-semibold hover:text-iron-pulse transition-colors relative group">
                            Contact
                            <span className="absolute left-0 -bottom-1 h-0.5 bg-iron-pulse w-0 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </nav>
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white focus:outline-none FaBar"

                    >
                        <FaBars className="w-6 h-6" />
                    </button>
                    {isOpen && (
                        <nav
                            ref={mobileMenuRef}
                            className="flex flex-col fixed md:hidden inset-0 bg-iron z-40 mobile-menu"
                        >
                            <div className="w-full flex items-center justify-between px-4 py-4">
                                <Link to="/" className="text-2xl font-bold text-iron-pulse logo">
                                    Iron<span className="text-white">Pulse</span>
                                </Link>
                                <button
                                    onClick={toggleMenu}
                                    className="text-white focus:outline-none FaTimes"
                                    aria-label="Close menu"
                                >
                                    <FaTimes className="w-6 h-6 text-iron-pulse" />
                                </button>
                            </div>
                            <div className="flex flex-col items-center justify-center space-y-8 mt-16">
                                <Link to="/" className="nav-link  text-white font-sans font-semibold hover:text-iron-pulse transition-colors relative group">
                                    Home
                                    <span className="absolute left-0 -bottom-1 h-0.5 bg-iron-pulse w-0 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                                <Link to="/Service" className="nav-link  text-white font-sans font-semibold hover:text-iron-pulse transition-colors relative group">
                                    Service
                                    <span className="absolute left-0 -bottom-1 h-0.5 bg-iron-pulse w-0 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                                <Link to="/" className="nav-link  text-white font-sans font-semibold hover:text-iron-pulse transition-colors relative group">
                                    Membership
                                    <span className="absolute left-0 -bottom-1 h-0.5 bg-iron-pulse w-0 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                                <Link to="/" className="nav-link  text-white font-sans font-semibold hover:text-iron-pulse transition-colors relative group">
                                    Contact
                                    <span className="absolute left-0 -bottom-1 h-0.5 bg-iron-pulse w-0 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </div>
                        </nav>
                    )}
                </div>
            </header>

        </>

    );
};

export default Navbar;