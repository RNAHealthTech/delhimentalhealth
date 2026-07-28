import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPost from './BlogPost';

const Blog10SubstanceUse: React.FC = () => {
    const blogContent = {
        title: "Substance Use Disorders: A Path to Recovery",
        author: "Dr. Pratik Kumar",
        date: "2026-07-01",
        content: [
            {
                type: 'paragraph' as const,
                content: 'Substance use disorder (SUD) is a complex condition in which there is uncontrolled use of a substance despite harmful consequences. People with SUD have an intense focus on using a certain substance, such as alcohol, tobacco, or illicit drugs, to the point that the person\'s ability to function in day-to-day life becomes impaired.'
            },
            {
                type: 'paragraph' as const,
                content: 'SUD can cause a variety of health and social problems, including addiction, tolerance, and withdrawal symptoms. It is often co-occurring with other mental health disorders, such as depression or anxiety.'
            },
            {
                type: 'paragraph' as const,
                content: 'Treatment for SUD involves detoxification, behavioral therapy, and sometimes medication. Recovery is a lifelong process, but with the right support and treatment, individuals can reclaim their lives.'
            },
            {
                type: 'paragraph' as const,
                content: 'There is no shame in seeking help; it is the first step on the path to recovery.'
            }
        ],
        tags: ["Substance Use","Addiction","Recovery"]
    };
    return (
        <>
            <Helmet>
                <title>Substance Use Disorders: A Path to Recovery | Dr. Pratik Kumar</title>
                <meta name="description" content="Substance use disorder is a complex condition of uncontrolled substance use. Discover how behavioral therapy and support can lead individuals on a path to recovery." />
            </Helmet>
            <BlogPost {...blogContent} />
        </>
    )
}

export default Blog10SubstanceUse;
