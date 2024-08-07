import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import { FaBrain, FaHeartbeat, FaBed, FaUsers, FaComments } from 'react-icons/fa';
//import { AnimatePresence, motion } from 'framer-motion';


const Services: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
 
  const [dailyTip, setDailyTip] = useState('');
  
  console.log(currentSlide, dailyTip);

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

  useEffect(() => {
    const tips = [
      "Take a few deep breaths when you feel overwhelmed.",
      "Practice gratitude by noting three things you're thankful for today.",
      "Reach out to a friend or loved one for a quick chat.",
      "Take a short walk to clear your mind and boost your mood.",
      "Try a few minutes of mindfulness meditation to center yourself."
    ];
    setDailyTip(tips[Math.floor(Math.random() * tips.length)]);
    //eslint-disable-next-line
  }, []);

  const handleEmojiClick = (emoji: any) => {
    console.log(emoji);
  };

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
        <title>Mental Health Services - Dr. Pratik Kumar</title>
        <meta name="description" content="Comprehensive mental health services offered by Dr. Pratik Kumar, including OPD, IPD, de-addiction, neuropsychiatry, telepsychiatry, and emergency care." />
        <meta name="keywords" content="psychiatric services, OPD, IPD, de-addiction, neuropsychiatry, telepsychiatry, mental health emergency care, Dr. Pratik Kumar" />
      </Helmet>
      <div className="container-services py-20 mt-40 lg:mt-0 ">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          {/* Left side: Text and Slides */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl font-bold text-teal-800 mb-6">Transformative Mental Health Care</h1>
            <p className="text-xl text-gray-600 mb-8">Personalized expertise for your unique journey to well-being</p>
            <div className="bg-amber-50 border-l-4 border-teal-800 p-6 rounded-r-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold text-teal-800 mb-3">Daily Mental Health Check-In</h2>
              <p className="text-gray-700 mb-4">How are you feeling today? Select an emoji that best represents your current state:</p>
              <div className="flex justify-between items-center">
                {['😊', '😐', '😢', '😠', '😰'].map((emoji, index) => (
                  <button
                    key={index}
                    className="text-4xl bg-white rounded-full p-2 hover:bg-teal-100 transition duration-300"
                    onClick={() => handleEmojiClick(emoji)}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            {/* Added quick mental health tip */}

          </div>




          {/* Right side: Image */}
          <div className="lg:w-1/2 mt-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Ftherapist.png?alt=media&token=b1ff4332-2d37-4f87-a838-633cad3ea9cb"
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
          <h1 className="text-4xl font-bold text-center mb-12 text-teal-800">Comprehensive Care for Your Mental Health</h1>
          <p className='text-2xl text-center mb-4 text-gray-500'>Expert Services by Dr. Pratik Kumar</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-4">
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