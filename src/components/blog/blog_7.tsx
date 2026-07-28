import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPost from './BlogPost';

const Blog7AdhdIn: React.FC = () => {
    const blogContent = {
        title: "Attention-Deficit/Hyperactivity Disorder (ADHD) in Adults",
        author: "Dr. Pratik Kumar",
        date: "2026-07-10",
        content: [
            {
                type: 'paragraph' as const,
                content: 'Attention-deficit/hyperactivity disorder (ADHD) is a mental health disorder that includes a combination of persistent problems, such as difficulty paying attention, hyperactivity, and impulsive behavior.'
            },
            {
                type: 'paragraph' as const,
                content: 'While often diagnosed in childhood, ADHD frequently persists into adulthood. Adults with ADHD may have trouble focusing, prioritizing, and organizing tasks. They might experience restlessness, impulsivity, and mood swings.'
            },
            {
                type: 'paragraph' as const,
                content: 'These symptoms can lead to problems at work, in relationships, and with self-esteem.'
            },
            {
                type: 'paragraph' as const,
                content: 'Treatment for adult ADHD typically includes medication and psychotherapy. Medications can help reduce symptoms of inattention and hyperactivity, while therapy can help patients develop coping strategies and organizational skills. Recognizing ADHD in adulthood is the first step toward managing its impact.'
            }
        ],
        tags: ["ADHD","Mental Health","Focus"]
    };
    return (
        <>
            <Helmet>
                <title>Attention-Deficit/Hyperactivity Disorder (ADHD) in Adults | Dr. Pratik Kumar</title>
                <meta name="description" content="ADHD frequently persists into adulthood, causing trouble focusing and organizing. Recognizing ADHD in adulthood is the first step toward managing its impact." />
            </Helmet>
            <BlogPost {...blogContent} />
        </>
    )
}

export default Blog7AdhdIn;
