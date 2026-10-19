import React from 'react';
import SEOHelmet from '../SEOHelmet';
import { Phone, Mail, MapPin } from 'lucide-react';

const ShalimarBaghPage = () => {
  return (
    <div className="page-container max-w-4xl mx-auto px-4 py-8 mt-36 mb-20">
      <SEOHelmet />
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Psychiatrist & Mental Health Clinic in Shalimar Bagh | Dr. Pratik Kumar - Consultant Psychiatrist</h1>
      <p className="text-lg mb-8">Welcome to Delhi Global Mind Clinic by Dr. Pratik Kumar, Consultant Psychiatrist (MBBS, DNB Psychiatry). Located in Shalimar Bagh, New Delhi, the clinic offers evidence-based psychiatric consultations, neuropsychiatry, and psychotherapy services in a confidential setting.</p>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Psychiatric & Mental Health Services in Shalimar Bagh</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cognitive Behavioral Therapy (CBT) and supportive therapy for depression and anxiety</li>
          <li>Psychiatric evaluation and medical management for mood disorders</li>
          <li>Stress reduction and management techniques</li>
          <li>Relationship counseling and family guidance</li>
          <li>Trauma-informed care and supportive counseling for PTSD</li>
          <li>Addiction counseling and substance de-addiction support</li>
          <li>Comprehensive treatment plans for complex psychiatric disorders</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Clinical Qualifications & Care Approach</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>DNB-qualified psychiatrist with over a decade of clinical experience in psychiatry and neuropsychiatry</li>
          <li>Evidence-based treatment approaches tailored to individual clinical evaluations</li>
          <li>Convenient and accessible clinic location in Shalimar Bagh, North West Delhi</li>
          <li>Ethical, compassionate care in a confidential and supportive clinical environment</li>
          <li>Comprehensive approach addressing both biological and psychosocial factors</li>
          <li>Clinical experience managing complex psychiatric cases and co-occurring conditions</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Clinic Location & Contact Details</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="flex items-center mb-3"><MapPin className="text-teal-600 mr-2" /> BR 3, First Floor, Shalimar Bagh, New Delhi - 110088</p>
          <p className="flex items-center mb-3"><Phone className="text-teal-600 mr-2" /> +91 99340 35397</p>
          <p className="flex items-center"><Mail className="text-teal-600 mr-2" /> docpratikkumar@gmail.com</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Schedule a Consultation in Shalimar Bagh</h2>
        <p className="mb-4">If you or a loved one are experiencing emotional or psychiatric distress, professional medical consultation is available at Delhi Global Mind Clinic in Shalimar Bagh.</p>
        <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-300" onClick={() => window.location.href = '/contact'}>Schedule a Consultation</button>
      </section>
    </div>
  );
};

export default ShalimarBaghPage;