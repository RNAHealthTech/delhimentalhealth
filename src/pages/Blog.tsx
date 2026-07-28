import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BlogCard from '../components/blog/BlogCard';

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "Coping Strategies for Anxiety",
      excerpt: "Anxiety can be overwhelming, but there are effective coping strategies. Explore techniques to manage anxiety in daily life.",
      date: "July 1, 2024",
      imageUrl: "/images/anxiety_coping.png",
      slug: "anxiety-coping",
      tags: ['Anxiety', 'Mental Health', 'Coping Strategies'],
    },
    {
      title: "Understanding Depression: Signs, Symptoms, and Treatment",
      excerpt: "Depression is more than just feeling sad. Learn about the signs, symptoms, and various treatment options available.",
      date: "July 15, 2024",
      imageUrl: "/images/understanding_depression.png",
      slug: "understanding-depression",
      tags: ['Depression', 'Mental Health', 'Treatment'],
    },
    {
      title: "The Impact of Sleep on Mental Health",
      excerpt: "Discover the crucial role that sleep plays in maintaining good mental health and learn tips for improving your sleep quality.",
      date: "August 1, 2024",
      imageUrl: "/images/sleep_mental_health.png",
      slug: "sleep-and-mental-health",
      tags: ['Sleep', 'Mental Health', 'Wellness'],
    },
    {
      title: "Mindfulness Techniques for Stress Reduction",
      excerpt: "Explore practical mindfulness techniques that can help reduce stress and improve overall well-being in your daily life.",
      date: "August 15, 2024",
      imageUrl: "/images/mindfulness_stress.png",
      slug: "mindfulness-for-stress",
      tags: ['Mindfulness', 'Stress Reduction', 'Mental Health'],
    },
    {
      title: "Understanding Depression: More Than Just Feeling Sad",
      excerpt: "Depression is often misunderstood as simply feeling sad. Learn about major depressive disorder, its symptoms, and why professional treatment is crucial.",
      date: "July 28, 2024",
      imageUrl: "/images/understanding_depression.png",
      slug: "depression-more-than-sad",
      tags: ["Depression","Mental Health","Treatment"],
    },
    {
      title: "Anxiety Disorders: When Worry Takes Over",
      excerpt: "When everyday worry turns into intense and persistent fear, it might be an anxiety disorder. Discover the symptoms and highly effective treatments available.",
      date: "July 28, 2024",
      imageUrl: "/images/anxiety_coping.png",
      slug: "anxiety-worry-takes-over",
      tags: ["Anxiety","Mental Health","CBT"],
    },
    {
      title: "Bipolar Disorder: Navigating the Extremes of Mood",
      excerpt: "Bipolar disorder causes extreme mood swings from euphoric highs to depressive lows. Learn how to navigate and manage this lifelong condition.",
      date: "July 28, 2024",
      imageUrl: "/images/understanding_depression.png",
      slug: "bipolar-disorder-extremes",
      tags: ["Bipolar Disorder","Mental Health","Mood Swings"],
    },
    {
      title: "Obsessive-Compulsive Disorder (OCD): Breaking the Cycle",
      excerpt: "OCD features unwanted thoughts and repetitive behaviors. Learn how exposure and response prevention therapy can help break the cycle of obsessions and compulsions.",
      date: "July 28, 2024",
      imageUrl: "/images/mindfulness_stress.png",
      slug: "ocd-breaking-cycle",
      tags: ["OCD","Mental Health","Therapy"],
    },
    {
      title: "Post-Traumatic Stress Disorder (PTSD): Healing After Trauma",
      excerpt: "PTSD is triggered by terrifying events, causing flashbacks and severe anxiety. Discover how talk therapy and support make healing after trauma entirely possible.",
      date: "July 28, 2024",
      imageUrl: "/images/sleep_mental_health.png",
      slug: "ptsd-healing-after-trauma",
      tags: ["PTSD","Trauma","Mental Health"],
    },
    {
      title: "Schizophrenia: Understanding a Complex Condition",
      excerpt: "Schizophrenia is a serious mental disorder that impairs daily functioning. Understanding its positive, negative, and cognitive symptoms is key to effective care.",
      date: "July 28, 2024",
      imageUrl: "/images/understanding_depression.png",
      slug: "schizophrenia-complex-condition",
      tags: ["Schizophrenia","Mental Health","Psychiatry"],
    },
    {
      title: "Attention-Deficit/Hyperactivity Disorder (ADHD) in Adults",
      excerpt: "ADHD frequently persists into adulthood, causing trouble focusing and organizing. Recognizing ADHD in adulthood is the first step toward managing its impact.",
      date: "July 28, 2024",
      imageUrl: "/images/mindfulness_stress.png",
      slug: "adhd-in-adults",
      tags: ["ADHD","Mental Health","Focus"],
    },
    {
      title: "Sleep Disorders and Mental Health: The Insomnia Connection",
      excerpt: "Sleep disorders like insomnia are closely linked to mental health conditions. Prioritizing sleep hygiene is a crucial component of overall mental health management.",
      date: "July 28, 2024",
      imageUrl: "/images/sleep_mental_health.png",
      slug: "sleep-disorders-insomnia",
      tags: ["Sleep","Insomnia","Mental Health"],
    },
    {
      title: "Eating Disorders: Recognizing the Warning Signs",
      excerpt: "Eating disorders involve extreme emotions and behaviors surrounding weight and food. Learn how to recognize the warning signs and seek life-saving early intervention.",
      date: "July 28, 2024",
      imageUrl: "/images/understanding_depression.png",
      slug: "eating-disorders-warning-signs",
      tags: ["Eating Disorders","Mental Health","Wellness"],
    },
    {
      title: "Substance Use Disorders: A Path to Recovery",
      excerpt: "Substance use disorder is a complex condition of uncontrolled substance use. Discover how behavioral therapy and support can lead individuals on a path to recovery.",
      date: "July 28, 2024",
      imageUrl: "/images/understanding_depression.png",
      slug: "substance-use-disorders-recovery",
      tags: ["Substance Use","Addiction","Recovery"],
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mental Health Insights | Dr. Pratik Kumar's Blog</title>
        <meta name="description" content="Explore expert insights on mental health, psychiatry, and well-being from Dr. Pratik Kumar. Stay informed with the latest in neuropsychiatry and de-addiction." />
        <meta name="keywords" content="mental health blog, psychiatric insights, Dr. Pratik Kumar, neuropsychiatry articles, de-addiction information, well-being tips" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center mt-48">
        <h1 className="text-2xl font-bold text-teal-600 mb-8 lg:text-4xl">Blog & <span className='text-xl text-zinc-800'>Latest Research...</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;