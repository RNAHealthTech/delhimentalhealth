import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPost from './BlogPost';

const Blog9EatingDisorders: React.FC = () => {
    const blogContent = {
        title: "Eating Disorders: Recognizing the Warning Signs",
        author: "Dr. Pratik Kumar",
        date: "2026-07-04",
        content: [
            {
                type: 'paragraph' as const,
                content: 'Eating disorders are serious mental health conditions that involve extreme emotions, attitudes, and behaviors surrounding weight and food issues.'
            },
            {
                type: 'paragraph' as const,
                content: 'Common eating disorders include anorexia nervosa, bulimia nervosa, and binge-eating disorder. These disorders can have severe physical and psychological consequences.'
            },
            {
                type: 'paragraph' as const,
                content: 'Individuals may engage in restrictive eating, binge eating, or purging behaviors to control their weight. These behaviors are often driven by a distorted body image and an intense fear of gaining weight.'
            },
            {
                type: 'paragraph' as const,
                content: 'Treatment for eating disorders requires a team approach, including medical care, nutritional counseling, and psychotherapy. Early intervention is critical, as these conditions can be life-threatening. Recognizing the warning signs is essential for getting help.'
            }
        ],
        tags: ["Eating Disorders","Mental Health","Wellness"]
    };
    return (
        <>
            <Helmet>
                <title>Eating Disorders: Recognizing the Warning Signs | Dr. Pratik Kumar</title>
                <meta name="description" content="Eating disorders involve extreme emotions and behaviors surrounding weight and food. Learn how to recognize the warning signs and seek life-saving early intervention." />
            </Helmet>
            <BlogPost {...blogContent} />
        </>
    )
}

export default Blog9EatingDisorders;
