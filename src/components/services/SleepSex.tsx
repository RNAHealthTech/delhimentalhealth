import React, { useState, useEffect } from 'react';
import Helmet from "react-helmet";
import AppointmentModal from '../AppointmentModal';

const SleepAndSexualHealth: React.FC = () => {

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
        <title>Sleep & Sexual Health Treatment | Comprehensive Care for Well-being</title>
        <meta name="description" content="Expert treatment for sleep disorders and sexual health concerns. Learn about common issues, therapeutic approaches, and how to improve your overall well-being." />
        <meta name="keywords" content="sleep disorders, sexual health, insomnia, sleep apnea, sexual dysfunction, therapy" />
      </Helmet>
      <div className="container mx-auto px-4 py-12 mt-12">
        <h1 className="text-4xl font-bold mb-8">Sleep & Sexual Health Treatment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Understanding Sleep & Sexual Health</h2>
            <p className="mb-4">Sleep disorders and sexual health issues can significantly impact overall well-being and quality of life. These concerns are often interconnected and may be influenced by physical, psychological, and environmental factors.</p>
            <img src="/images/pornaddiction.png" alt="Illustration of sleep" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Common Concerns</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Insomnia and sleep disturbances</li>
              <li>Sleep apnea</li>
              <li>Circadian rhythm disorders</li>
              <li>Sexual desire discrepancies</li>
              <li>Erectile dysfunction</li>
              <li>Sexual pain disorders</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Treatment Approach</h2>
            <p className="mb-4">We offer comprehensive, personalized treatment plans for sleep disorders and sexual health concerns, combining evidence-based therapies to address your unique needs.</p>
            <img src="/images/therapy.jpg" alt="Sleep clinic" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Sleep studies and assessments</li>
              <li>Cognitive Behavioral Therapy for Insomnia (CBT-I)</li>
              <li>CPAP therapy for sleep apnea</li>
              <li>Sexual health counseling</li>
              <li>Couples therapy for sexual concerns</li>
              <li>Medication management when appropriate</li>
            </ul>
            <p className="mb-4">Our experienced team of sleep specialists and sex therapists is dedicated to helping you improve your sleep quality and sexual well-being, enhancing your overall health and relationships.</p>
            <button className="bg-peach text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300" onClick={openModal}>
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal}  />
    </>
  );
};

export default SleepAndSexualHealth;