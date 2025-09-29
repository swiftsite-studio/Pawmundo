import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  const services = [
    'Pet Grooming',
    'Pet Training',
    'Pet Boarding',
    'Veterinary Care'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="relative bg-gradient-to-r from-teal-500 to-blue-500 p-2 rounded-full">
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 7V9C5 10.1 4.1 11 3 11S1 10.1 1 9V7C1 6.4 1.4 6 2 6L10 6.5C10.6 6.5 11 6.9 11 7.5V9C11 9.6 11.4 10 12 10S13 9.6 13 9V7.5C13 6.9 13.4 6.5 14 6.5L22 6C22.6 6 23 6.4 23 7V9C23 10.1 22.1 11 21 11S19 10.1 19 9ZM7.5 12C9.43 12 11 13.57 11 15.5C11 17.43 9.43 19 7.5 19C5.57 19 4 17.43 4 15.5C4 13.57 5.57 12 7.5 12ZM16.5 12C18.43 12 20 13.57 20 15.5C20 17.43 18.43 19 16.5 19C14.57 19 13 17.43 13 15.5C13 13.57 14.57 12 16.5 12Z"/>
                </svg>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
              </div>
              <span className="text-2xl font-bold">PawPals</span>
              <span className="text-2xl font-bold">PawMundo</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in pet care. We treat every pet like family and provide 
              exceptional services with love and expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-700 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-pink-400">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center group">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Pet Street, Happy City, HC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-PETS</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">hello@pawpals.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Mon-Sat: 8AM-8PM</div>
                  <div>Sun: 10AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 PawMundo Pet Services. All rights reserved. Made with ❤️ for pets and their families.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;