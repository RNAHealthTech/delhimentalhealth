import React, {useState} from 'react';
import SEOHelmet from '../SEOHelmet';
import { Phone, Mail, MapPin, Award, BookOpen, Users } from 'lucide-react';
import OnlineModal from '../components/OnlineModal';

const AdarshNagarPage = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="page-container max-w-4xl mx-auto px-4 py-8  mt-36 mb-20">
      <SEOHelmet />
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Psychiatric & Mental Health Consultation in Adarsh Nagar | Dr. Pratik Kumar - Consultant Psychiatrist</h1>
      <p className="text-lg mb-8">Dr. Pratik Kumar, Consultant Psychiatrist (MBBS, DNB Psychiatry), offers comprehensive psychiatric consultations for residents of Adarsh Nagar and surrounding areas. Providing evidence-based assessment and personalized care for emotional, behavioral, and psychological concerns.</p>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Psychiatric & Mental Health Services for Adarsh Nagar</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cognitive Behavioral Therapy (CBT) and supportive psychotherapy for depression, anxiety, and OCD</li>
          <li>Comprehensive psychiatric evaluations and diagnostic assessments</li>
          <li>Evidence-based medical management for mood and anxiety disorders</li>
          <li>De-addiction support and behavioral dependency interventions</li>
          <li>Stress management techniques and burnout mitigation</li>
          <li>Neuropsychiatric assessments and cognitive support</li>
          <li>Adult ADHD assessment and behavioral guidance</li>
          <li>Integrative care for co-occurring medical and psychiatric conditions</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Clinical Qualifications & Background</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <Award className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>DNB-Qualified Psychiatrist:</strong> Holds DNB in Psychiatry (National Board of Examinations) and MBBS (JJM Medical College).</span>
          </li>
          <li className="flex items-start">
            <BookOpen className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>Clinical Research & Publications:</strong> Author of peer-reviewed clinical research on OCD comorbidity, drug adherence, and psychopharmacology.</span>
          </li>
          <li className="flex items-start">
            <Users className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>Institutional Clinical Experience:</strong> Over a decade of clinical experience, including Senior Residency at IHBAS, New Delhi.</span>
          </li>
          <li className="flex items-start">
            <Award className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>Community Mental Health Services:</strong> Experience in the District Mental Health Program (DMHP) and Mobile Mental Health Units in Delhi.</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Consultation Details for Adarsh Nagar Residents</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="flex items-center mb-3"><MapPin className="text-teal-600 mr-2" /> Consultations available for Adarsh Nagar residents (Primary clinic: BR 3, First Floor, Shalimar Bagh, New Delhi)</p>
          <p className="flex items-center mb-3"><Phone className="text-teal-600 mr-2" /> +91 99340 35397</p>
          <p className="flex items-center"><Mail className="text-teal-600 mr-2" /> docpratikkumar@gmail.com</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Access Professional Mental Health Support</h2>
        <p className="mb-4">Professional evaluation is a key step toward emotional well-being and psychological recovery. Dr. Pratik Kumar provides compassionate, confidential psychiatric care tailored to each individual's clinical needs.</p>
        <button onClick={openModal} className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-300">Schedule a Consultation</button>
      </section>
      <OnlineModal isOpen2={isModalOpen} onClose2={closeModal} />
    </div>
  );
};

export default AdarshNagarPage;