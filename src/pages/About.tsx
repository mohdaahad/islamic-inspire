
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="py-16 bg-islamic-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-islamic-darkGreen mb-6 text-center">About Al-Hikma</h1>
              <div className="bg-white/90 p-8 rounded-lg shadow-lg">
                <p className="text-islamic-navy mb-4">
                  Al-Hikma Islamic College was established in 1985 with a vision to provide a comprehensive 
                  Islamic education alongside modern academic disciplines. Our institution stands as a beacon 
                  of knowledge, faith, and community service.
                </p>
                <p className="text-islamic-navy mb-4">
                  At Al-Hikma, we believe in nurturing both the intellect and the soul, preparing students to 
                  excel in this world while remaining mindful of the hereafter. Our balanced curriculum integrates 
                  traditional Islamic sciences with contemporary subjects, providing students with a well-rounded education.
                </p>
                <p className="text-islamic-navy">
                  Our dedicated faculty members are experts in their respective fields, bringing years of experience 
                  and a deep commitment to Islamic values. We strive to create an environment that fosters academic 
                  excellence, spiritual growth, and character development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
