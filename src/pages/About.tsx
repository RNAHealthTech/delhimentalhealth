import React from "react";
import { AnimatePresence } from "framer-motion";
import { EDUCATION } from "../components/About/data/education";
import EducationShowcaseList from "../components/About/education/education-showcase-list";
import { EXPERIENCE } from "../components/About/data/experience";
import ExperienceShowcaseList from "../components/About/experience/experience-showcase-list";
import ResearchList from "../components/About/research/research-list";
import { RESEARCH } from "../components/About/data/research";

const About: React.FC = () => {
    return (

        <div>
            <div className="bg-primary  mx-auto mt-0 flex flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
                {/*<div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary opacity-20"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
  <path fill="#FFF" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"></path>
</svg>
    </div>*/}
                <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2 relative z-8">
                    <AnimatePresence>

                        <img
                            src='/images/dr-pratik.png'
                            className="h-100 w-100 px-0 xl:px-16"
                            alt="Dr. Pratik "
                        />

                    </AnimatePresence>
                </div>
                <div className="sm:1/2 mt-10 w-full lg:w-1/2 relative z-8">
                    <AnimatePresence>

                        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-4xl lg:text-4xl xl:text-7xl">
                            Dr. Pratik Kumar
                        </h1>



                        <h2 className="mt-8 text-sm font-semibold text-muted-foreground sm:text-xl md:text-xl">Associate Consultant in Endocrinology & Metabolism at Sir Ganga Ram Hospital, Delhi.</h2>



                        <p className="mt-8 text-base font-medium text-white sm:text-lg md:text-lg">
                            A young, astute, and passionate-about-endocrinology clinician, with interest in research and academia.
                        </p>

                        <p className="mt-8 text-base font-medium text-gray-900 sm:text-lg md:text-lg">
                            As an Associate Consultant in Endocrinology & Metabolism, I specialize in Adult & Pediatric Endocrine disorders, Diabetes, and Metabolism. Passionate about research and academia, I provide exceptional healthcare with a problem-solving approach, ensuring advanced treatments and prioritizing patient well-being.

                        </p>



                        <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
                            <img
                                src="https://flagcdn.com/w80/in.png"
                                width="20"
                                alt="India"
                            />
                        </div>
                        <span className="text-lg font-medium text-foreground">
                            Delhi, India
                        </span>

                    </AnimatePresence>
                </div>
            </div>
            <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
            <EducationShowcaseList title="Education" details={EDUCATION} />
            <ResearchList title="Research" details={RESEARCH} />

        </div>

    )
}

export default About;