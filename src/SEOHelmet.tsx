import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

interface SEOData {
    title: string;
    description: string;
    keywords: string;
    type?: string;
    serviceName?: string;
    areaName?: string;
}

const seoContent: { [key: string]: SEOData } = {
    '/': {
        title: "Dr. Pratik Kumar - Consultant Psychiatrist in Delhi NCR | Delhi Global Mind Clinic",
        description: "Dr. Pratik Kumar, Consultant Psychiatrist (MBBS, DNB Psychiatry) in Delhi NCR, offers evidence-based psychiatric evaluations, neuropsychiatry, and psychotherapy services.",
        keywords: "psychiatrist Delhi NCR, psychiatric clinic Shalimar Bagh, mental health consultation, Dr. Pratik Kumar, depression treatment, anxiety disorders",
        type: "WebPage"
    },
    '/top-psychologist-in-shalimar-bagh': {
        title: "Psychiatrist & Mental Health Clinic in Shalimar Bagh | Dr. Pratik Kumar",
        description: "Looking for psychiatric care in Shalimar Bagh? Dr. Pratik Kumar offers clinical evaluation and evidence-based treatments for mental health conditions.",
        keywords: "psychiatrist Shalimar Bagh, mental health treatment Shalimar Bagh, Dr. Pratik Kumar, cognitive behavioral therapy, psychiatric clinic Delhi",
        areaName: "Shalimar Bagh, North West Delhi",
        type: "MedicalWebPage"
    },
    '/expert-psychiatrist-in-ashok-vihar': {
        title: "Psychiatric Consultation in Ashok Vihar - Dr. Pratik Kumar",
        description: "Dr. Pratik Kumar provides evidence-based psychiatric consultations for Ashok Vihar residents, covering mood disorders, anxiety, and de-addiction care.",
        keywords: "psychiatrist Ashok Vihar, depression treatment, anxiety specialist, Dr. Pratik Kumar, addiction counseling",
        areaName: "Ashok Vihar, North West Delhi",
        type: "MedicalWebPage"
    },
    '/best-mental-health-specialist-patel-nagar': {
        title: "Psychiatric & Mental Health Care in Patel Nagar | Dr. Pratik Kumar",
        description: "Residents of Patel Nagar, access comprehensive psychiatric and mental health consultations with Dr. Pratik Kumar for stress, anxiety, and mood disorders.",
        keywords: "psychiatrist Patel Nagar, mental health consultation Patel Nagar, stress management, relationship counseling, Dr. Pratik Kumar, psychiatric care",
        areaName: "Patel Nagar, West Delhi",
        type: "MedicalWebPage"
    },
    '/leading-psychologist-in-adarsh-nagar': {
        title: "Psychiatric & Mental Health Consultation in Adarsh Nagar | Dr. Pratik Kumar",
        description: "Dr. Pratik Kumar offers evidence-based psychiatric evaluations and care for Adarsh Nagar residents. Individualized clinical support for emotional and mental health concerns.",
        keywords: "psychiatrist Adarsh Nagar, mental health consultation, psychiatric care Adarsh Nagar, Dr. Pratik Kumar, behavioral therapy",
        areaName: "Adarsh Nagar, North Delhi",
        type: "MedicalWebPage"
    },
    '/best-psychiatrist-in-kirti-nagar': {
        title: "Psychiatric Consultation in Kirti Nagar - Dr. Pratik Kumar",
        description: "Consult Dr. Pratik Kumar for evidence-based psychiatric care in Kirti Nagar. Clinical evaluations, mood disorder management, and personalized care pathways.",
        keywords: "psychiatrist Kirti Nagar, mental health assessment, psychotherapy, Dr. Pratik Kumar, medication management",
        areaName: "Kirti Nagar, West Delhi",
        type: "MedicalWebPage"
    },
    '/top-psychologist-in-delhi-ncr': {
        title: "Psychiatric & Mental Health Care in Delhi NCR - Dr. Pratik Kumar",
        description: "Dr. Pratik Kumar provides consultant psychiatric care across Delhi NCR. Clinical evaluations for depression, anxiety, addiction, and neuropsychiatric health.",
        keywords: "psychiatrist Delhi NCR, mental health clinic Delhi, Dr. Pratik Kumar, depression treatment Delhi, anxiety therapy NCR, psychiatric consultation",
        areaName: "Delhi NCR",
        type: "MedicalWebPage"
    },
    '/about': {
        title: "About Dr. Pratik Kumar - Qualifications & Experience | Delhi Global Mind Clinic",
        description: "Learn about Dr. Pratik Kumar's qualifications (DNB Psychiatry, MBBS) and over 10 years of experience in clinical psychiatry and mental health treatment.",
        keywords: "Dr. Pratik Kumar qualifications, DNB psychiatry Delhi, IHBAS psychiatrist, mental health specialist profile",
        type: "AboutPage"
    },
    '/services': {
        title: "Psychiatric Services & Mental Health Treatments | Delhi Global Mind Clinic",
        description: "Explore comprehensive mental health services offered by Dr. Pratik Kumar: Depression, Anxiety, Bipolar Disorder, Addiction, OCD, Psychotherapy, and Dementia care.",
        keywords: "psychiatric services Delhi, mental health treatments, therapy sessions, psychiatry clinic services",
        type: "MedicalWebPage"
    },
    '/services/depression-anxiety': {
        title: "Depression & Anxiety Treatment in Delhi | Dr. Pratik Kumar",
        description: "Clinical treatment for depression and anxiety disorders by Dr. Pratik Kumar at Delhi Global Mind Clinic. Evidence-based psychiatric and therapeutic care.",
        keywords: "depression treatment Delhi, anxiety disorder therapy, panic attack treatment, psychiatrist for anxiety",
        serviceName: "Depression and Anxiety Treatment",
        type: "MedicalWebPage"
    },
    '/services/bipolar-disorder': {
        title: "Bipolar Disorder Treatment in Delhi NCR | Dr. Pratik Kumar",
        description: "Specialized psychiatric care and mood stabilization for bipolar disorder at Delhi Global Mind Clinic.",
        keywords: "bipolar disorder treatment, mood stabilizer psychiatrist Delhi, mania depression care",
        serviceName: "Bipolar Disorder Management",
        type: "MedicalWebPage"
    },
    '/services/dementia': {
        title: "Dementia & Memory Care Support in Delhi | Dr. Pratik Kumar",
        description: "Comprehensive dementia assessment, cognitive evaluation, and caregiver guidance by Dr. Pratik Kumar.",
        keywords: "dementia assessment Delhi, Alzheimer's care, memory loss clinic, geriatric psychiatry",
        serviceName: "Dementia & Memory Care",
        type: "MedicalWebPage"
    },
    '/services/schizophrenia': {
        title: "Schizophrenia & Psychosis Treatment in Delhi | Dr. Pratik Kumar",
        description: "Clinical evaluation, medication management, and supportive care for schizophrenia and psychotic disorders.",
        keywords: "schizophrenia treatment Delhi, psychosis psychiatrist, delusion hallucination management",
        serviceName: "Schizophrenia & Psychosis Care",
        type: "MedicalWebPage"
    },
    '/services/addiction-disorders': {
        title: "Addiction & De-Addiction Treatment Clinic in Delhi | Dr. Pratik Kumar",
        description: "De-addiction medical management for alcohol, substance abuse, and behavioral addictions by Dr. Pratik Kumar.",
        keywords: "de-addiction center Delhi, alcohol addiction treatment, substance abuse counselor",
        serviceName: "Addiction De-Addiction Services",
        type: "MedicalWebPage"
    },
    '/services/relationship-counseling': {
        title: "Relationship & Marital Counseling in Delhi | Dr. Pratik Kumar",
        description: "Professional relationship counseling and couples guidance to foster constructive communication and interpersonal health.",
        keywords: "relationship counseling Delhi, couples therapy, marriage counselor Shalimar Bagh",
        serviceName: "Relationship & Marital Counseling",
        type: "MedicalWebPage"
    },
    '/services/ocd-ptsd-adhd': {
        title: "OCD, PTSD & ADHD Clinical Care in Delhi | Dr. Pratik Kumar",
        description: "Specialized evidence-based care for OCD, post-traumatic stress disorder (PTSD), and adult/child ADHD.",
        keywords: "OCD treatment Delhi, PTSD specialist, ADHD psychiatrist Delhi, CBT therapy",
        serviceName: "OCD, PTSD & ADHD Treatment",
        type: "MedicalWebPage"
    },
    '/services/sleep-sexual-health': {
        title: "Sleep Disorders & Sexual Health Care in Delhi | Dr. Pratik Kumar",
        description: "Clinical evaluation for insomnia, sleep disorders, psychosexual health, and emotional well-being.",
        keywords: "sleep clinic Delhi, insomnia treatment, sexual health psychiatrist, psychosexual disorder care",
        serviceName: "Sleep & Sexual Health Therapy",
        type: "MedicalWebPage"
    },
    '/services/psychotherapy': {
        title: "Psychotherapy & Counseling Services in Delhi | Dr. Pratik Kumar",
        description: "CBT, supportive psychotherapy, and counseling for stress management, trauma, and emotional well-being.",
        keywords: "psychotherapy Delhi, CBT therapist, mental health counseling, stress relief therapy",
        serviceName: "Psychotherapy & Counseling",
        type: "MedicalWebPage"
    },
    '/check-your-anxiety': {
        title: "Online GAD-7 Anxiety Assessment Tool | Delhi Global Mind Clinic",
        description: "Evaluate your anxiety symptoms using the scientifically validated GAD-7 screening tool online. Structured results & clinical guidance.",
        keywords: "anxiety test online, GAD-7 assessment, check anxiety levels, mental health self-assessment",
        type: "MedicalWebPage"
    },
    '/contact': {
        title: "Contact & Clinic Consultations | Delhi Global Mind Clinic - Shalimar Bagh",
        description: "Schedule an in-clinic or online consultation with Dr. Pratik Kumar at Delhi Global Mind Clinic, Shalimar Bagh, New Delhi. Call +91 99340 35397.",
        keywords: "psychiatrist appointment Delhi, Shalimar Bagh clinic contact, Dr. Pratik Kumar phone number",
        type: "ContactPage"
    }
};

const SEOHelmet: React.FC = () => {
    const location = useLocation();
    const path = location.pathname;
    const currentData = seoContent[path] || seoContent['/'];
    const { title, description, keywords, type = "WebPage", serviceName, areaName } = currentData;
    const canonicalUrl = `https://delhimentalhealth.com${path === '/' ? '' : path}`;

    // Schema graph construction
    const breadcrumbListSchema = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://delhimentalhealth.com"
            },
            ...(path !== '/' ? [
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": title.split('|')[0].trim(),
                    "item": canonicalUrl
                }
            ] : [])
        ]
    };

    const webPageSchema: Record<string, any> = {
        "@type": type,
        "@id": `${canonicalUrl}/#webpage`,
        "url": canonicalUrl,
        "name": title,
        "description": description,
        "isPartOf": {
            "@id": "https://delhimentalhealth.com/#website"
        },
        "about": {
            "@id": "https://delhimentalhealth.com/#clinic"
        }
    };

    if (serviceName) {
        webPageSchema.mainEntity = {
            "@type": "MedicalProcedure",
            "name": serviceName,
            "description": description,
            "howItWorks": "Consultation, Diagnostic Assessment, and Evidence-based Treatment Plan",
            "provider": {
                "@id": "https://delhimentalhealth.com/#clinic"
            }
        };
    }

    if (areaName) {
        webPageSchema.speciality = "Psychiatric Care";
        webPageSchema.contentLocation = {
            "@type": "AdministrativeArea",
            "name": areaName
        };
    }

    const pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            webPageSchema,
            breadcrumbListSchema
        ]
    };

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="Delhi Global Mind Clinic" />
            <meta property="og:location" content={areaName || "Delhi NCR, Shalimar Bagh, North Delhi, West Delhi"} />
            <script type="application/ld+json">
                {JSON.stringify(pageSchema)}
            </script>
        </Helmet>
    );
};

export default SEOHelmet;