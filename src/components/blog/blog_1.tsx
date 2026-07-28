import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPost from './BlogPost';

const Blog1DepressionMore: React.FC = () => {
    const blogContent = {
        title: "Understanding Depression: More Than Just Feeling Sad",
        author: "Dr. Pratik Kumar",
        date: "2026-07-28",
        content: [
            {
                type: 'paragraph' as const,
                content: 'Depression is often misunderstood as simply "feeling sad." However, major depressive disorder is a serious mood disorder that causes a persistent feeling of sadness and a loss of interest in activities. It affects how you feel, think, and behave, and can lead to a variety of emotional and physical problems.'
            },
            {
                type: 'paragraph' as const,
                content: 'You might have trouble doing normal day-to-day activities, and sometimes it may feel as if life isn\'t worth living. Depression is not a weakness, and you cannot simply "snap out" of it. It requires professional treatment.'
            },
            {
                type: 'paragraph' as const,
                content: 'Symptoms often include feelings of emptiness or hopelessness, angry outbursts, sleep disturbances (insomnia or sleeping too much), fatigue, and unexplained physical problems like back pain or headaches.'
            },
            {
                type: 'paragraph' as const,
                content: 'Treatment for depression typically involves medication, psychotherapy (talk therapy), or a combination of both. If you or someone you know is experiencing these symptoms, reaching out to a mental health professional is a crucial first step.'
            }
        ],
        tags: ["Depression","Mental Health","Treatment"]
    };
    return (
        <>
            <Helmet>
                <title>Understanding Depression: More Than Just Feeling Sad | Dr. Pratik Kumar</title>
                <meta name="description" content="Depression is often misunderstood as simply feeling sad. Learn about major depressive disorder, its symptoms, and why professional treatment is crucial." />
            </Helmet>
            <BlogPost {...blogContent} />
        </>
    )
}

export default Blog1DepressionMore;
