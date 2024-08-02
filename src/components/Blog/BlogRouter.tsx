
import React from 'react';
import { useParams } from 'react-router-dom';
import AnxietyBlog from '../blog/copingwithanxiety';
import DepressionBlog from '../blog/depression';
import SleepBlog from '../blog/sleep';
import MindFullBlog from '../blog/mindfulness';

const BlogRouter: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  switch (slug) {
    case 'understanding-depression':
      return <DepressionBlog />;
    case 'anxiety-coping':
        return <AnxietyBlog />
    case 'sleep-and-mental-health':
        return <SleepBlog />
    case 'mindfulness-for-stress':
        return <MindFullBlog />; 
    default:
      return <div>Blog post not found</div>;
  }
};

export default BlogRouter;