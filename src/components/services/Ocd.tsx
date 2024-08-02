// services/ocd-ptsd-adhd.tsx

import React from 'react';
import Helmet from "react-helmet";

const OCDPTSDandADHD: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>OCD, PTSD & ADHD Treatment | Specialized Mental Health Care</title>
        <meta name="description" content="Expert treatment for OCD, PTSD, and ADHD. Learn about symptoms, causes, and our tailored therapeutic approaches. Schedule a consultation today." />
        <meta name="keywords" content="OCD, PTSD, ADHD, treatment, therapy, mental health, anxiety disorders" />
      </Helmet>
      <div className="container mx-auto px-4 py-12 mt-12">
        <h1 className="text-4xl font-bold mb-8">OCD, PTSD & ADHD Treatment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Understanding OCD, PTSD & ADHD</h2>
            <p className="mb-4">Obsessive-Compulsive Disorder (OCD), Post-Traumatic Stress Disorder (PTSD), and Attention-Deficit/Hyperactivity Disorder (ADHD) are complex conditions that can significantly impact daily life. While distinct, these disorders often require specialized care.</p>
            <img src="/images/mental-health-illustration.jpg" alt="Illustration of mental health" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Key Characteristics</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>OCD: Intrusive thoughts and repetitive behaviors</li>
              <li>PTSD: Anxiety and flashbacks related to traumatic experiences</li>
              <li>ADHD: Difficulty with attention, hyperactivity, and impulsivity</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Treatment Approach</h2>
            <p className="mb-4">We offer comprehensive, individualized treatment plans for OCD, PTSD, and ADHD, utilizing evidence-based therapies tailored to each condition.</p>
            <img src="/images/therapy-session-specialized.jpg" alt="Specialized therapy session" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Exposure and Response Prevention (ERP) for OCD</li>
              <li>Eye Movement Desensitization and Reprocessing (EMDR) for PTSD</li>
              <li>Behavioral therapy and coaching for ADHD</li>
              <li>Medication management when appropriate</li>
              <li>Group therapy and support groups</li>
            </ul>
            <p className="mb-4">Our team of experienced mental health professionals is dedicated to helping you manage symptoms, develop coping strategies, and improve your quality of life.</p>
            <button className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OCDPTSDandADHD;