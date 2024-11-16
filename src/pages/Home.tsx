import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
//import { animate, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChartLine, FaTrophy, FaSmile } from 'react-icons/fa';
import HomeServices from '../components/services/HomeServices';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/faq';
import SEOHelmet from '../SEOHelmet';
import OnlineModal from '../components/OnlineModal';
import MediaGallerySection from '../components/MediaGallerySection';



const Home: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const el = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);

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
  console.log(ref, inView);

  const [experienceYears, setExperienceYears] = useState(0);
  const [servedPatients, setServedPatients] = useState(0);

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

    const animateValue2 = (start: number, end: number, duration: number) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setServedPatients(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };
    animateValue(0, 10, 2000);
    animateValue2(0, 50, 2000);
    //eslint-disable-next-line
  }, [])



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

  // const typedRef = useRef(null);
  const [currentText, setCurrentText] = useState('Therapy sessions with Dr. Pratik helped me the best to unfold my burden of so many years');
  const [textVisible, setTextVisible] = useState(true);

  const texts = [
    "Ranbir: 'Dr. Pratik's expertise changed my life.'",
    "Mr. Sahu: 'He is basically brilliant.'",
    "Ganesah (Tilak Nagar): 'I finally found hope with Dr. Kumar's treatment.'",
    "Rubal: 'Dr. Pratik's approach is both professional and compassionate.'",
    "Sushant: 'Dr. Pratik helped me in the worst time of my career.'",
  ];

  useEffect(() => {
    let currentIndex = 0;

    const changeText = () => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrentText(texts[currentIndex]);
        setTextVisible(true);
        currentIndex = (currentIndex + 1) % texts.length;
      }, 1000); // Wait for fade out before changing text
    };

    const intervalId = setInterval(changeText, 4000); // Change text every 5 seconds

    return () => clearInterval(intervalId);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <SEOHelmet />
      <div className="bg-white mt-28">
        <section className="relative text-white overflow-hidden pt-20 lg:pt-0">
          <div className="container-home mx-auto px-4 py-12 sm:py-16 md:py-20">
            <div className="flex flex-col md:flex-row items-center">
              {/* Left side content */}
              <div className="w-full md:w-1/2 z-10 mb-8 md:mb-0">
                <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
                  <div className="h-[50px]">
                    <p className="text-sm text-teal-500 font-semibold lg:text-xl" ref={el}></p>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-teal-800">
                    Expert Psychiatric Care
                  </h1>
                  <p className="text-lg sm:text-xl mb-6 text-teal-600">
                    by DNB-qualified psychiatrist with over 10 years of experience in comprehensive mental health treatment
                  </p>

                </div>
                <div className='flex flex-col mt-8'>
                  <Link
                    to="/contact"
                    className="group inline-flex mt-4 items-center justify-center ml-4 text-2xl sm:text-2xl md:text-3xl font-edu text-teal-800 transition-all duration-300 ease-in-out"
                  >
                    Book Appointment
                    <span className="ml-2 sm:ml-4 relative flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-105 group-active:scale-95">
                      <img
                        src="/images/circle-red-double.png"
                        alt="Animated Circle"
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain animate-spin-slow"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
                  <button
                    className="group inline-flex mt-12 items-center justify-center ml-4 text-2xl sm:text-2xl md:text-3xl font-edu text-teal-800 transition-all duration-300 ease-in-out cursor-pointer"
                    onClick={openModal}
                  >
                    Online Appointment
                    <span className="ml-2 sm:ml-4 relative flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-105 group-active:scale-95">
                      <img
                        src="/images/yellow-circle.png"
                        alt="Animated Circle"
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain animate-spin-slow"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <OnlineModal isOpen2={isModalOpen} onClose2={closeModal} />
              {/* Right side image */}
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <img
                  src="/images/therapy.png"
                  alt="Dr. Pratik Kumar"
                  className="w-full h-auto max-w-md mx-auto md:max-w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <div className='bg-gradient-to-l from-teal-800 to-teal-500 text-white font-bold py-10 sm:py-16 md:py-20 px-4'>
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-4">
            <div className="flex flex-col items-center text-center">
              <FaChartLine className="text-3xl md:text-4xl mb-3" />
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Experience <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{experienceYears}+</span> years
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaTrophy className="text-3xl md:text-4xl mb-3" />
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Proven Results</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaSmile className="text-3xl md:text-4xl mb-3" />
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Served <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{servedPatients}k+</span> patients
              </p>

            </div>
          </div>
        </div>



        <HomeServices />
        <div className="bg-gradient-to-l from-teal-800 to-teal-500 text-white py-2 px-2">
          <div className="container mx-auto text-center">
            <div className="rounded-lg p-6 md:p-8 lg:p-10">
              <p
                className={`text-lg md:text-xl lg:text-2xl font-edu min-h-[4rem] md:min-h-[5rem] transition-opacity duration-1000 ${textVisible ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                {currentText}
              </p>
            </div>
          </div>
        </div>
        <MediaGallerySection />
        <Testimonials />
        <FAQ />
      </div>
    </>
  );
};


export default Home;
