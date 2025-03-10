
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="py-12 bg-islamic-pattern">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-islamic-darkGreen mb-8 text-center">Contact Us</h1>
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
