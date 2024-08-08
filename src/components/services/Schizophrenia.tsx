import React, {useEffect, useState} from 'react';
import Helmet from "react-helmet";
import AppointmentModal from '../AppointmentModal';

const Schizophrenia: React.FC = () => {

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
        <title>Schizophrenia Treatment | Comprehensive Mental Health Care</title>
        <meta name="description" content="Expert treatment for schizophrenia. Learn about symptoms, management strategies, and our comprehensive care approach. Schedule a consultation today." />
        <meta name="keywords" content="schizophrenia, psychosis, mental health, treatment, therapy" />
      </Helmet>
      <div className="container mx-auto px-4 py-12 mt-48">
        <h1 className="text-4xl font-bold mb-8">Schizophrenia Treatment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Understanding Schizophrenia</h2>
            <p className="mb-4">Schizophrenia is a complex mental health disorder that affects a person's ability to think, feel, and behave clearly.</p>
            <img src="https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fschizophrenia.jpg?alt=media&token=799d178c-93b6-48f4-b837-305b8628aaaa" 
            alt="Illustration of schizophrenia" 
              width={500} 
              height={300} 
              className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Common Symptoms</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Hallucinations</li>
              <li>Delusions</li>
              <li>Disorganized speech</li>
              <li>Disorganized behavior</li>
              <li>Negative symptoms (reduced emotional expression, lack of motivation)</li>
              <li>Cognitive symptoms (difficulty concentrating, memory problems)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Treatment Approach</h2>
            <p className="mb-4">We offer comprehensive care for managing schizophrenia, focusing on symptom reduction and improving overall quality of life.</p>
            <img src="https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fschizophrenia-treatment.jpg?alt=media&token=4237bf66-2602-4b6d-87e7-f35981890bac" 
            alt="Schizophrenia treatment" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Medication management (antipsychotics)</li>
              <li>Psychotherapy (Cognitive Behavioral Therapy, Family therapy)</li>
              <li>Social skills training</li>
              <li>Vocational rehabilitation</li>
              <li>Supported employment</li>
              <li>Family education and support</li>
            </ul>
            <p className="mb-4">Our experienced team of mental health professionals is dedicated to providing personalized care and support for individuals with schizophrenia and their families.</p>
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

export default Schizophrenia;