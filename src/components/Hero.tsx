
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    {
      text: "Seek knowledge from the cradle to the grave.",
      source: "Prophet Muhammad (PBUH)"
    },
    {
      text: "The seeking of knowledge is obligatory for every Muslim.",
      source: "Prophet Muhammad (PBUH)"
    },
    {
      text: "Whoever follows a path in pursuit of knowledge, Allah makes his way easy to Paradise.",
      source: "Prophet Muhammad (PBUH)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="bg-islamic-pattern min-h-[70vh] flex flex-col justify-center items-center px-4 py-16 bg-gradient-to-r from-islamic-cream to-white">
        <div className="absolute inset-0 bg-islamic-lightGreen opacity-10"></div>
        
        <div className="container mx-auto z-10 flex flex-col items-center">
          <div className="text-center max-w-4xl mx-auto mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-islamic-darkGreen mb-4">
              Al-Hikma Islamic College
            </h1>
            <p className="text-xl md:text-2xl text-islamic-navy mb-8">
              Where Knowledge Meets Faith and Tradition
            </p>
            
            <div className="min-h-[120px] flex items-center justify-center mb-8">
              <div className="transition-all duration-700 ease-in-out">
                <blockquote className="italic text-lg md:text-xl text-islamic-navy">
                  "{quotes[currentQuote].text}"
                </blockquote>
                <p className="text-islamic-gold mt-2">— {quotes[currentQuote].source}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admissions">
                <Button className="bg-islamic-green hover:bg-islamic-darkGreen text-white px-6 py-6">
                  Apply Now
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="border-islamic-gold text-islamic-gold hover:bg-islamic-gold hover:text-white px-6 py-6">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-5xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white/90 p-6 rounded-lg shadow-md border-t-4 border-islamic-green text-center hover:shadow-lg transition-shadow">
              <div className="bg-islamic-lightGreen p-4 rounded-full inline-flex justify-center items-center mb-4">
                <BookOpen size={30} className="text-islamic-darkGreen" />
              </div>
              <h3 className="text-xl font-semibold text-islamic-darkGreen mb-2">Islamic Studies</h3>
              <p className="text-islamic-navy">Comprehensive curriculum covering Quran, Hadith, Fiqh, and Arabic language.</p>
            </div>
            
            <div className="bg-white/90 p-6 rounded-lg shadow-md border-t-4 border-islamic-green text-center hover:shadow-lg transition-shadow">
              <div className="bg-islamic-lightGreen p-4 rounded-full inline-flex justify-center items-center mb-4">
                <GraduationCap size={30} className="text-islamic-darkGreen" />
              </div>
              <h3 className="text-xl font-semibold text-islamic-darkGreen mb-2">Academic Excellence</h3>
              <p className="text-islamic-navy">Balanced education integrating modern sciences with Islamic values and ethics.</p>
            </div>
            
            <div className="bg-white/90 p-6 rounded-lg shadow-md border-t-4 border-islamic-green text-center hover:shadow-lg transition-shadow">
              <div className="bg-islamic-lightGreen p-4 rounded-full inline-flex justify-center items-center mb-4">
                <Users size={30} className="text-islamic-darkGreen" />
              </div>
              <h3 className="text-xl font-semibold text-islamic-darkGreen mb-2">Community Service</h3>
              <p className="text-islamic-navy">Inspiring students to become conscious and active members of their communities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
