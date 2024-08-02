import React, { useEffect, useRef, useState } from 'react';
import { FaUserMd, FaHospital, FaBookMedical } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaHeartbeat, FaBed, FaUsers, FaComments } from 'react-icons/fa';



const Home: React.FC = () => {

  const el = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: <FaBrain className="text-5xl text-primary mb-4" />,
      title: "Depression & Anxiety",
      description: "Expert treatment for mood and anxiety disorders.",
     
    },
    {
      icon: <FaHeartbeat className="text-5xl text-primary mb-4" />,
      title: "Bipolar Disorder",
      description: "Specialized care for managing bipolar illness.",
     
    },
    {
      icon: <FaBrain className="text-5xl text-primary mb-4" />,
      title: "Epilepsy",
      description: "Comprehensive epilepsy and seizure management.",
     
    },
    {
      icon: <FaUsers className="text-5xl text-primary mb-4" />,
      title: "Addiction",
      description: "Support for overcoming substance and behavioral addictions.",
     
    },
    {
      icon: <FaBrain className="text-5xl text-primary mb-4" />,
      title: "OCD, PTSD & ADHD",
      description: "Tailored treatments for complex mental health conditions.",
     
    },
    {
      icon: <FaBed className="text-5xl text-primary mb-4" />,
      title: "Sleep & Sexual Health",
      description: "Addressing sleep disorders and sexual health concerns.",
     
    },
    {
      icon: <FaUsers className="text-5xl text-primary mb-4" />,
      title: "Relationship Counseling",
      description: "Improving interpersonal relationships and communication.",
     
    },
    {
      icon: <FaComments className="text-5xl text-primary mb-4" />,
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




  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["DELHI GL🌍BAL MIND CLINIC"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: ""
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-white">
      <section className="bg-primary text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
                Expert Psychiatric Care 
                
              </h1>
              <p className="text-xl mb-6">
                by DNB-qualified psychiatrist with over 5 years of experience in comprehensive mental health treatment
              </p>
              <p className="h-[50px] text-xl text-sky-400 font-semibold mb-4 tracking-wider" ref={el}></p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Book Appointment
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-5 py-3 border border-blue-600 text-base font-medium rounded-md text-white bg-transparent hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                >
                  More about Dr. Pratik
                  {/*<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>*/}
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 animate-slideIn">
              <img src="/images/heroimage.png" alt="Dr. Pratik Kumar" />
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative w-full overflow-hidden">
              <motion.div 
                className="flex"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="bg-primary text-white py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 inline-block"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Dr. Pratik Kumar</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Dr. Pratik Kumar is a highly qualified psychiatrist with extensive experience in treating various mental health conditions. With a DNB in Psychiatry from the National Board of Examination, New Delhi, Dr. Kumar has been providing compassionate care to patients for over 5 years.
          </p>
          <div className="text-center mt-8">
            <Link to="/about" className="bg-primary text-white py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="text-center">
        {icon}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Home;
