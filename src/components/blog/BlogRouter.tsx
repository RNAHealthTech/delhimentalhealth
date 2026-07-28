import React from 'react';
import { useParams } from 'react-router-dom';
import AnxietyBlog from './copingwithanxiety';
import DepressionBlog from './depression';
import SleepBlog from './sleep';
import MindFullBlog from './mindfulness';
import Blog1DepressionMore from './blog_1';
import Blog2AnxietyWorry from './blog_2';
import Blog3BipolarDisorder from './blog_3';
import Blog4OcdBreaking from './blog_4';
import Blog5PtsdHealing from './blog_5';
import Blog6SchizophreniaComplex from './blog_6';
import Blog7AdhdIn from './blog_7';
import Blog8SleepDisorders from './blog_8';
import Blog9EatingDisorders from './blog_9';
import Blog10SubstanceUse from './blog_10';

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
    case 'depression-more-than-sad':
        return <Blog1DepressionMore />;
    case 'anxiety-worry-takes-over':
        return <Blog2AnxietyWorry />;
    case 'bipolar-disorder-extremes':
        return <Blog3BipolarDisorder />;
    case 'ocd-breaking-cycle':
        return <Blog4OcdBreaking />;
    case 'ptsd-healing-after-trauma':
        return <Blog5PtsdHealing />;
    case 'schizophrenia-complex-condition':
        return <Blog6SchizophreniaComplex />;
    case 'adhd-in-adults':
        return <Blog7AdhdIn />;
    case 'sleep-disorders-insomnia':
        return <Blog8SleepDisorders />;
    case 'eating-disorders-warning-signs':
        return <Blog9EatingDisorders />;
    case 'substance-use-disorders-recovery':
        return <Blog10SubstanceUse />;
    default:
      return <div>Blog post not found</div>;
  }
};

export default BlogRouter;