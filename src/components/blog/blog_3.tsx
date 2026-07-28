import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPost from './BlogPost';

const Blog3BipolarDisorder: React.FC = () => {
    const blogContent = {
        title: "Bipolar Disorder: Navigating the Extremes of Mood",
        author: "Dr. Pratik Kumar",
        date: "2024-07-28",
        content: [
            {
                type: 'paragraph' as const,
                content: 'Bipolar disorder, formerly known as manic depression, is a mental health condition that causes extreme mood swings. These swings include emotional highs, known as mania or hypomania, and lows, known as depression.'
            },
            {
                type: 'paragraph' as const,
                content: 'During a depressive episode, you may feel sad, hopeless, and lose interest in most activities. During a manic episode, you may feel euphoric, full of energy, or unusually irritable. You might need much less sleep than usual and make poor decisions.'
            },
            {
                type: 'paragraph' as const,
                content: 'These mood swings can affect sleep, energy, activity, judgment, behavior, and the ability to think clearly.'
            },
            {
                type: 'paragraph' as const,
                content: 'Although bipolar disorder is a lifelong condition, you can manage your mood swings and other symptoms by following a treatment plan. Healthcare professionals typically use medications and talk therapy to treat bipolar disorder.'
            }
        ],
        tags: ["Bipolar Disorder","Mental Health","Mood Swings"]
    };
    return (
        <>
            <Helmet>
                <title>Bipolar Disorder: Navigating the Extremes of Mood | Dr. Pratik Kumar</title>
                <meta name="description" content="Bipolar disorder causes extreme mood swings from euphoric highs to depressive lows. Learn how to navigate and manage this lifelong condition." />
            </Helmet>
            <BlogPost {...blogContent} />
        </>
    )
}

export default Blog3BipolarDisorder;
