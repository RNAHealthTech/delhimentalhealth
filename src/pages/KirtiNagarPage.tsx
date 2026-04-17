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
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Leading Psychiatrist in Kirti Nagar | Dr. Pratik Kumar - Premier Mental Health Expert</h1>
      <p className="text-lg mb-8">Dr. Pratik Kumar, ranked among Delhi's top psychiatrists, now offers his exceptional expertise to Kirti Nagar. Experience world-class psychiatric care from a nationally recognized mental health authority.</p>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">State-of-the-Art Psychiatric Services in Kirti Nagar</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Precision psychiatry using advanced genetic testing for personalized medication plans</li>
          <li>Innovative treatment for treatment-resistant depression, including TMS and ketamine therapy</li>
          <li>Cutting-edge interventions for bipolar disorder and schizophrenia</li>
          <li>Specialized care for high-functioning autism and adult ADHD</li>
          <li>Advanced psychopharmacology for anxiety disorders and OCD</li>
          <li>Integrated treatment for dual diagnosis and complex cases</li>
          <li>Pioneering interventions for PTSD and complex trauma</li>
          <li>Evidence-based approaches to addiction and substance use disorders</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Dr. Pratik Kumar is Kirti Nagar's Premier Psychiatrist</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <Star className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>Top-Ranked Expertise:</strong> Consistently rated among Delhi's top 5 psychiatrists by peer reviews and patient outcomes</span>
          </li>
          <li className="flex items-start">
            <Zap className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>Innovative Treatments:</strong> Pioneed several groundbreaking treatments now adopted nationwide</span>
          </li>
          <li className="flex items-start">
            <Brain className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>Neuropsychiatric Specialist:</strong> Dual board-certification in Psychiatry and Neuropsychiatry</span>
          </li>
          <li className="flex items-start">
            <Star className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>Research Leader:</strong> Principal investigator in multiple clinical trials, advancing the field of psychiatry</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Consult with Delhi's Top Psychiatrist - Dr. Pratik Kumar in Kirti Nagar</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="flex items-center mb-3"><MapPin className="text-teal-600 mr-2" /> Premium consultations available in Kirti Nagar (Main clinic: Shalimar Bagh)</p>
          <p className="flex items-center mb-3"><Phone className="text-teal-600 mr-2" /> +91 99340 35397</p>
          <p className="flex items-center"><Mail className="text-teal-600 mr-2" /> docpratikkumar@gmail.com</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Embark on Your Journey to Optimal Mental Health</h2>
        <p className="mb-4">Choose excellence in psychiatric care. Dr. Pratik Kumar's patients report a 92% improvement rate and significantly enhanced quality of life. Your mental health deserves the best – schedule your consultation today.</p>
        <button onClick={openModal} className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-300">Book Your Premium Consultation Now</button>
      </section>
      <OnlineModal isOpen2={isModalOpen} onClose2={closeModal} />
    </div>
  );
};

export default KirtiNagarPage;