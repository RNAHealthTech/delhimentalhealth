import React, { useEffect } from 'react';

type ParagraphContent = {
  type: 'paragraph';
  content: string;
};

type HeadingContent = {
  type: 'heading';
  content: string;
};

type ImageContent = {
  type: 'image';
  src: string;
  alt?: string;
};

type ListContent = {
  type: 'list';
  content: string[];
};

type ContentItem = ParagraphContent | HeadingContent | ImageContent | ListContent;

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  content: ContentItem[];
  tags: string[];
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content, tags }) => {
  useEffect(() => {
      window.scrollTo(0,0);
  },[])
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-48">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        <div className="flex items-center text-gray-600">
          <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
      {/* eslint-disable-next-line*/}
        {content.map((item, index) => {
          switch (item.type) {
            case 'paragraph':
              return <p key={index} className="mb-6 text-gray-800 leading-relaxed">{item.content}</p>;
            case 'heading':
              return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{item.content}</h2>;
            case 'image':
              return (
                <figure key={index} className="my-8">
                  <img src={item.src} alt={item.alt} className="w-full rounded-lg shadow-lg" />
                  {item.alt && <figcaption className="mt-2 text-sm text-center text-gray-600">{item.alt}</figcaption>}
                </figure>
              );
            case 'list':
              return (
                <ul key={index} className="list-disc pl-6 mb-6">
                  {item.content.map((li, liIndex) => (
                    <li key={liIndex} className="mb-2 text-gray-800">{li}</li>
                  ))}
                </ul>
              );
          }
        })}
      </div>

      <footer className="mt-12">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
};

export default BlogPost;