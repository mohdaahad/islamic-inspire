
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const PrayerTimes = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Demo prayer times - in a real application, these would be fetched from an API
  const prayers = [
    { name: 'Fajr', time: '05:30 AM', active: false },
    { name: 'Dhuhr', time: '12:30 PM', active: false },
    { name: 'Asr', time: '04:15 PM', active: false },
    { name: 'Maghrib', time: '07:45 PM', active: false },
    { name: 'Isha', time: '09:15 PM', active: true }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true 
    });
  };

  return (
    <div className="bg-islamic-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-2 flex items-center">
              <Clock size={24} className="mr-2 text-islamic-gold" />
              Prayer Times
            </h2>
            <p className="text-islamic-cream opacity-80">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-islamic-gold font-semibold">
              {formatTime(currentTime)}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 w-full md:w-auto">
            {prayers.map((prayer, index) => (
              <div 
                key={index} 
                className={`px-4 py-3 rounded-lg text-center ${
                  prayer.active 
                    ? 'bg-islamic-green text-white animate-pulse-light' 
                    : 'bg-white/10 hover:bg-white/20 transition-colors'
                }`}
              >
                <h3 className="font-medium text-lg">{prayer.name}</h3>
                <p className={`${prayer.active ? 'text-white' : 'text-islamic-gold'}`}>
                  {prayer.time}
                </p>
                {prayer.active && (
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full mt-1 inline-block">
                    Current
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimes;
