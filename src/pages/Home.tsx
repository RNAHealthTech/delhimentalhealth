import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
//import Typed from 'typed.js';

//import { animate, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChartLine, FaTrophy, FaSmile } from 'react-icons/fa';
import HomeServices from '../components/services/HomeServices';
import Testimonials from '../components/Testimonials';



const Home: React.FC = () => {


  //const el = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    //eslint-disable-next-line
    window.scrollTo(0, 0);
  }, [])

  const services = [
    {
      imageUrl: "/images/depression-anxiety.jpg",
      title: "Depression & Anxiety",
      description: "Expert treatment for mood and anxiety disorders.",
    },
    {
      imageUrl: "/images/bipolar-disorder.jpg",
      title: "Bipolar Disorder",
      description: "Specialized care for managing bipolar illness.",
    },
    {
      imageUrl: "/images/epilepsy.jpg",
      title: "Epilepsy",
      description: "Comprehensive epilepsy and seizure management.",
    },
    {
      imageUrl: "/images/addiction.jpg",
      title: "Addiction",
      description: "Support for overcoming substance and behavioral addictions.",
    },
    {
      imageUrl: "/images/ocd-ptsd-adhd.jpg",
      title: "OCD, PTSD & ADHD",
      description: "Tailored treatments for complex mental health conditions.",
    },
    {
      imageUrl: "/images/sleep-sexual-health.jpg",
      title: "Sleep & Sexual Health",
      description: "Addressing sleep disorders and sexual health concerns.",
    },
    {
      imageUrl: "/images/relationship-counseling.jpg",
      title: "Relationship Counseling",
      description: "Improving interpersonal relationships and communication.",
    },
    {
      imageUrl: "/images/psychotherapy.jpg",
      title: "Psychotherapy",
      description: "Diverse therapeutic approaches for mental wellness.",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [services.length]);

  // Intersection observer hook for animation
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [experienceYears, setExperienceYears] = useState(0);

  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setExperienceYears(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };
    animateValue(0, 10, 2000);
  }, [])



  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["DELHI GL🌍BAL MIND CLINIC"],
  //     startDelay: 300,
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     backDelay: 100,
  //     smartBackspace: true,
  //     loop: true,
  //     showCursor: true,
  //     cursorChar: ""
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <div className="bg-white mt-40 lg:mt-38">
      {/* Hero Section */}
      <section className="container-home text-white pt-20 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side content */}
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn z-10">
              {/* White transparent banner */}
              <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-800">
                  Expert Psychiatric Care
                </h1>
                <p className="text-xl mb-6 text-teal-600">
                  by DNB-qualified psychiatrist with over 10 years of experience in comprehensive mental health treatment
                </p>
                {/* <div className="h-[100px] mb-4"> {/* Fixed height container for Typed.js 
                  <p className="text-sm text-teal-500 font-semibold lg:text-xl" ref={el}></p>
                </div> */}

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center px-5 py-3 border border-teal-600 text-base font-medium rounded-md text-teal-600 bg-transparent hover:bg-teal-50 transition duration-300 ease-in-out"
                  >
                    More about Dr. Pratik
                  </Link>
                </div>
              </div>
              <Link
                to="/contact"
                className="group inline-flex mt-4 items-center justify-center text-3xl font-medium text-teal-700 transition-all duration-300 ease-in-out"
              >
                Book Appointment
                <span className="ml-4 relative flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-105 group-active:scale-95">
                  <img
                    src="/images/circle-red-double.png"
                    alt="Animated Circle"
                    className="w-40 h-40 object-contain animate-spin-slow"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
            {/* Right side image */}
            <div className="md:w-1/2 animate-slideIn relative" style={{ top: '-40px' }}>
              <img src="/images/therapist.png" alt="Dr. Pratik Kumar" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      <div className='bg-gradient-to-l from-teal-800 to-teal-500 text-white font-bold py-10 sm:py-16 md:py-20 px-4'>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0 sm:space-x-4">
          <div className="flex flex-col items-center text-center">
            <FaChartLine className="text-4xl mb-3" />
            <p className="text-xl sm:text-2xl md:text-3xl">
              Experience <span className="text-2xl sm:text-3xl md:text-4xl">{experienceYears}+</span> years
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaTrophy className="text-4xl mb-3" />
            <p className="text-xl sm:text-2xl md:text-3xl">Proven Results</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaSmile className="text-4xl mb-3" />
            <p className="text-xl sm:text-2xl md:text-3xl">Client Satisfaction</p>
          </div>
        </div>
      </div>


    
        <HomeServices />
        <Testimonials />
    </div>
  );
};


export default Home;
