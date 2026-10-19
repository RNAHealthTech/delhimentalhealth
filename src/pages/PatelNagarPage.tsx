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
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Psychiatric & Mental Health Consultation in Patel Nagar | Dr. Pratik Kumar - Consultant Psychiatrist</h1>
      <p className="text-lg mb-8">Dr. Pratik Kumar, Consultant Psychiatrist (MBBS, DNB Psychiatry), provides evidence-based psychiatric consultations and mental health evaluations for residents of Patel Nagar and surrounding areas of Delhi.</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Mental Health & Psychiatric Services</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Stress management and structured coping strategies</li>
          <li>Depression and anxiety treatment (CBT, mindfulness-based approaches)</li>
          <li>Relationship counseling and family guidance</li>
          <li>Trauma-informed care and supportive counseling for PTSD</li>
          <li>Psychiatric evaluations and medical management</li>
          <li>Addiction counseling and recovery support</li>
          <li>Mood disorders and personality issues management</li>
          <li>Work-related stress and burnout management</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Clinical Approach & Qualifications</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Medical qualification in Psychiatry (DNB Psychiatry, MBBS) with psychotherapy integration</li>
          <li>Comprehensive approach addressing biological, psychological, and social factors</li>
          <li>Evidence-based medical treatments tailored to individual clinical evaluations</li>
          <li>Over a decade of experience across OPD, IPD, and specialized tertiary psychiatric care</li>
          <li>Commitment to patient education, ethical standards, and confidentiality</li>
          <li>Holistic care focusing on emotional well-being and daily functioning</li>
          <li>Accessible psychiatric care for residents of Patel Nagar and West Delhi</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Consultation Details for Patel Nagar Residents</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="flex items-center mb-3"><MapPin className="text-teal-600 mr-2" /> Consultations available for Patel Nagar residents (Main clinic: BR 3, First Floor, Shalimar Bagh, New Delhi)</p>
          <p className="flex items-center mb-3"><Phone className="text-teal-600 mr-2" /> +91 99340 35397</p>
          <p className="flex items-center"><Mail className="text-teal-600 mr-2" /> docpratikkumar@gmail.com</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Access Mental Health Consultation</h2>
        <p className="mb-4">Taking the initiative to consult a medical professional is an important step in addressing psychiatric or emotional health concerns. Consultations are conducted with complete confidentiality.</p>
        <button onClick={openModal} className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-300">Schedule a Consultation</button>
      </section>
      <OnlineModal isOpen2={isModalOpen} onClose2={closeModal} />
    </div>
  );
};

export default PatelNagarPage;