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
    bg-peach text-center text-base sm:text-lg md:text-xl font-bold text-teal-800 
    transition-all duration-300 fixed w-full z-10
    ${isScrolled ? 'max-h-0 py-0' : 'max-h-[200px] py-6 sm:py-4'}
  `}
      style={{
        overflow: 'hidden',
        transitionProperty: 'max-height, padding',
        left: 0,
        right: 0,
      }}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <p className='hidden sm:block text-sm sm:text-base md:text-lg'>Consultant psychiatric and mental healthcare services by Dr. Pratik Kumar, MBBS, DNB Psychiatry.</p>
        <p className="text-teal-900 text-sm sm:text-base md:text-lg">Consultations available at Delhi Global Mind Clinic, Shalimar Bagh, New Delhi.</p>
      </div>
    </div>
  );
};

export default Banner;
