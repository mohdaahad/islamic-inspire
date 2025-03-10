
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Courses from '@/components/Courses';

const CoursesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="py-16 bg-islamic-pattern">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-islamic-darkGreen mb-12 text-center">Our Programs & Courses</h1>
            <Courses />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
