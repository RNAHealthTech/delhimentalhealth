import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, imageUrl, slug, tags }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/blog/${slug}`}>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              <span className="mx-2">•</span>
              <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</time>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;