import React, {useEffect, useState} from 'react';
import Helmet from "react-helmet";
import AppointmentModal from '../AppointmentModal';

const Dementia: React.FC = () => {

  const [isModalOpen,setIsModalOpen] = useState<boolean>(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }
  
  return (
    <>
      <Helmet>
        <title>Dementia Care | Specialized Memory and Cognitive Support</title>
        <meta name="description" content="Comprehensive care for individuals with dementia. Learn about our specialized services, support programs, and management strategies. Schedule a consultation today." />
        <meta name="keywords" content="dementia, Alzheimer's, memory care, cognitive disorders, elder care" />
      </Helmet>
      <div className="container mx-auto px-4 py-12 mt-48">
        <h1 className="text-4xl font-bold mb-8">Dementia Care</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Understanding Dementia</h2>
            <p className="mb-4">Dementia is a general term for a decline in mental ability severe enough to interfere with daily life. It's not a specific disease, but an overall term that describes a group of symptoms.</p>
            <img src="https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fdementia.jpg?alt=media&token=2da0fab7-d4a9-4cce-a473-26321776f0c8" alt="Illustration of dementia" 
              width={500} 
              height={300} 
              className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Common Symptoms</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Memory loss</li>
              <li>Difficulty with problem-solving or complex tasks</li>
              <li>Problems with visual perception</li>
              <li>Impaired reasoning or judgment</li>
              <li>Difficulty with communication and language</li>
              <li>Changes in mood or behavior</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Care Approach</h2>
            <p className="mb-4">We provide comprehensive, person-centered care for individuals with dementia, focusing on maintaining quality of life and supporting both patients and their families.</p>
            <img src="https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fdementia-treatment.jpg?alt=media&token=ac7b9df4-008d-4964-8eec-3825f4988d29"
             
            alt="Dementia care" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Cognitive assessments and diagnostics</li>
              <li>Medication management</li>
              <li>Cognitive stimulation therapy</li>
              <li>Behavioral management strategies</li>
              <li>Family education and support</li>
              <li>Safety planning and home environment adaptation</li>
              <li>Coordination with other healthcare providers</li>
            </ul>
            <p className="mb-4">Our team of specialists is dedicated to providing compassionate care and support to help manage the challenges of dementia.</p>
            <button className="bg-peach text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300" onClick={openModal}>
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal}  />
    </>
  );
};

export default Dementia;