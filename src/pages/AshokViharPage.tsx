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
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Psychiatric Consultation in Ashok Vihar - Dr. Pratik Kumar | Consultant Psychiatrist</h1>
      <p className="text-lg mb-8">Dr. Pratik Kumar, Consultant Psychiatrist (MBBS, DNB Psychiatry), provides evidence-based psychiatric consultations and personalized mental healthcare for residents of Ashok Vihar and surrounding North West Delhi areas.</p>
      
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
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Clinical Background & Care Approach</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>DNB-qualified psychiatrist with over a decade of clinical experience</li>
          <li>Experience managing complex and co-occurring mental health conditions</li>
          <li>Evidence-based treatment methodologies tailored to individual needs</li>
          <li>Integrated care combining medication and supportive psychotherapy</li>
          <li>Commitment to patient education, autonomy, and confidentiality</li>
          <li>Confidential and supportive clinical environment</li>
          <li>Convenient location serving Ashok Vihar and surrounding areas</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Contact Information for Ashok Vihar Residents</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="flex items-center mb-3"><MapPin className="text-teal-600 mr-2" /> Consultations available for Ashok Vihar residents (Main clinic: BR 3, First Floor, Shalimar Bagh, New Delhi)</p>
          <p className="flex items-center mb-3"><Phone className="text-teal-600 mr-2" /> +91 99340 35397</p>
          <p className="flex items-center"><Mail className="text-teal-600 mr-2" /> docpratikkumar@gmail.com</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Access Professional Psychiatric Care</h2>
        <p className="mb-4">Timely psychiatric evaluation supports emotional stabilization and recovery. Dr. Pratik Kumar offers comprehensive clinical consultations in a confidential and supportive setting.</p>
        <button onClick={openModal} className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-300">Schedule a Consultation</button>
      </section>
    <OnlineModal isOpen2={isModalOpen} onClose2={closeModal} />
    </div>
    
  );
};

export default AshokViharPage;