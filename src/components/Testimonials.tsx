import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vishakha",
    role: "Anxiety Patient",
    content: "What truly sets Dr. Pratik apart is his genuine care for his patients. His treatment plans were comprehensive and tailored specifically to my needs, incorporating a combination of therapy and medication management.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjV6KHi9mccX2_5YK2yMTXnFVbAtYj9A5B-CT8fKSm1wIxyVdQPq=w60-h60-p-rp-mo-br100",
  },
  {
    id: 2,
    name: "Meenakshi Kayshap",
    role: "Depression Recovery",
    content: "Truly amazing doctor and treats you like a friend. He had in-depth knowledge of the diseases and also gave expert meditation and lifestyle tips to me. I'm out of my illness all thanks to him.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUF0mY-y8Vl2Myl8prddD6a0MmCyokm1KskjOiBSYarC_79t9Hh=w60-h60-p-rp-mo-br100",
  },
  {
    id: 3,
    name: "Sneh Prabhakar",
    role: "Bipolar Disorder Patient",
    content: "A very good humble and knowledgeable doctor and a kind human being. I was totally satisfied with his treatment. And I recommend doctor pratik for all your mental health issues.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWC3-3hHYtcOlce9ODauOZ9MD_bxMKhyAuLj8YJZ994s4w5Elk=w60-h60-p-rp-mo-br100",
  },
  {
    id: 4, 
    name: "Sanyam Gupta", 
    role: "PTSD", 
    content: "Amongst the best psychiatrists in New Delhi. Has great knowledge, will listen to your problems properly and suggest best treatment. Highly recommended.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUxZY7VfBzH_oRfks4amsYfnYMO0ey7-bIMvbQ_nVr808Z3yB1h=w60-h60-p-rp-mo-br100",
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={testimonial.avatar} 
        alt={testimonial.name} 
        className="w-20 h-20 rounded-full mb-4 border-4 border-amber-100"
      />
      <h3 className="text-xl font-semibold mb-2 text-teal-800">{testimonial.name}</h3>
      <p className="text-gray-600 mb-4">{testimonial.role}</p>
      <p className="text-gray-800 italic">&ldquo;{testimonial.content}&rdquo;</p>
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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="bg-rose-50 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">What Our Patients Say</h2>
        
        {isMobile ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
      
      {/* Background decoration */}
      <img 
        src="/images/therapy.png" 
        alt="Brain illustration" 
        className="w-64 h-64 opacity-10"
      />
    </div>
  );
};

export default Testimonials;