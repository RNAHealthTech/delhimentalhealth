import React from 'react';
import SEOHelmet from '../SEOHelmet';
import { Phone, Mail, MapPin } from 'lucide-react';
import OnlineModal from '../components/OnlineModal';

const PatelNagarPage = () => {

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);


  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="page-container max-w-4xl mx-auto px-4 py-8 mt-36 mb-20">
      <SEOHelmet />
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Best Mental Health Specialist in Patel Nagar | Dr. Pratik Kumar - Psychologist & Psychiatrist</h1>
      <p className="text-lg mb-8">Dr. Pratik Kumar offers top-tier mental health treatments to residents of Patel Nagar, Delhi. Experience specialized care for various psychological and psychiatric needs, delivered with compassion and expertise.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Comprehensive Mental Health Services in Patel Nagar</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Stress management and resilience building techniques</li>
          <li>Depression and anxiety treatment (CBT, mindfulness-based approaches)</li>
          <li>Relationship counseling and family therapy</li>
          <li>Trauma-informed care and PTSD treatment</li>
          <li>Psychiatric evaluations and medication management</li>
          <li>Addiction counseling and recovery support</li>
          <li>Personality disorders treatment</li>
          <li>Work-related stress and burnout management</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Choose Dr. Pratik Kumar as Your Mental Health Specialist in Patel Nagar?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dual expertise as both a psychologist and psychiatrist</li>
          <li>Comprehensive approach addressing both psychological and biological factors</li>
          <li>Evidence-based treatments tailored to individual needs</li>
          <li>Years of experience in treating complex mental health issues</li>
          <li>Commitment to ongoing patient education and support</li>
          <li>Holistic care focusing on overall well-being and quality of life</li>
          <li>Convenient access to quality mental health care in Patel Nagar</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Contact Dr. Pratik Kumar - Your Trusted Patel Nagar Mental Health Specialist</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="flex items-center mb-3"><MapPin className="text-teal-600 mr-2" /> Consultation available in Patel Nagar (Main clinic: Shalimar Bagh)</p>
          <p className="flex items-center mb-3"><Phone className="text-teal-600 mr-2" /> 9023997854 / 9877065403</p>
          <p className="flex items-center"><Mail className="text-teal-600 mr-2" /> docpratikkumar@gmail.com</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Start Your Journey to Better Mental Health Today</h2>
        <p className="mb-4">Don't let mental health challenges hold you back. Reach out to Dr. Pratik Kumar, the leading mental health specialist in Patel Nagar, to schedule your consultation and take the first step towards a healthier, happier you.</p>
        <button onClick={openModal} className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-300">Book Your Appointment Now</button>
      </section>
      <OnlineModal isOpen2={isModalOpen} onClose2={closeModal} />
    </div>
  );
};

export default PatelNagarPage;