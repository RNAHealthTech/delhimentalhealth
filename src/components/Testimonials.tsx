import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, FileText, MessageSquare, ShieldCheck, HeartPulse, Users } from 'lucide-react';

interface GuidanceItem {
  id: number;
  title: string;
  category: string;
  content: string;
  icon: React.ReactNode;
}

const guidanceList: GuidanceItem[] = [
  {
    id: 1,
    title: "Comprehensive Clinical Assessment",
    category: "Diagnostic Evaluation",
    content: "Structured psychiatric evaluations assess emotional, cognitive, and physiological symptoms to formulate an accurate diagnosis and individualized care plan.",
    icon: <Stethoscope className="w-7 h-7 text-teal-700" />,
  },
  {
    id: 2,
    title: "Evidence-Based Treatment Plans",
    category: "Therapeutic Modalities",
    content: "Care regimens integrate modern psychopharmacology, clinical monitoring, and lifestyle modifications tailored to individual patient health profiles.",
    icon: <FileText className="w-7 h-7 text-teal-700" />,
  },
  {
    id: 3,
    title: "Psychotherapy & Counseling",
    category: "Psychological Support",
    content: "Structured therapeutic interventions, including Cognitive Behavioral Therapy (CBT), assist patients in developing sustainable coping mechanisms.",
    icon: <MessageSquare className="w-7 h-7 text-teal-700" />,
  },
  {
    id: 4,
    title: "Confidentiality & Ethical Standards",
    category: "Patient Privacy",
    content: "All clinical consultations and records strictly follow professional confidentiality guidelines and National Medical Commission ethical conduct rules.",
    icon: <ShieldCheck className="w-7 h-7 text-teal-700" />,
  },
  {
    id: 5,
    title: "Collaborative Wellness Care",
    category: "Long-Term Management",
    content: "Care plans emphasize collaborative goal-setting, ongoing symptom monitoring, and structured follow-ups for stable, lasting mental wellness.",
    icon: <HeartPulse className="w-7 h-7 text-teal-700" />,
  },
  {
    id: 6,
    title: "Family Psychoeducation & Support",
    category: "Caregiver Education",
    content: "Educational support for family members builds understanding, strengthens communication, and fosters an empathetic environment for ongoing recovery.",
    icon: <Users className="w-7 h-7 text-teal-700" />,
  }
];

const GuidanceCard: React.FC<{ item: GuidanceItem }> = ({ item }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center h-full border border-teal-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-16 h-16 rounded-full mb-4 bg-teal-50 border-2 border-teal-200 flex items-center justify-center shadow-sm">
        {item.icon}
      </div>
      <h3 className="text-xl font-semibold mb-1 text-teal-800">{item.title}</h3>
      <p className="text-teal-600 text-sm font-medium mb-3">{item.category}</p>
      <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % guidanceList.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="bg-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-amber-200 rounded-full opacity-20"></div>
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-amber-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/4 -right-1/4 w-2/3 h-2/3 bg-amber-100 rounded-full opacity-15"></div>
        <div className="absolute -top-1/4 left-1/4 w-1/2 h-1/2 bg-amber-300 rounded-full opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1/3 h-1/3 bg-amber-200 rounded-full opacity-15"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">
          Mental Health Assessment, Care & Patient Guidance
        </h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <img 
              src="/images/wallpaper.jpeg" 
              alt="Mental Health Care & Guidance"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>     
          <div className='w-full lg:w-1/2'>
            {isMobile ? (
              <div className='relative h-[360px]'>
                {/* @ts-ignore */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-full"
                  >
                    <GuidanceCard item={guidanceList[currentIndex]} />
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guidanceList.map((item) => (
                  <GuidanceCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;