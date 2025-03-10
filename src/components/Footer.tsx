
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-islamic-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-2xl mb-4 text-islamic-gold">Al-Hikma</h2>
            <p className="text-gray-300 mb-4">
              Al-Hikma Islamic College is dedicated to providing quality education that combines 
              Islamic knowledge with modern academic disciplines.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-islamic-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-islamic-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-islamic-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-islamic-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-islamic-cream">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-islamic-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-islamic-gold transition-colors">
                  Programs & Courses
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-300 hover:text-islamic-gold transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-islamic-gold transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-islamic-gold transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-islamic-cream">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-islamic-gold" />
                <span className="text-gray-300">info@alhikma-college.org</span>
              </li>
              <li className="text-gray-300">
                123 Knowledge Street<br />
                Cambridge, MA 02142
              </li>
              <li className="text-gray-300">
                Phone: (+1) 555-123-4567
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-islamic-cream">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on events, lectures, and admissions.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-md text-islamic-navy focus:outline-none flex-1"
              />
              <button 
                type="submit" 
                className="bg-islamic-gold hover:bg-islamic-green text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Al-Hikma Islamic College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
