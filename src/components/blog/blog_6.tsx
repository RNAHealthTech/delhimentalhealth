import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPost from './BlogPost';

const Blog6SchizophreniaComplex: React.FC = () => {
    const blogContent = {
        title: "Schizophrenia: Understanding a Complex Condition",
        author: "Dr. Pratik Kumar",
        date: "2026-07-13",
        content: [
            {
                type: 'paragraph' as const,
                content: 'Schizophrenia is a serious mental disorder in which people interpret reality abnormally. It may result in some combination of hallucinations, delusions, and extremely disordered thinking and behavior that impairs daily functioning and can be disabling.'
            },
            {
                type: 'paragraph' as const,
                content: 'People with schizophrenia require lifelong treatment. Early treatment may help get symptoms under control before serious complications develop and may help improve the long-term outlook.'
            },
            {
                type: 'paragraph' as const,
                content: 'Symptoms can be broadly divided into positive symptoms (those added, like hallucinations), negative symptoms (those lost, like lack of motivation), and cognitive symptoms (problems with memory and attention).'
            },
            {
                type: 'paragraph' as const,
                content: 'Treatment involves a combination of antipsychotic medications and psychosocial treatments. Supportive services and brain stimulation therapies may also be used. Understanding this complex condition is key to providing empathy and effective care.'
            }
        ],
        tags: ["Schizophrenia","Mental Health","Psychiatry"]
    };
    return (
        <>
            <Helmet>
                <title>Schizophrenia: Understanding a Complex Condition | Dr. Pratik Kumar</title>
                <meta name="description" content="Schizophrenia is a serious mental disorder that impairs daily functioning. Understanding its positive, negative, and cognitive symptoms is key to effective care." />
            </Helmet>
            <BlogPost {...blogContent} />
        </>
    )
}

export default Blog6SchizophreniaComplex;
