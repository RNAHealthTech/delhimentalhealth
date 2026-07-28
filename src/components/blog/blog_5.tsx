import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPost from './BlogPost';

const Blog5PtsdHealing: React.FC = () => {
    const blogContent = {
        title: "Post-Traumatic Stress Disorder (PTSD): Healing After Trauma",
        author: "Dr. Pratik Kumar",
        date: "2024-07-28",
        content: [
            {
                type: 'paragraph' as const,
                content: 'Post-traumatic stress disorder (PTSD) is a condition triggered by experiencing or witnessing a terrifying event. Symptoms may include flashbacks, nightmares, and severe anxiety, as well as uncontrollable thoughts about the event.'
            },
            {
                type: 'paragraph' as const,
                content: 'People with PTSD may relive the event through flashbacks or nightmares. They may also avoid places or situations that remind them of the traumatic event and feel constantly on edge (hyperarousal).'
            },
            {
                type: 'paragraph' as const,
                content: 'Getting treatment as soon as possible can help prevent PTSD symptoms from getting worse. The main treatment is talk therapy, also known as psychotherapy.'
            },
            {
                type: 'paragraph' as const,
                content: 'Skills such as relaxation, sleep, and exercise can also be helpful. Healing after trauma is a journey, but with proper support, it is entirely possible.'
            }
        ],
        tags: ["PTSD","Trauma","Mental Health"]
    };
    return (
        <>
            <Helmet>
                <title>Post-Traumatic Stress Disorder (PTSD): Healing After Trauma | Dr. Pratik Kumar</title>
                <meta name="description" content="PTSD is triggered by terrifying events, causing flashbacks and severe anxiety. Discover how talk therapy and support make healing after trauma entirely possible." />
            </Helmet>
            <BlogPost {...blogContent} />
        </>
    )
}

export default Blog5PtsdHealing;
