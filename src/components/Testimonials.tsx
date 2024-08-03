import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vishakha",
    role: "Anxiety Patient",
    content: "What truly sets Dr. Pratik  apart is his genuine care for his patients. His treatment plans were comprehensive and tailored specifically to my needs, incorporating a combination of therapy and medication management",
    
  },
  {
    id: 2,
    name: "Meenakshi Kayshap",
    role: "Depression Recovery",
    content: "Truly amazing doctor and treats you like a friend. He had in-depth knowledge of the diseases and also gave expert meditation and lifestyle tips to me. I'm out of my illness all thanks to him.",
    
  },
  {
    id: 3,
    name: "Sneh Prabhakar",
    role: "Bipolar Disorder Patient",
    content: "A very good humble and knowledgeable doctor and a kind human being.I was totally satisfied with his treatment. And I recommend doctor pratik for all your mental health issues.",
    
  },
  {
    id: 4, 
    name: "Sanyam Gupta", 
    role: "PTSD", 
    content: "Amongst the best psychiatrists in New Delhi. Has great knowledge, will listen to your problems properly and suggest best treatment. Highly recommended."
  }
  // Add more testimonials as needed
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      
      <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
      <p className="text-gray-600 mb-4">{testimonial.role}</p>
      <p className="text-gray-800 italic">&ldquo;{testimonial.content}&rdquo;</p>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="bg-rose-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;