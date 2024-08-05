// services/addiction-disorders.tsx

import React, {useEffect, useState} from 'react';
import Helmet from "react-helmet";
import AppointmentModal from '../AppointmentModal';

const AddictionDisorders: React.FC = () => {
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
        <title>Addiction Treatment | Comprehensive Substance & Behavioral Addiction Care</title>
        <meta name="description" content="Expert treatment for substance and behavioral addictions. Learn about addiction types, recovery processes, and our evidence-based therapies. Get help today." />
        <meta name="keywords" content="addiction, substance abuse, behavioral addiction, treatment, recovery, therapy" />
      </Helmet>
      <div className="container mx-auto px-4 py-12 mt-48">
        <h1 className="text-4xl font-bold mb-8">Addiction Treatment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Understanding Addiction</h2>
            <p className="mb-4">Addiction is a complex disorder that can involve substances or behaviors. It's characterized by compulsive engagement in rewarding stimuli despite adverse consequences.</p>
            <img src="https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fcig-hand.jpg?alt=media&token=899b63b2-d2a9-438a-b8a9-511cf6fdf043"
             alt="Illustration of addiction" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Common Types of Addiction</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Alcohol addiction</li>
              <li>Drug addiction (opioids, cocaine, etc.)</li>
              <li>Gambling addiction</li>
              <li>Internet and gaming addiction</li>
              <li>Food addiction</li>
              <li>Sex and pornography addiction</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Treatment Approach</h2>
            <p className="mb-4">We offer comprehensive, individualized treatment plans for various addictions, combining evidence-based therapies to address your specific needs.</p>
            <img src="https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Ffamily-therapy.png?alt=media&token=4b0bad70-9906-4374-a653-f0459d4e840c" 
            alt="Addiction therapy session" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Detoxification support</li>
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Motivational Enhancement Therapy</li>
              <li>Group therapy and support groups</li>
              <li>Family therapy</li>
              <li>Medication-assisted treatment (when appropriate)</li>
            </ul>
            <p className="mb-4">Our experienced team of addiction specialists is committed to helping you overcome addiction, develop coping strategies, and build a fulfilling life in recovery.</p>
            <button className="bg-peach text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300" onClick={openModal}>
              Get Help Now
            </button>
          </div>
        </div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal}  />
    </>
  );
};

export default AddictionDisorders;