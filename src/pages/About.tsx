import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EDUCATION } from "../components/About/data/education";
import EducationShowcaseList from "../components/About/education/education-showcase-list";
import { EXPERIENCE } from "../components/About/data/experience";
import ExperienceShowcaseList from "../components/About/experience/experience-showcase-list";
import ResearchList from "../components/About/research/research-list";
import { RESEARCH } from "../components/About/data/research";
import { Helmet } from "react-helmet";

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [currentText, setCurrentText] = useState('Best Psychiatrist in India');
    const [textVisible, setTextVisible] = useState(true);

    const texts = [
        "Consultant at multiple de-addiction and neuropsychiatry centers across Punjab",
        "Senior Resident at IHBAS, New Delhi - a premier institute for mental health",
        "Involved in District Mental Health Program (DMHP) under National Mental Health Program",
        "Provided services through Mobile Mental Health Unit (MMHU) in Delhi",
        "Now serving at Delhi Global Mind Clinic, bringing expert psychiatric care to the capital"
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
            <Helmet>
                <title>About Dr. Pratik Kumar - Qualifications & Experience</title>
                <meta name="description" content="Learn about Dr. Pratik Kumar's extensive qualifications, including DNB Psychiatry, MBBS, and 5+ years of experience in mental health treatment and research." />
                <meta name="keywords" content="Dr. Pratik Kumar biography, psychiatric qualifications, mental health experience, IHBAS, senior resident, publications" />
            </Helmet>
            <div className="bg-white">
                <div className="relative overflow-hidden">
                    {/* Curvy background */}
                    <div className="absolute inset-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
                            <path fill="#D59187" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"></path>
                        </svg>
                    </div>
                    <div className="container mx-auto px-6 pt-20 pb-12 relative z-10 mt-40">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="w-full">
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <h1 className="text-4xl font-bold text-teal-800 sm:text-5xl md:text-6xl lg:text-7xl">
                                                Dr. Pratik Kumar
                                            </h1>
                                            <h2 className="mt-2 text-xl font-semibold text-teal-600">Experienced Psychiatrist</h2>
                                        </div>

                                        <div className="space-y-4">
                                            <p className="text-lg text-gray-700">
                                                Dr. Pratik Kumar is a highly qualified psychiatrist with a DNB in Psychiatry from the Govt. Mental Hospital, Institute of Mental Health, Amritsar. With more than 10 years of experience, he has made significant contributions to the field of mental health.
                                            </p>
                                            <p className="text-lg text-gray-700">
                                                Specializing in neuropsychiatry and de-addiction, Dr. Kumar's expertise spans:
                                            </p>
                                            <ul className="list-disc pl-6 text-lg text-gray-700">
                                                <li>Extensive experience in outpatient and inpatient care</li>
                                                <li>Academic teaching and clinical research</li>
                                                <li>Mental health services through various outreach programs</li>
                                                <li>Telepsychiatry services during the COVID-19 pandemic</li>
                                            </ul>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <p className="font-edu text-gray-700 text-sm lg:text-xl">
                                                📍DELHI  GL🌏BAL  MIND  CLINIC
                                            
                                            </p>
                                            <br />
                                            <img
                                                src="https://flagcdn.com/w40/in.png"
                                                alt="India"
                                                className="w-10 h-auto"
                                            />
                                            <span className="text-lg font-edu text-teal-700">
                                                Delhi, India
                                            </span>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <div className="w-full flex justify-center lg:justify-end">
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full max-w-md"
                                    >
                                        <img
                                            src='/images/dr-prateek.png'
                                            className="w-full h-auto rounded-lg shadow-xl object-cover"
                                            alt="Dr. Pratik Kumar"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
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
                <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
                <EducationShowcaseList title="Education" details={EDUCATION} />
                <ResearchList title="Research" details={RESEARCH} />
            </div>
        </>
    )
}

export default About;