
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, GraduationCap, Calendar, BookMarked, Users, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-islamic-darkGreen font-bold text-2xl">Al-Hikma</span>
              <span className="text-islamic-gold ml-2 text-sm">Islamic College</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/about" className="text-islamic-navy hover:text-islamic-green transition-colors duration-300 flex items-center">
              <BookOpen size={18} className="mr-1" />
              <span>About</span>
            </Link>
            <Link to="/courses" className="text-islamic-navy hover:text-islamic-green transition-colors duration-300 flex items-center">
              <GraduationCap size={18} className="mr-1" />
              <span>Courses</span>
            </Link>
            <Link to="/admissions" className="text-islamic-navy hover:text-islamic-green transition-colors duration-300 flex items-center">
              <Calendar size={18} className="mr-1" />
              <span>Admissions</span>
            </Link>
            <Link to="/resources" className="text-islamic-navy hover:text-islamic-green transition-colors duration-300 flex items-center">
              <BookMarked size={18} className="mr-1" />
              <span>Resources</span>
            </Link>
            <Link to="/community" className="text-islamic-navy hover:text-islamic-green transition-colors duration-300 flex items-center">
              <Users size={18} className="mr-1" />
              <span>Community</span>
            </Link>
            <Link to="/contact" className="text-islamic-navy hover:text-islamic-green transition-colors duration-300 flex items-center">
              <MessageSquare size={18} className="mr-1" />
              <span>Contact</span>
            </Link>
            <Button className="bg-islamic-green hover:bg-islamic-darkGreen text-white ml-2">
              Student Portal
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-islamic-navy hover:text-islamic-green focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-3 bg-white border-t animate-fade-in">
          <Link to="/about" className="block py-2 text-islamic-navy hover:text-islamic-green transition-colors duration-300">
            <div className="flex items-center">
              <BookOpen size={18} className="mr-2" />
              <span>About</span>
            </div>
          </Link>
          <Link to="/courses" className="block py-2 text-islamic-navy hover:text-islamic-green transition-colors duration-300">
            <div className="flex items-center">
              <GraduationCap size={18} className="mr-2" />
              <span>Courses</span>
            </div>
          </Link>
          <Link to="/admissions" className="block py-2 text-islamic-navy hover:text-islamic-green transition-colors duration-300">
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>Admissions</span>
            </div>
          </Link>
          <Link to="/resources" className="block py-2 text-islamic-navy hover:text-islamic-green transition-colors duration-300">
            <div className="flex items-center">
              <BookMarked size={18} className="mr-2" />
              <span>Resources</span>
            </div>
          </Link>
          <Link to="/community" className="block py-2 text-islamic-navy hover:text-islamic-green transition-colors duration-300">
            <div className="flex items-center">
              <Users size={18} className="mr-2" />
              <span>Community</span>
            </div>
          </Link>
          <Link to="/contact" className="block py-2 text-islamic-navy hover:text-islamic-green transition-colors duration-300">
            <div className="flex items-center">
              <MessageSquare size={18} className="mr-2" />
              <span>Contact</span>
            </div>
          </Link>
          <Button className="w-full bg-islamic-green hover:bg-islamic-darkGreen text-white">
            Student Portal
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
