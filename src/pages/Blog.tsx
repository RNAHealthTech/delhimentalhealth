import React from 'react';
import { Helmet } from 'react-helmet';
import BlogCard from '../components/Blog/BlogCard';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Coping Strategies for Anxiety",
      excerpt: "Anxiety can be overwhelming, but there are effective coping strategies. Explore techniques to manage anxiety in daily life.",
      date: "July 1, 2024",
      imageUrl: "/images/anxiety-coping.jpg",
      slug: "anxiety-coping",
      tags: ['Anxiety', 'Mental Health', 'Coping Strategies'],
    },
    {
      title: "Understanding Depression: Signs, Symptoms, and Treatment",
      excerpt: "Depression is more than just feeling sad. Learn about the signs, symptoms, and various treatment options available.",
      date: "July 15, 2024",
      imageUrl: "/images/understanding-depression.jpg",
      slug: "understanding-depression",
      tags: ['Depression', 'Mental Health', 'Treatment'],
    },
    {
      title: "The Impact of Sleep on Mental Health",
      excerpt: "Discover the crucial role that sleep plays in maintaining good mental health and learn tips for improving your sleep quality.",
      date: "August 1, 2024",
      imageUrl: "/images/sleep-mental-health.jpg",
      slug: "sleep-and-mental-health",
      tags: ['Sleep', 'Mental Health', 'Wellness'],
    },
    {
      title: "Mindfulness Techniques for Stress Reduction",
      excerpt: "Explore practical mindfulness techniques that can help reduce stress and improve overall well-being in your daily life.",
      date: "August 15, 2024",
      imageUrl: "/images/mindfulness-techniques.jpg",
      slug: "mindfulness-for-stress",
      tags: ['Mindfulness', 'Stress Reduction', 'Mental Health'],
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Blog - Latest Articles on Mental Health</title>
        <meta name="description" content="Explore our collection of articles on mental health, anxiety, depression, sleep, and mindfulness. Stay informed with the latest research and insights." />
        <meta name="keywords" content="blog, mental health, anxiety, depression, sleep, mindfulness, stress reduction" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Blog & Latest Research</h1>
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