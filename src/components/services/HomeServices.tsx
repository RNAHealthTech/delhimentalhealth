import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


interface ServiceCardProps {
    imageUrl: string;
    title: string;
    description: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ imageUrl, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            <div className="h-48 overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
            </div>
            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

const FromConsultantsDesk = () => {
    return (
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-teal-800">From Consultant's Desk</h2>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        className="w-full md:w-1/3 mb-8 md:mb-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src="/images/dr-prateek-2.jpg"
                            alt="Dr. Pratik Kumar"
                            className="rounded-full shadow-xl w-64 h-64 mx-auto object-cover border-4 border-teal-500"
                        />
                    </motion.div>
                    <motion.div
                        className="w-full md:w-2/3 md:pl-12"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-teal-800">Dr. Pratik Kumar's Insights on Mental Health</h3>
                        <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-600 mb-4">
                            "In an age where mental health buzzwords flood our screens, remember: true healing isn't found in trending hashtags or quick fixes. It's a deeply personal journey of self-discovery, resilience, and gradual growth. Let's prioritize genuine well-being over viral sensations." - Dr. Pratik Kumar
                        </blockquote>

                        <p className="text-lg text-gray-700 mb-12">
                            With experience of over a decade and expertise in DNB (Psychiatry), I'm committed to offering compassionate, evidence-based care for a wide range of mental health concerns.
                        </p>
                        <p className="text-lg text-gray-700 mb-12">
                            From my work at prestigious institutions like IHBAS, New Delhi to my dedication during the COVID-19 pandemic, I've consistently strived to make high-quality mental healthcare accessible to all.
                        </p>

                        <Link
                            to="/about"
                            className="group inline-flex mt-6 items-center justify-center ml-4 text-2xl sm:text-2xl md:text-3xl font-edu text-teal-800 transition-all duration-300 ease-in-out"
                        >
                            About Dr. Pratik Kumar
                            <span className="ml-2 sm:ml-4 relative flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-105 group-active:scale-95">
                                <img
                                    src="/images/circle-red-double-hover.png"
                                    alt="Animated Circle"
                                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain animate-spin-slow"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

const HomeServices: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number | 0>(0);

    const featuredServices = [
        {
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fdepression.png?alt=media&token=fef8d553-5703-431d-869a-7add37c73672",
            title: "Depression & Anxiety",
            description: "Expert treatment for mood and anxiety disorders.",
        },
        {
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fconfidenceissues.jpg?alt=media&token=ce9b2a60-c644-4172-b78b-f1ba82820bf8",
            title: "Confidence Issues",
            description: "Tailored techniques and exercises to boost your confidence.",
        },
        {
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Frelationship3.jpg?alt=media&token=65cd61e9-318b-4274-b72a-0adf5c7aa877",
            title: "Relationship Counseling",
            description: "Guidance and support for improving communication and resolving conflicts in relationships.",
        },
        {
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fbipolar-disorder-treatment.jpg?alt=media&token=13e69c0c-0edb-4bfe-b0f6-8f3c8775e3fe",
            title: "Bipolar Disorder",
            description: "Helping in trigger identification and calming medications."
        }

    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % featuredServices.length);
        }, 2500); // Change slide every 2.5 seconds

        return () => clearInterval(timer);
        // eslint-disable-next-line
    }, []);

    return (
        <section className="container-contact py-24 relative overflow-hidden">
            <FromConsultantsDesk />
            <div className="container mx-auto px-4 mt-8 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-teal-900">Choose your Personalized Session</h2>

                <div className="flex justify-center">

                    <div className="w-full max-w-5xl">
                        {/* Desktop view - unchanged */}
                        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
                            {featuredServices.map((service, index) => (
                                <div
                                    key={index}
                                    className={`
                                        relative z-${10 + index}
                                        lg:transform-none lg:hover:scale-105
                                        transition-all duration-300 mb-8 lg:mb-0
                                        ${index % 2 === 0 ? 'lg:even:mt-4' : 'lg:odd:mt-4'}
                                    `}
                                >
                                    <div
                                        className={`
                                            bg-white rounded-lg shadow-xl overflow-hidden 
                                            outline outline-2 outline-teal-200 hover:outline-amber-400 
                                            transition-all duration-300
                                            transform lg:transform-none
                                            ${index % 2 === 0 ? '-rotate-3 hover:rotate-0' : 'rotate-3 hover:rotate-0'}
                                        `}
                                    >
                                        <ServiceCard {...service} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Mobile carousel */}
                        <div className="lg:hidden relative">
                            <div className="overflow-hidden">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {featuredServices.map((service, index) => (
                                        <div key={index} className="w-full flex-shrink-0 px-4">
                                            <div className={`
                                                bg-gradient-to-br from-teal-100 to-white
                                                rounded-lg shadow-xl overflow-hidden 
                                                transition-all duration-300
                                            `}>
                                                <ServiceCard {...service} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mt-4">
                                {featuredServices.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`rounded-full! ${currentSlide === index ? 'bg-peach' : 'bg-amber-100'}`}
                                        style={{ width: '24px', height: '24px', borderRadius: '50%', padding: 0 }}
                                        onClick={() => setCurrentSlide(index)}
                                    ></button>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
                <div className="text-center mt-16">

                    <Link
                        to="/services"
                        className="group inline-flex mt-4 items-center justify-center text-xl font-edu sm:text-2xl md:text-3xl font-medium text-teal-700 transition-all duration-300 ease-in-out"
                    >
                        Get Rid of Your Suffering
                        <span className="ml-4 relative flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-105 group-active:scale-95">
                            <img
                                src="/images/yellow-circle.png"
                                alt="Animated Circle"
                                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain animate-spin-slow"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-6 w-6 text-black" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white rounded-tl-full opacity-30 transform translate-x-1/4 translate-y-1/2"></div>

        </section>
    );
};

export default HomeServices;
