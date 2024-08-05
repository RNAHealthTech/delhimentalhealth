// services/psychotherapy.tsx

import React, { useState ,useEffect} from 'react';
import Helmet from "react-helmet";
import AppointmentModal from '../AppointmentModal';

const Psychotherapy: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
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
        <title>Psychotherapy Services | Comprehensive Mental Wellness Support</title>
        <meta name="description" content="Expert psychotherapy services for mental health and personal growth. Explore our diverse therapeutic approaches and start your journey to emotional well-being." />
        <meta name="keywords" content="psychotherapy, therapy, counseling, mental health, personal growth, emotional well-being" />
      </Helmet>
      <div className="container mx-auto px-4 py-12 mt-48">
        <h1 className="text-4xl font-bold mb-8">Psychotherapy Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Understanding Psychotherapy</h2>
            <p className="mb-4">Psychotherapy, also known as talk therapy, is a collaborative treatment based on the relationship between an individual and a therapist. It provides a supportive environment to talk openly about your concerns and feelings.</p>
            <img src="https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fheroimage.png?alt=media&token=53ba4ac8-beda-460f-9d67-8739eb54d7e1"
             alt="Psychotherapy session" 
             width={500} 
             height={300} 
             className="rounded-lg mb-4" 
             />
            <h3 className="text-xl font-semibold mb-2">Benefits of Psychotherapy</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Improved emotional regulation</li>
              <li>Better coping mechanisms for stress and anxiety</li>
              <li>Enhanced self-awareness and personal growth</li>
              <li>Resolution of specific problems or traumas</li>
              <li>Improved relationships and communication skills</li>
              <li>Greater sense of well-being and life satisfaction</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Psychotherapy Approach</h2>
            <p className="mb-4">We offer a range of evidence-based psychotherapy approaches, tailored to meet your individual needs and goals. Our experienced therapists work collaboratively with you to develop a personalized treatment plan.</p>
            <img src="https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fdiverse-therapy-session.jpg?alt=media&token=3ee53e01-ed3e-4ea0-85de-0edb6cb2c3e9" alt="Diverse therapy approaches" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Therapeutic Modalities Include:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Psychodynamic Therapy</li>
              <li>Humanistic Therapy</li>
              <li>Mindfulness-Based Therapies</li>
              <li>Dialectical Behavior Therapy (DBT)</li>
              <li>Interpersonal Therapy</li>
            </ul>
            <p className="mb-4">Our compassionate therapists are committed to providing a safe, confidential space for you to explore your thoughts and feelings, work through challenges, and achieve personal growth.</p>
            <button className="bg-peach text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300" onClick={openModal}>
              Begin Your Therapy Journey
            </button>
          </div>
        </div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal}  />
    </>
  );
};

export default Psychotherapy;