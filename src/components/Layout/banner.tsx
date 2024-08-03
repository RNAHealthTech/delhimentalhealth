import React, { useState, useEffect } from 'react';

const Banner: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`
        bg-peach text-center text-lg sm:text-xl font-bold text-teal-800 
        transition-all duration-300 fixed w-full z-10
        ${isScrolled ? 'max-h-0 py-0' : 'max-h-[200px] py-4'}
      `}
      style={{
        overflow: 'hidden',
        transitionProperty: 'max-height, padding',
        left: 0, 
        right: 0, 
      }}
    >
      <div className="container mx-auto px-4">
        <p className='hidden sm:block'>Discover unparalleled care with one of 🇮🇳's best therapists. Transform your life with personalized, compassionate therapy that empowers you to thrive.</p>
        <p className="text-teal-900">Book Your Appointment Today!</p>
      </div>
    </div>
  );
};

export default Banner;
