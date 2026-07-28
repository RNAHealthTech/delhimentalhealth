import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPost from './BlogPost';

const Blog2AnxietyWorry: React.FC = () => {
    const blogContent = {
        title: "Anxiety Disorders: When Worry Takes Over",
        author: "Dr. Pratik Kumar",
        date: "2026-07-25",
        content: [
            {
                type: 'paragraph' as const,
                content: 'Experiencing occasional anxiety is a normal part of life. However, people with anxiety disorders frequently have intense, excessive, and persistent worry and fear about everyday situations.'
            },
            {
                type: 'paragraph' as const,
                content: 'These feelings of anxiety and panic interfere with daily activities, are difficult to control, and can last a long time. Common symptoms include feeling nervous or tense, having a sense of impending doom, increased heart rate, rapid breathing, and trouble sleeping.'
            },
            {
                type: 'paragraph' as const,
                content: 'Examples of anxiety disorders include generalized anxiety disorder, social anxiety disorder, and panic disorder. Treatment for anxiety disorders is highly effective.'
            },
            {
                type: 'paragraph' as const,
                content: 'The two main treatments are psychotherapy and medications. Cognitive behavioral therapy (CBT) is often the most effective form of psychotherapy. Don\'t let worry take over your life; help is available.'
            }
        ],
        tags: ["Anxiety","Mental Health","CBT"]
    };
    return (
        <>
            <Helmet>
                <title>Anxiety Disorders: When Worry Takes Over | Dr. Pratik Kumar</title>
                <meta name="description" content="When everyday worry turns into intense and persistent fear, it might be an anxiety disorder. Discover the symptoms and highly effective treatments available." />
            </Helmet>
            <BlogPost {...blogContent} />
        </>
    )
}

export default Blog2AnxietyWorry;
