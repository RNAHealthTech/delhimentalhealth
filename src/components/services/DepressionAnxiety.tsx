import React, {useState,useEffect} from 'react';
import Helmet from "react-helmet";
import AppointmentModal from '../AppointmentModal';

const DepressionAnxiety: React.FC = () => {
   
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
        <title>Depression & Anxiety Treatment | Expert Mental Health Care</title>
        <meta name="description" content="Comprehensive treatment for depression and anxiety disorders. Learn about symptoms, causes, and evidence-based therapies. Schedule a consultation today." />
        <meta name="keywords" content="depression, anxiety, treatment, therapy, mental health, mood disorders" />
      </Helmet>
      <div className="container mx-auto px-4 py-12 mt-48">
        <h1 className="text-4xl font-bold mb-8">Depression & Anxiety Treatment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Understanding Depression & Anxiety</h2>
            <p className="mb-4">Depression and anxiety are common mental health conditions that can significantly impact a person's quality of life. While they are distinct disorders, they often occur together and share some similar symptoms.</p>
            <img src="/images/depression.jpg" alt="Illustration of depression" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Common Symptoms</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Persistent sad, anxious, or "empty" mood</li>
              <li>Feelings of hopelessness or pessimism</li>
              <li>Irritability</li>
              <li>Fatigue and decreased energy</li>
              <li>Difficulty concentrating or making decisions</li>
              <li>Sleep disturbances</li>
              <li>Appetite and weight changes</li>
              <li>Physical symptoms like headaches or digestive issues</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Treatment Approach</h2>
            <p className="mb-4">We offer comprehensive, personalized treatment plans for depression and anxiety, combining evidence-based therapies to address your unique needs.</p>
            <img src="/images/therapy.jpg" alt="Therapy session" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Medication management</li>
              <li>Mindfulness and relaxation techniques</li>
              <li>Group therapy sessions</li>
              <li>Lifestyle counseling</li>
            </ul>
            <p className="mb-4">Our experienced team of mental health professionals is dedicated to helping you overcome depression and anxiety, improve your quality of life, and develop coping strategies for long-term well-being.</p>
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

export default DepressionAnxiety;