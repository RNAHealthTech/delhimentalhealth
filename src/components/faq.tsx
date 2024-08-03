import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "How can I take an appointment with Dr. Pratik Kumar?",
        answer: "You can book an appointment with Dr. Pratik Kumar by calling 9023997854 or 9877065403. Alternatively, you can email him at docpratikkumar@gmail.com to schedule a consultation.",
    },
    {
        question: "Where does Dr. Pratik Kumar practice?",
        answer: "Dr. Pratik Kumar has experience working across Punjab and in New Delhi. He has worked at various centers including NIRMAL CHHAYA, DISHA, PARIVARTAN, and SAMARPAN in Punjab. Most recently, he worked as a Senior Resident at IHBAS in New Delhi.",
    },
    {
        question: "What is the educational qualification of Dr. Pratik Kumar?",
        answer: "Dr. Pratik Kumar holds a DNB in Psychiatry from Govt. Mental Hospital, Institute of Mental Health, Amritsar (2018). He also has an MBBS degree from JJM Medical College, Davengere, Karnataka (2012).",
    },
    {
        question: "What languages can Dr. Pratik Kumar speak?",
        answer: "While the provided information doesn't specify languages, given his education and work experience in various parts of India, it's likely that Dr. Kumar can communicate in English and Hindi. For specific language capabilities, it's best to inquire directly.",
    },
    {
        question: "Why do patients visit Dr. Pratik Kumar?",
        answer: "Patients visit Dr. Pratik Kumar for various psychiatric and mental health issues. He has experience in neuropsychiatry, de-addiction, and general psychiatry. He has worked with patients in OPD, IPD, emergency settings, and even provided telepsychiatry services.",
    },
];

const FAQItems: React.FC<{ item: FAQItem, isOpen: boolean, toggleOpen: () => void }> = ({ item, isOpen, toggleOpen }) => {
    return (
        <div className="mb-4">
            <button
                className="flex justify-between items-center w-full text-left font-semibold text-teal-800 bg-white p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-800"
                onClick={toggleOpen}
            >
                <span className="pr-2 text-sm sm:text-base">{item.question}</span>
                <span className="text-xl flex-shrink-0">{isOpen ? '−' : '+'}</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-3 sm:p-4 rounded-b-lg shadow-inner"
                    >
                        <p className="text-gray-700 text-sm sm:text-base">{item.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-peach py-8 sm:py-12 md:py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-teal-800">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FAQItems
                            key={index}
                            item={faq}
                            isOpen={openIndex === index}
                            toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;