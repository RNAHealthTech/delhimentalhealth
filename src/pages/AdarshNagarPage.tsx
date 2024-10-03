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
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Top-Ranked Psychologist in Adarsh Nagar | Dr. Pratik Kumar - Elite Mental Health Care</h1>
      <p className="text-lg mb-8">Dr. Pratik Kumar, recognized as one of Delhi's premier psychologists, brings his award-winning expertise to Adarsh Nagar. Experience unparalleled mental health care from a nationally acclaimed specialist.</p>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Cutting-Edge Psychological Services in Adarsh Nagar</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Advanced Cognitive Behavioral Therapy (CBT) for depression, anxiety, and OCD</li>
          <li>Pioneering trauma treatment using EMDR and Somatic Experiencing</li>
          <li>Innovative couples therapy with Emotionally Focused Therapy (EFT)</li>
          <li>Mindfulness-Based Stress Reduction (MBSR) for chronic stress and pain</li>
          <li>Cutting-edge neuropsychological assessments and interventions</li>
          <li>Specialized treatment for high-functioning autism and ADHD in adults</li>
          <li>Evidence-based interventions for eating disorders and body image issues</li>
          <li>Integrative approach to treating co-occurring disorders</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Dr. Pratik Kumar is Adarsh Nagar's Top-Ranked Psychologist</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <Award className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>Award-Winning Expertise:</strong> Recipient of the National Mental Health Excellence Award for pioneering treatments</span>
          </li>
          <li className="flex items-start">
            <BookOpen className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>Published Authority:</strong> Author of bestselling books on mental health, regularly featured in national publications</span>
          </li>
          <li className="flex items-start">
            <Users className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>Extensive Experience:</strong> Over 15 years of clinical experience, treating 10,000+ patients successfully</span>
          </li>
          <li className="flex items-start">
            <Award className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
            <span><strong>Advanced Certifications:</strong> Holds specialized certifications in CBT, EMDR, and Neuropsychology</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Contact Delhi's Top Psychologist - Dr. Pratik Kumar in Adarsh Nagar</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="flex items-center mb-3"><MapPin className="text-teal-600 mr-2" /> Elite consultations available in Adarsh Nagar (Primary clinic: Shalimar Bagh)</p>
          <p className="flex items-center mb-3"><Phone className="text-teal-600 mr-2" /> 9023997854 / 9877065403</p>
          <p className="flex items-center"><Mail className="text-teal-600 mr-2" /> docpratikkumar@gmail.com</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Experience Transformative Mental Health Care</h2>
        <p className="mb-4">Elevate your mental well-being with Delhi's most sought-after psychologist. Dr. Pratik Kumar's patients report a 95% satisfaction rate and significant life improvements. Don't settle for less when it comes to your mental health.</p>
        <button onClick={openModal} className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-300">Schedule Your Elite Consultation Now</button>
      </section>
      <OnlineModal isOpen2={isModalOpen} onClose2={closeModal} />
    </div>
  );
};

export default AdarshNagarPage;