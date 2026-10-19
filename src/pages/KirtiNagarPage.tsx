import React from 'react';
import SEOHelmet from '../SEOHelmet';
import { Phone, Mail, MapPin, Star, Zap, Brain } from 'lucide-react';
import OnlineModal from '../components/OnlineModal';

const KirtiNagarPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }
  return (
    <div className="page-container max-w-4xl mx-auto px-4 py-8  mt-36 mb-20">
      <SEOHelmet />
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Psychiatric Consultation in Kirti Nagar | Dr. Pratik Kumar - Consultant Psychiatrist</h1>
      <p className="text-lg mb-8">Dr. Pratik Kumar, Consultant Psychiatrist (MBBS, DNB Psychiatry), provides professional psychiatric evaluations and comprehensive mental health consultations for residents of Kirti Nagar and West Delhi.</p>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Psychiatric & Mental Health Services</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Clinical evaluations and diagnostic psychiatric assessments</li>
          <li>Medical management and monitoring for depression and mood disorders</li>
          <li>Comprehensive care for bipolar disorder and psychotic conditions</li>
          <li>Adult ADHD evaluation and behavioral support strategies</li>
          <li>Evidence-based pharmacotherapy and psychotherapy for OCD and anxiety</li>
          <li>De-addiction counseling and relapse prevention support</li>
          <li>Trauma-informed care and supportive counseling for PTSD</li>
          <li>Interpersonal counseling and stress mitigation approaches</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Clinical Background & Qualifications</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <Star className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>DNB-Qualified Psychiatrist:</strong> Holds DNB in Psychiatry from the Institute of Mental Health / Govt. Mental Hospital, Amritsar, and MBBS from JJM Medical College.</span>
          </li>
          <li className="flex items-start">
            <Zap className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>Institutional Residency Experience:</strong> Served as Senior Resident and Chief SR at IHBAS, New Delhi, gaining extensive emergency, OPD, and IPD clinical experience.</span>
          </li>
          <li className="flex items-start">
            <Brain className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>Neuropsychiatry & De-Addiction Focus:</strong> Practical clinical background in neuropsychiatry and de-addiction centers across Punjab and Delhi.</span>
          </li>
          <li className="flex items-start">
            <Star className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>Published Clinical Research:</strong> Contributed peer-reviewed medical research on OCD comorbidity, drug adherence, and psychiatric medication tolerability.</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Consultation Information for Kirti Nagar Residents</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="flex items-center mb-3"><MapPin className="text-teal-600 mr-2" /> Consultations available for Kirti Nagar residents (Main clinic: BR 3, First Floor, Shalimar Bagh, New Delhi)</p>
          <p className="flex items-center mb-3"><Phone className="text-teal-600 mr-2" /> +91 99340 35397</p>
          <p className="flex items-center"><Mail className="text-teal-600 mr-2" /> docpratikkumar@gmail.com</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Schedule a Clinical Consultation</h2>
        <p className="mb-4">Mental health concerns benefit from timely professional assessment and evidence-based clinical guidance. Consultations are conducted in a confidential, supportive clinical environment.</p>
        <button onClick={openModal} className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-300">Schedule a Consultation</button>
      </section>
      <OnlineModal isOpen2={isModalOpen} onClose2={closeModal} />
    </div>
  );
};

export default KirtiNagarPage;