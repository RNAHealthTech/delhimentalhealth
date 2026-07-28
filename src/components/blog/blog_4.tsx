import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPost from './BlogPost';

const Blog4OcdBreaking: React.FC = () => {
    const blogContent = {
        title: "Obsessive-Compulsive Disorder (OCD): Breaking the Cycle",
        author: "Dr. Pratik Kumar",
        date: "2026-07-19",
        content: [
            {
                type: 'paragraph' as const,
                content: 'Obsessive-compulsive disorder (OCD) features a pattern of unwanted thoughts and fears known as obsessions. These obsessions lead you to do repetitive behaviors (compulsions) to try to make them go away or decrease your anxiety.'
            },
            {
                type: 'paragraph' as const,
                content: 'For example, you might obsess over germs and repeatedly wash your hands, or fear losing something and repeatedly check the locks on your doors.'
            },
            {
                type: 'paragraph' as const,
                content: 'The person typically realizes that the obsessions are irrational and tries to ignore or suppress them, but this only increases their distress and anxiety.'
            },
            {
                type: 'paragraph' as const,
                content: 'The two main treatments for OCD are psychotherapy and medications. Often, a mix of both treatments is most effective. Exposure and response prevention (ERP) therapy, a type of cognitive behavioral therapy, is particularly effective for OCD. Breaking the cycle of obsessions and compulsions is possible with the right treatment.'
            }
        ],
        tags: ["OCD","Mental Health","Therapy"]
    };
    return (
        <>
            <Helmet>
                <title>Obsessive-Compulsive Disorder (OCD): Breaking the Cycle | Dr. Pratik Kumar</title>
                <meta name="description" content="OCD features unwanted thoughts and repetitive behaviors. Learn how exposure and response prevention therapy can help break the cycle of obsessions and compulsions." />
            </Helmet>
            <BlogPost {...blogContent} />
        </>
    )
}

export default Blog4OcdBreaking;
