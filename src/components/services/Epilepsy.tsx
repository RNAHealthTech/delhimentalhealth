// pages/services/epilepsy.tsx
import React, {useEffect} from 'react';
import Helmet from "react-helmet";

const Epilepsy: React.FC = () => {
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Epilepsy Treatment | Comprehensive Seizure Management</title>
        <meta name="description" content="Expert epilepsy and seizure management. Learn about diagnosis, treatment options, and our patient-centered approach. Schedule a consultation today." />
        <meta name="keywords" content="epilepsy, seizures, neurology, treatment, management" />
      </Helmet>
      <div className="container mx-auto px-4 py-12 mt-48">
        <h1 className="text-4xl font-bold mb-8">Epilepsy Treatment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Understanding Epilepsy</h2>
            <p className="mb-4">Epilepsy is a neurological disorder characterized by recurrent seizures. These seizures are caused by sudden, abnormal electrical activity in the brain.</p>
            <img src="/images/epilepsy.png" alt="Illustration of epilepsy" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Common Symptoms</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Temporary confusion</li>
              <li>Staring spells</li>
              <li>Uncontrollable jerking movements of the arms and legs</li>
              <li>Loss of consciousness or awareness</li>
              <li>Psychological symptoms such as fear, anxiety or deja vu</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Treatment Approach</h2>
            <p className="mb-4">We offer comprehensive epilepsy and seizure management, tailored to each patient's unique needs and type of epilepsy.</p>
            <img src="/images/therapy.png" alt="Epilepsy treatment" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Detailed neurological evaluations</li>
              <li>EEG monitoring and interpretation</li>
              <li>Medication management</li>
              <li>Dietary therapies (e.g., ketogenic diet)</li>
              <li>Surgical evaluations and interventions</li>
              <li>Vagus nerve stimulation therapy</li>
              <li>Patient and family education</li>
            </ul>
            <p className="mb-4">Our team of neurologists and epilepsy specialists is committed to helping you achieve better seizure control and improve your quality of life.</p>
            <button className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Epilepsy;