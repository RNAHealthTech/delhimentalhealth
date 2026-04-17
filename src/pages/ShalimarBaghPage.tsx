import React from 'react';
import SEOHelmet from '../SEOHelmet';
import { Phone, Mail, MapPin } from 'lucide-react';

const ShalimarBaghPage = () => {
  return (
    <div className="page-container max-w-4xl mx-auto px-4 py-8 mt-36 mb-20">
      <SEOHelmet />
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Top Psychologist in Shalimar Bagh | Dr. Pratik Kumar - Mental Health Expert</h1>
      <p className="text-lg mb-8">Welcome to Dr. Pratik Kumar's practice, your premier destination for expert mental health care in Shalimar Bagh, Delhi. Experience compassionate and evidence-based treatments for a range of psychological issues.</p>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Expert Mental Health Services in Shalimar Bagh</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cognitive Behavioral Therapy (CBT) for depression and anxiety</li>
          <li>Stress reduction and management techniques</li>
          <li>Relationship counseling and family therapy</li>
          <li>Trauma-informed care and PTSD treatment</li>
          <li>Addiction counseling and recovery support</li>
          <li>Personalized treatment plans for complex mental health disorders</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Choose Dr. Pratik Kumar in Shalimar Bagh?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Board-certified psychologist with extensive experience in treating mental health conditions</li>
          <li>Evidence-based treatment approaches tailored to individual needs</li>
          <li>Convenient and accessible location in Shalimar Bagh, Delhi</li>
          <li>Compassionate care in a confidential and supportive environment</li>
          <li>Holistic approach addressing both mental and emotional well-being</li>
          <li>Expertise in managing complex cases and co-occurring disorders</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Contact Dr. Pratik Kumar - Your Trusted Shalimar Bagh Psychologist</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="flex items-center mb-3"><MapPin className="text-teal-600 mr-2" /> Ever Bake Market, Shop No. F1, First Floor, BN Block, Local Shopping Centre, West Shalimar Bagh, New Delhi-88</p>
          <p className="flex items-center mb-3"><Phone className="text-teal-600 mr-2" /> +91 99340 35397</p>
          <p className="flex items-center"><Mail className="text-teal-600 mr-2" /> docpratikkumar@gmail.com</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Take the First Step Towards Better Mental Health</h2>
        <p className="mb-4">Don't let mental health challenges hold you back. Reach out to Dr. Pratik Kumar today to schedule your consultation in Shalimar Bagh and start your journey towards improved well-being and quality of life.</p>
        <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-300">Book Your Appointment Now</button>
      </section>
    </div>
  );
};

export default ShalimarBaghPage;