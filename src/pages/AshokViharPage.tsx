import React, {useState} from 'react';
import SEOHelmet from '../SEOHelmet';
import { Phone, Mail, MapPin } from 'lucide-react';
import OnlineModal from '../components/OnlineModal';

const AshokViharPage = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="page-container max-w-4xl mx-auto px-4 py-8 mt-36 mb-20">
      <SEOHelmet />
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Expert Psychiatrist in Ashok Vihar - Dr. Pratik Kumar | Mental Health Specialist</h1>
      <p className="text-lg mb-8">Dr. Pratik Kumar brings world-class psychiatric care to Ashok Vihar, Delhi. Trust in his expertise for comprehensive mental health treatment and personalized care for various psychological disorders.</p>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Specialized Psychiatric Services in Ashok Vihar</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Comprehensive psychiatric evaluations and diagnosis</li>
          <li>Mood disorders treatment (depression, bipolar disorder)</li>
          <li>Anxiety disorders management (GAD, panic disorder, OCD)</li>
          <li>Addiction counseling and substance abuse treatment</li>
          <li>Schizophrenia and psychotic disorders care</li>
          <li>Medication management and monitoring</li>
          <li>Integrated psychotherapy approaches</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Choose Dr. Pratik Kumar as Your Ashok Vihar Psychiatrist?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Board-certified psychiatrist with years of clinical experience</li>
          <li>Expertise in treating complex and co-occurring mental health disorders</li>
          <li>Evidence-based treatment methodologies tailored to individual needs</li>
          <li>Holistic approach combining medication and psychotherapy</li>
          <li>Commitment to patient education and empowerment</li>
          <li>Confidential and supportive treatment environment</li>
          <li>Convenient location serving Ashok Vihar and surrounding areas</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Contact Dr. Pratik Kumar - Your Trusted Ashok Vihar Psychiatrist</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="flex items-center mb-3"><MapPin className="text-teal-600 mr-2" /> Consultation available in Ashok Vihar (Main clinic: Shalimar Bagh)</p>
          <p className="flex items-center mb-3"><Phone className="text-teal-600 mr-2" /> 9023997854 / 9877065403</p>
          <p className="flex items-center"><Mail className="text-teal-600 mr-2" /> docpratikkumar@gmail.com</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Take the First Step Towards Mental Wellness</h2>
        <p className="mb-4">Don't let mental health challenges control your life. Reach out to Dr. Pratik Kumar today to schedule your psychiatric consultation in Ashok Vihar and embark on your journey to improved mental health and well-being.</p>
        <button onClick={openModal} className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-300">Schedule Your Consultation Now</button>
      </section>
    <OnlineModal isOpen2={isModalOpen} onClose2={closeModal} />
    </div>
    
  );
};

export default AshokViharPage;