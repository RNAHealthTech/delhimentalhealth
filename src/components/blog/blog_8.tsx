import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPost from './BlogPost';

const Blog8SleepDisorders: React.FC = () => {
    const blogContent = {
        title: "Sleep Disorders and Mental Health: The Insomnia Connection",
        author: "Dr. Pratik Kumar",
        date: "2024-07-28",
        content: [
            {
                type: 'paragraph' as const,
                content: 'Sleep is vital for overall health, and sleep disorders are closely linked to mental health conditions. Insomnia, characterized by difficulty falling asleep, staying asleep, or both, is a common issue that can exacerbate or trigger psychiatric disorders.'
            },
            {
                type: 'paragraph' as const,
                content: 'Lack of sleep can lead to irritability, difficulty concentrating, and increased stress. It is often a symptom of depression and anxiety disorders, but it can also be a standalone condition that requires treatment.'
            },
            {
                type: 'paragraph' as const,
                content: 'Treatment for insomnia involves addressing underlying medical conditions and may include cognitive behavioral therapy for insomnia (CBT-I).'
            },
            {
                type: 'paragraph' as const,
                content: 'This therapy helps you control or eliminate negative thoughts and actions that keep you awake. Prioritizing sleep hygiene is a crucial component of mental health management.'
            }
        ],
        tags: ["Sleep","Insomnia","Mental Health"]
    };
    return (
        <>
            <Helmet>
                <title>Sleep Disorders and Mental Health: The Insomnia Connection | Dr. Pratik Kumar</title>
                <meta name="description" content="Sleep disorders like insomnia are closely linked to mental health conditions. Prioritizing sleep hygiene is a crucial component of overall mental health management." />
            </Helmet>
            <BlogPost {...blogContent} />
        </>
    )
}

export default Blog8SleepDisorders;
