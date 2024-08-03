// import React, { useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { EDUCATION } from "../components/About/data/education";
// import EducationShowcaseList from "../components/About/education/education-showcase-list";
// import { EXPERIENCE } from "../components/About/data/experience";
// import ExperienceShowcaseList from "../components/About/experience/experience-showcase-list";
// import ResearchList from "../components/About/research/research-list";
// import { RESEARCH } from "../components/About/data/research";

// const About: React.FC = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <div className="bg-white">
//             <div className="relative overflow-hidden">
//                 {/* Curvy background */}
//                 <div className="absolute inset-0">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
//                         <path fill="#D59187" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"></path>
//                     </svg>
//                 </div>
//                 <div className="container mx-auto px-6 pt-20 pb-12 relative z-10 mt-40">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                         <div className="w-full">
//                             <AnimatePresence>
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5 }}
//                                 >
//                                     <h1 className="text-4xl font-bold text-teal-800 sm:text-5xl md:text-6xl lg:text-7xl">
//                                         Dr. Pratik Kumar
//                                     </h1>
//                                     <h2 className="mt-4 text-xl font-semibold text-teal-600">Experienced Psychiatrist</h2>
//                                     <p className="mt-6 text-lg text-gray-700">
//                                         {/* copy goes here */}
//                                         Dr. Pratik Kumar is a highly qualified psychiatrist with a DNB in Psychiatry from the Govt. Mental Hospital, Institute of Mental Health, Amritsar. With over 5 years of experience, he has worked across various mental health facilities in Punjab and served as a Senior Resident at IHBAS, New Delhi.
//                                     </p>
//                                     <p className="mt-4 text-lg text-gray-700">
//                                         {/* copy goes here */}
//                                         Specializing in neuropsychiatry and de-addiction, Dr. Kumar has extensive experience in both outpatient and inpatient care. He has been involved in academic teaching, clinical research, and has provided mental health services through various outreach programs, including telepsychiatry during the COVID-19 pandemic.
//                                     </p>
//                                     <div className="mt-6 flex items-center gap-4">
//                                         <img
//                                             src="https://flagcdn.com/w40/in.png"
//                                             alt="India"
//                                             className="w-10 h-auto"
//                                         />
//                                         <span className="text-lg font-medium text-teal-700">
//                                             Delhi, India
//                                         </span>
//                                     </div>
//                                 </motion.div>
//                             </AnimatePresence>
//                         </div>
//                         <div className="w-full flex justify-center lg:justify-end">
//                             <AnimatePresence>
//                                 <motion.div
//                                     initial={{ opacity: 0, scale: 0.9 }}
//                                     animate={{ opacity: 1, scale: 1 }}
//                                     transition={{ duration: 0.5 }}
//                                     className="w-full max-w-md"  // Adjust max-width as needed
//                                 >
//                                     <img
//                                         src='/images/dr-pratik-kumar.jpg'
//                                         className="w-full h-auto rounded-lg shadow-xl object-cover"
//                                         alt="Dr. Pratik Kumar"
//                                     />
//                                 </motion.div>
//                             </AnimatePresence>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
//             <EducationShowcaseList title="Education" details={EDUCATION} />
//             <ResearchList title="Research" details={RESEARCH} />
//         </div>
//     )
// }

// export default About;

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EDUCATION } from "../components/About/data/education";
import EducationShowcaseList from "../components/About/education/education-showcase-list";
import { EXPERIENCE } from "../components/About/data/experience";
import ExperienceShowcaseList from "../components/About/experience/experience-showcase-list";
import ResearchList from "../components/About/research/research-list";
import { RESEARCH } from "../components/About/data/research";

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
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
                                            Dr. Pratik Kumar is a highly qualified psychiatrist with a DNB in Psychiatry from the Govt. Mental Hospital, Institute of Mental Health, Amritsar. With over 5 years of experience, he has made significant contributions to the field of mental health.
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
                                        <img
                                            src="https://flagcdn.com/w40/in.png"
                                            alt="India"
                                            className="w-10 h-auto"
                                        />
                                        <span className="text-lg font-medium text-teal-700">
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
                                        src='/images/dr-pratik-kumar.jpg'
                                        className="w-full h-auto rounded-lg shadow-xl object-cover"
                                        alt="Dr. Pratik Kumar"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
            <EducationShowcaseList title="Education" details={EDUCATION} />
            <ResearchList title="Research" details={RESEARCH} />
        </div>
    )
}

export default About;