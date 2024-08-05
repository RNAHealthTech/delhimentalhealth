import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BlogCard from '../components/Blog/BlogCard';

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "Coping Strategies for Anxiety",
      excerpt: "Anxiety can be overwhelming, but there are effective coping strategies. Explore techniques to manage anxiety in daily life.",
      date: "July 1, 2024",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fanxiety.jpg?alt=media&token=0e5ca312-07c1-44c3-87e5-f672e98cec8a",
      slug: "anxiety-coping",
      tags: ['Anxiety', 'Mental Health', 'Coping Strategies'],
    },
    {
      title: "Understanding Depression: Signs, Symptoms, and Treatment",
      excerpt: "Depression is more than just feeling sad. Learn about the signs, symptoms, and various treatment options available.",
      date: "July 15, 2024",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fdepression.png?alt=media&token=fef8d553-5703-431d-869a-7add37c73672",
      slug: "understanding-depression",
      tags: ['Depression', 'Mental Health', 'Treatment'],
    },
    {
      title: "The Impact of Sleep on Mental Health",
      excerpt: "Discover the crucial role that sleep plays in maintaining good mental health and learn tips for improving your sleep quality.",
      date: "August 1, 2024",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fmentalhealth.png?alt=media&token=74f7565f-e1cd-4416-bed4-7eddc8ed170c",
      slug: "sleep-and-mental-health",
      tags: ['Sleep', 'Mental Health', 'Wellness'],
    },
    {
      title: "Mindfulness Techniques for Stress Reduction",
      excerpt: "Explore practical mindfulness techniques that can help reduce stress and improve overall well-being in your daily life.",
      date: "August 15, 2024",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/dr-pratik.appspot.com/o/images%2Fmindfulness.png?alt=media&token=804dd5ee-b1dd-4d96-8dfa-fb8557f4a6ca",
      slug: "mindfulness-for-stress",
      tags: ['Mindfulness', 'Stress Reduction', 'Mental Health'],
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