
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PrayerTimes from '@/components/PrayerTimes';
import Courses from '@/components/Courses';
import DailyQuote from '@/components/DailyQuote';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PrayerTimes />
        <Courses />
        <DailyQuote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
