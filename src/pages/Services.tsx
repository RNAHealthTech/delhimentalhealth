import React from 'react';
import {Helmet} from 'react-helmet';
import { Link } from "react-router-dom";
import { FaBrain, FaHeartbeat, FaBed, FaUsers, FaComments } from 'react-icons/fa';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaBrain className="text-5xl text-primary mb-4" />,
      title: "Depression & Anxiety",
      description: "Expert treatment for mood and anxiety disorders.",
      link: "/services/depression-anxiety"
    },
    {
      icon: <FaHeartbeat className="text-5xl text-primary mb-4" />,
      title: "Bipolar Disorder",
      description: "Specialized care for managing bipolar illness.",
      link: "/services/bipolar-disorder"
    },
    {
      icon: <FaBrain className="text-5xl text-primary mb-4" />,
      title: "Epilepsy",
      description: "Comprehensive epilepsy and seizure management.",
      link: "/services/epilepsy"
    },
    {
      icon: <FaUsers className="text-5xl text-primary mb-4" />,
      title: "Addiction",
      description: "Support for overcoming substance and behavioral addictions.",
      link: "/services/addiction-disorders"
    },
    {
      icon: <FaBrain className="text-5xl text-primary mb-4" />,
      title: "OCD, PTSD & ADHD",
      description: "Tailored treatments for complex mental health conditions.",
      link: "/services/ocd-ptsd-adhd"
    },
    {
      icon: <FaBed className="text-5xl text-primary mb-4" />,
      title: "Sleep & Sexual Health",
      description: "Addressing sleep disorders and sexual health concerns.",
      link: "/services/sleep-sexual-health"
    },
    {
      icon: <FaUsers className="text-5xl text-primary mb-4" />,
      title: "Relationship Counseling",
      description: "Improving interpersonal relationships and communication.",
      link: "/services/relationship-counseling"
    },
    {
      icon: <FaComments className="text-5xl text-primary mb-4" />,
      title: "Psychotherapy",
      description: "Diverse therapeutic approaches for mental wellness.",
      link: "/services/psychotherapy"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Mental Health Services | Expert Care for Your Well-being</title>
        <meta name="description" content="Comprehensive mental health services including depression, anxiety, bipolar disorder, addiction treatment, and more. Expert care tailored to your needs." />
        <meta name="keywords" content="mental health, psychiatry, therapy, counseling, depression, anxiety, addiction" />
      </Helmet>
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <div className="text-center">
        {icon}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={link} className="text-primary hover:text-primary-dark transition duration-300">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Services;