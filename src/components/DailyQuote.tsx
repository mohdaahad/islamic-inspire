
import React from 'react';

const DailyQuote = () => {
  return (
    <div className="py-16 bg-islamic-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white/90 rounded-lg shadow-lg p-8 border border-islamic-gold/30">
          <h2 className="text-2xl font-semibold text-islamic-darkGreen mb-2 text-center">Daily Reflection</h2>
          
          <div className="flex justify-center mb-4">
            <div className="h-1 w-24 bg-islamic-gold rounded"></div>
          </div>
          
          <div className="mb-6">
            <blockquote className="text-xl italic text-islamic-navy text-center leading-relaxed">
              "The best among you are those who learn the Quran and teach it."
            </blockquote>
          </div>
          
          <div className="text-center">
            <p className="text-islamic-green font-medium">Prophet Muhammad ﷺ</p>
            <p className="text-sm text-islamic-navy mt-1">Sahih Al-Bukhari</p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-islamic-lightGreen">
            <p className="text-islamic-navy text-sm">
              <span className="font-semibold">Reflection:</span> This hadith emphasizes the importance of learning and teaching the Quran. 
              It highlights that the most virtuous among us are those who not only seek knowledge of 
              Allah's words but also share that knowledge with others. This dual emphasis on learning and 
              teaching embodies the Islamic principle that knowledge carries a responsibility to be shared 
              for the benefit of the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyQuote;
