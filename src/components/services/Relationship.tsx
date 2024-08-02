
import React from 'react';
import Helmet from "react-helmet";

const RelationshipCounseling: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Relationship Counseling | Improving Communication and Connection</title>
        <meta name="description" content="Expert relationship counseling to enhance communication, resolve conflicts, and strengthen bonds. Learn about our approach to couples therapy and family counseling." />
        <meta name="keywords" content="relationship counseling, couples therapy, marriage counseling, family therapy, communication skills" />
      </Helmet>
      <div className="container mx-auto px-4 py-12 mt-12">
        <h1 className="text-4xl font-bold mb-8">Relationship Counseling</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Understanding Relationship Counseling</h2>
            <p className="mb-4">Relationship counseling helps couples and families improve communication, resolve conflicts, and strengthen their emotional connections. It can benefit relationships at any stage, from new couples to long-term partnerships facing challenges.</p>
            <img src="/images/couple-therapy.jpg" alt="Couple in therapy" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Common Relationship Issues</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Communication breakdown</li>
              <li>Trust issues and infidelity</li>
              <li>Conflict resolution difficulties</li>
              <li>Intimacy and sexual concerns</li>
              <li>Parenting disagreements</li>
              <li>Life transitions and stress</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Counseling Approach</h2>
            <p className="mb-4">We offer compassionate and effective relationship counseling, tailored to the unique needs of each couple or family. Our approach focuses on enhancing communication, fostering understanding, and developing practical skills for healthier relationships.</p>
            <img src="/images/family-therapy.jpg" alt="Family therapy session" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Services Include:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Couples therapy</li>
              <li>Premarital counseling</li>
              <li>Family therapy</li>
              <li>Communication skills training</li>
              <li>Conflict resolution techniques</li>
              <li>Intimacy and sex therapy</li>
            </ul>
            <p className="mb-4">Our experienced relationship counselors are dedicated to helping you build stronger, more fulfilling relationships. We provide a safe, non-judgmental space to explore challenges and work towards positive change.</p>
            <button className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300">
              Start Counseling
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelationshipCounseling;