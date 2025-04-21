import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);
  const ctaRef = useRef(null);

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

      // Form animation
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });

      // Info animation
      gsap.from(infoRef.current, {
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 75%"
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });

      // Map animation
      gsap.from(mapRef.current, {
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 65%"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

      // CTA animation
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%"
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      });

      // Continuous floating animation for icons
      gsap.to(".contact-icon", {
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
    <>
    <Navbar />
    <section 
      ref={sectionRef} 
      className="py-24 px-6 bg-iron text-white"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-20 font-title"
        >
          <span className="text-iron-pulse">GET</span> IN TOUCH
        </h2>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className="bg-iron-steel p-3 md:p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-iron-dark border border-iron/30 rounded-lg px-4 py-3 focus:border-iron-pulse focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-iron-dark border border-iron/30 rounded-lg px-4 py-3 focus:border-iron-pulse focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2">Subject</label>
                <select 
                  id="subject" 
                  className="w-full bg-iron-dark border border-iron/30 rounded-lg px-4 py-3 focus:border-iron-pulse focus:outline-none transition-colors"
                >
                  <option>Membership Inquiry</option>
                  <option>Personal Training</option>
                  <option>Group Classes</option>
                  <option>General Question</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full bg-iron-dark border border-iron/30 rounded-lg px-4 py-3 focus:border-iron-pulse focus:outline-none transition-colors"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-iron-pulse hover:bg-iron-energy text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div 
            ref={infoRef}
            className="bg-iron-steel  p-3 md:p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="contact-icon-container bg-iron-pulse/10 p-4 rounded-lg mr-6">
                  <FaMapMarkerAlt className="contact-icon text-2xl text-iron-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Our Location</h4>
                  <p className="text-gray-300">123 Fitness Street, Gym City, GC 10001</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="contact-icon-container bg-iron-pulse/10 p-4 rounded-lg mr-6">
                  <FaPhone className="contact-icon text-2xl text-iron-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Phone Number</h4>
                  <p className="text-gray-300">(555) 123-4567</p>
                  <p className="text-gray-300">(555) 765-4321</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="contact-icon-container bg-iron-pulse/10 p-4 rounded-lg mr-6">
                  <FaEnvelope className="contact-icon text-2xl text-iron-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Email Address</h4>
                  <p className="text-gray-300">info@ironpulse.com</p>
                  <p className="text-gray-300">support@ironpulse.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="contact-icon-container bg-iron-pulse/10 p-4 rounded-lg mr-6">
                  <FaClock className="contact-icon text-2xl text-iron-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Opening Hours</h4>
                  <p className="text-gray-300">Monday - Friday: 5:00 AM - 11:00 PM</p>
                  <p className="text-gray-300">Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div 
          ref={mapRef}
          className="rounded-2xl overflow-hidden shadow-xl mb-20 h-96"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132773!2d-73.98784492452527!3d40.74844097138988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTkuNyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy"
            title="IronPulse Gym Location"
          ></iframe>
        </div>

        {/* CTA */}
        <div 
          ref={ctaRef}
          className="bg-gradient-to-r from-iron-pulse to-iron-energy rounded-2xl md:p-8 p-3 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Fitness Journey?</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">Book a free tour of our facilities and meet with one of our trainers today!</p>
          <button className="px-10 py-3 bg-white text-iron-dark hover:bg-iron-dark hover:text-white font-bold rounded-lg transition-all duration-300">
            SCHEDULE A TOUR
          </button>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Contact