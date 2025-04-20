import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-iron-dark text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-title">
              IRON<span className="text-iron-pulse">PULSE</span>
            </h3>
            <p className="text-gray-400">
              Transform your body and mind at our state-of-the-art fitness center. 
              Where strength meets endurance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-iron-pulse transition-colors text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-iron-pulse transition-colors text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-iron-pulse transition-colors text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-iron-pulse transition-colors text-xl">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">QUICK LINKS</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/" className="hover:text-iron-pulse transition-colors">Home</Link></li>
              <li><Link to="/" className="hover:text-iron-pulse transition-colors">Membership</Link></li>
              <li><Link to="/" className="hover:text-iron-pulse transition-colors">Personal Training</Link></li>
              <li><Link to="/" className="hover:text-iron-pulse transition-colors">Group Classes</Link></li>
              <li><Link to="/" className="hover:text-iron-pulse transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-iron-pulse transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">CONTACT US</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-iron-pulse mt-1" />
                <span>123 Fitness Street, Gym City, GC 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-iron-pulse" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-iron-pulse" />
                <span>info@ironpulse.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">OPENING HOURS</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span className="flex items-center space-x-2">
                  <FaClock className="text-iron-pulse" />
                  <span>Monday - Friday</span>
                </span>
                <span>5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="flex items-center space-x-2">
                  <FaClock className="text-iron-pulse" />
                  <span>Saturday</span>
                </span>
                <span>7:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="flex items-center space-x-2">
                  <FaClock className="text-iron-pulse" />
                  <span>Sunday</span>
                </span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IronPulse Fitness. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;