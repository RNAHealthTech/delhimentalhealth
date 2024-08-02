import React from 'react';
import Helmet from "react-helmet";

const BipolarDisorder: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Bipolar Disorder Treatment | Specialized Mental Health Care</title>
        <meta name="description" content="Expert treatment for bipolar disorder. Learn about symptoms, management strategies, and our comprehensive care approach. Schedule a consultation today." />
        <meta name="keywords" content="bipolar disorder, mood disorders, mental health, treatment, therapy" />
      </Helmet>
      <div className="container mx-auto px-4 py-12 mt-12">
        <h1 className="text-4xl font-bold mb-8">Bipolar Disorder Treatment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Understanding Bipolar Disorder</h2>
            <p className="mb-4">Bipolar disorder is a complex mental health condition characterized by extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).</p>
            <img src="/images/bipolar-illustration.jpg" alt="Illustration of bipolar disorder" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Common Symptoms</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Manic episodes: Increased energy, reduced need for sleep, impulsivity</li>
              <li>Depressive episodes: Feelings of hopelessness, loss of interest, fatigue</li>
              <li>Mood swings and irritability</li>
              <li>Difficulty concentrating</li>
              <li>Changes in sleep patterns</li>
              <li>Risky behaviors during manic phases</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Treatment Approach</h2>
            <p className="mb-4">We offer specialized care for managing bipolar disorder, focusing on stabilizing mood and improving overall quality of life.</p>
            <img src="/images/bipolar-treatment.jpg" alt="Bipolar disorder treatment" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Medication management (mood stabilizers, antipsychotics)</li>
              <li>Psychotherapy (Cognitive Behavioral Therapy, Interpersonal Therapy)</li>
              <li>Psychoeducation for patients and families</li>
              <li>Lifestyle management strategies</li>
              <li>Support groups</li>
            </ul>
            <p className="mb-4">Our experienced team of mental health professionals is dedicated to helping you manage bipolar disorder effectively and lead a balanced, fulfilling life.</p>
            <button className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BipolarDisorder;