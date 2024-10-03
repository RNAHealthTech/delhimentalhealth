import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const seoContent: { [key: string]: { title: string; description: string; keywords: string } } = {
    '/': {
        title: "Dr. Pratik Kumar - Expert Psychologist & Psychiatrist in Delhi NCR | Mental Health Specialist",
        description: "Dr. Pratik Kumar, leading psychologist and psychiatrist in Delhi NCR, specializes in mental health disorders. Compassionate care with advanced treatments. Book your consultation today.",
        keywords: "psychologist Delhi NCR, psychiatrist Delhi, mental health specialist, Dr. Pratik Kumar, depression treatment, anxiety disorders"
    },
    '/top-psychologist-in-shalimar-bagh': {
        title: "Top Psychologist in Shalimar Bagh | Dr. Pratik Kumar - Mental Health Expert",
        description: "Seeking a psychologist in Shalimar Bagh? Dr. Pratik Kumar offers expert care for mental health conditions. Personalized approach with evidence-based treatments.",
        keywords: "psychologist Shalimar Bagh, mental health treatment, psychiatrist near me, Dr. Pratik Kumar, cognitive behavioral therapy"
    },
    '/expert-psychiatrist-in-ashok-vihar': {
        title: "Expert Psychiatrist in Ashok Vihar - Dr. Pratik Kumar",
        description: "Dr. Pratik Kumar brings world-class psychiatric care to Ashok Vihar. Specializing in mood disorders, anxiety, and addiction treatment. Schedule your visit now.",
        keywords: "psychiatrist Ashok Vihar, depression treatment, anxiety specialist, Dr. Pratik Kumar, addiction counseling"
    },
    '/best-mental-health-specialist-patel-nagar': {
        title: "Best Mental Health Specialist in Patel Nagar | Dr. Pratik Kumar",
        description: "Residents of Patel Nagar, access top-tier mental health treatments with Dr. Pratik Kumar. Specialized care for stress, relationship issues, and psychiatric disorders.",
        keywords: "mental health specialist Patel Nagar, stress management, relationship counseling, Dr. Pratik Kumar, psychiatric care"
    },
    '/leading-psychologist-in-adarsh-nagar': {
        title: "Leading Psychologist for Adarsh Nagar | Dr. Pratik Kumar",
        description: "Dr. Pratik Kumar offers advanced psychological solutions to Adarsh Nagar. Expert in treating complex mental health disorders. Consult today for personalized care.",
        keywords: "psychologist Adarsh Nagar, mental health counseling, psychiatrist Adarsh Nagar, Dr. Pratik Kumar, behavioral therapy"
    },
    '/best-psychiatrist-in-kirti-nagar': {
        title: "Best Psychiatrist in Kirti Nagar - Dr. Pratik Kumar",
        description: "Trust Dr. Pratik Kumar for exceptional psychiatric care in Kirti Nagar. Specializing in comprehensive mental health evaluations and treatment plans.",
        keywords: "psychiatrist Kirti Nagar, mental health assessment, psychotherapy, Dr. Pratik Kumar, medication management"
    },
    '/top-psychologist-in-delhi-ncr': {
        title: "Top Psychologist in Delhi NCR - Dr. Pratik Kumar | Comprehensive Mental Health Care",
        description: "Dr. Pratik Kumar: Your trusted psychologist and psychiatrist in Delhi NCR. Expertise in depression, anxiety, addiction, and more. Evidence-based treatments tailored to your needs.",
        keywords: "top psychologist Delhi NCR, best psychiatrist Delhi, mental health expert, Dr. Pratik Kumar, depression treatment Delhi, anxiety therapy NCR"
    }
};

const SEOHelmet: React.FC = () => {
    const location = useLocation();
    const { title, description, keywords } = seoContent[location.pathname] || seoContent['/'];

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://delhimentalhealth.com" />
            <meta property="og:location" content="Delhi NCR, Shalimar Bagh, North Delhi, West Delhi, Kirti Nagar, Adarsh Nagar, Patel Nagar, Ashok Vihar" />
        </Helmet>
    );
};

export default SEOHelmet;