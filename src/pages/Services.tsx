import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import { FaBrain, FaHeartbeat, FaBed, FaUsers, FaComments } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const Services: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 2000); // Change slide every 5 seconds
    return () => clearInterval(interval);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <FaBrain className="text-5xl text-primary mb-4" />,
      title: "Depression & Anxiety",
      description: "Expert treatment for mood and anxiety disorders.",
      link: "/services/depression-anxiety"
    },
    {
      icon: <FaHeartbeat className="text-5xl text-primary mb-4" />,
      title: "Bipolar Disorder",
      description: "Specialized care for managing bipolar illness.",
      link: "/services/bipolar-disorder"
    },
    {
      icon: <FaBrain className="text-5xl text-primary mb-4" />,
      title: "Epilepsy",
      description: "Comprehensive epilepsy and seizure management.",
      link: "/services/epilepsy"
    },
    {
      icon: <FaUsers className="text-5xl text-primary mb-4" />,
      title: "Addiction",
      description: "Support for overcoming substance and behavioral addictions.",
      link: "/services/addiction-disorders"
    },
    {
      icon: <FaBrain className="text-5xl text-primary mb-4" />,
      title: "OCD, PTSD & ADHD",
      description: "Tailored treatments for complex mental health conditions.",
      link: "/services/ocd-ptsd-adhd"
    },
    {
      icon: <FaBed className="text-5xl text-primary mb-4" />,
      title: "Sleep & Sexual Health",
      description: "Addressing sleep disorders and sexual health concerns.",
      link: "/services/sleep-sexual-health"
    },
    {
      icon: <FaUsers className="text-5xl text-primary mb-4" />,
      title: "Relationship Counseling",
      description: "Improving interpersonal relationships and communication.",
      link: "/services/relationship-counseling"
    },
    {
      icon: <FaComments className="text-5xl text-primary mb-4" />,
      title: "Psychotherapy",
      description: "Diverse therapeutic approaches for mental wellness.",
      link: "/services/psychotherapy"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Mental Health Services | Expert Care for Your Well-being</title>
        <meta name="description" content="Comprehensive mental health services including depression, anxiety, bipolar disorder, addiction treatment, and more. Expert care tailored to your needs." />
        <meta name="keywords" content="mental health, psychiatry, therapy, counseling, depression, anxiety, addiction" />
      </Helmet>
      <div className="container-contact py-20 mt-40 lg:mt-0 ">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          {/* Left side: Text and Slides */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl font-bold text-teal-800 mb-6">Our Mental Health Services</h1>
            <p className="text-xl text-gray-600 mb-8">Expert care tailored to your well-being</p>
            
            {/* Transparent Slides */}
            <div className="relative h-48 bg-amber-100 bg-opacity-30 rounded-lg p-6">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
               <div className="text-center">
                    {services[currentSlide].icon}
                    <h3 className="text-2xl font-semibold text-teal-800 mt-2">{services[currentSlide].title}</h3>
                    <p className="text-gray-600 mt-2">{services[currentSlide].description}</p>
                  </div>

                </motion.div>
                </AnimatePresence>
            </div>
          </div>
          
          {/* Right side: Image */}
          <div className="lg:w-1/2">
            <img 
              src="/images/therapist.png" 
              alt="Mental Health Services" 
              
            />
          </div>
        </div>
      </div>
      <div className="relative py-20 overflow-hidden bg-gray-50">

        <div className="absolute inset-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full h-full">
            <path fill="#F5EABF" fillOpacity="0.5" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-teal-800">Services</h1>
          <p className='text-2xl text-center mb-4 text-gray-500'>Offered by Dr. Pratik</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Top border using the teal-800 color */}
      <div className="h-2 bg-teal-800"></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {/* Icon background using amber-100 */}
          <div className="bg-amber-100 rounded-full p-3 mr-4">
            {React.cloneElement(icon as React.ReactElement, { className: "text-4xl text-teal-800" })}
          </div>
          <h3 className="text-xl font-semibold text-teal-800">{title}</h3>
        </div>
        {/* Description text in a light gray */}
        <p className="text-gray-600 mb-4">{description}</p>
        {/* Button styled with teal-800 and amber-100 */}
        <Link 
          to={link} 
          className="inline-block bg-teal-800 text-amber-100 py-2 px-4 rounded hover:bg-teal-900 transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};


export default Services;