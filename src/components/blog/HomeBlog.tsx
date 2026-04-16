import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';


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


export type ContentItem = ParagraphContent | HeadingContent | ImageContent | ListContent;



interface HomeBlogProps {
    post: {
        title: string;
        date: string;
        content: ContentItem[];
        tags: string[];
    };
}

const HomeBlog: React.FC<HomeBlogProps> = ({ post }) => {
    const [expanded, setExpanded] = useState<boolean | false>(false);

    const toggleExpand = () => setExpanded(!expanded);

    const renderContent = () => {
        //const contentToShow = isMobile ? post.content.slice(0, 2) : expanded ? post.content : post.content.slice(0, 5);
        const contentToShow = expanded ? post.content : post.content.slice(0, 2); 
        return contentToShow.map((item, index) => {
            switch (item.type) {
                case 'paragraph':
                    return <p key={index} className="mb-4 text-gray-800 leading-relaxed">{item.content}</p>;
                case 'heading':
                    return <h4 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">{item.content}</h4>;
                case 'image':
                    return (
                        <figure key={index} className="my-6 flex flex-col items-center">
                            <img src={item.src} alt={item.alt} className="w-[40vh] shadow-md" />
                            {item.alt && <figcaption className="mt-2 text-sm text-center text-gray-600">{item.alt}</figcaption>}
                        </figure>
                    );
                case 'list':
                    return (
                        <ul key={index} className="list-disc pl-6 mb-4">
                            {item.content.map((li, liIndex) => (
                                <li key={liIndex} className="mb-2 text-gray-800">{li}</li>
                            ))}
                        </ul>
                    );
                default:
                    return null;
            }
        });
    };

    return (
        <section className="curvy-bg-container bg-gradient-to-br from-amber-50 to-white py-16 relative">
            <div className="curvy-bg-left"></div>
            <div className="curvy-bg-right"></div>
            <div className="container mx-auto px-4 relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Featured Blog</h2>
                <div className="lg:flex lg:items-start lg:space-x-8">
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <img src="/images/homeblog2.png" alt="Featured Blog" className="w-full rounded-lg" />
                    </div>
                    <article className="lg:w-2/3 rounded-lg  overflow-hidden">
                        <div className="p-8">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{post.title}</h3>
                            <div className="flex items-center text-gray-600 mb-6">
                                
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </time>
                            </div>
                            <div className="prose prose-lg max-w-none">
                                {/* Mobile view 
                                <div className="lg:hidden">
                                    {renderContent(true)}
                                    <Link to={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                                        Read More...
                                    </Link>
                                </div>
                                {/* Desktop view */}
                                <div className="prose prose-lg max-w-none">
                                    {renderContent()}
                                    {!expanded && post.content.length > 3 && (
                                        <button onClick={toggleExpand} className="text-blue-600 hover:text-blue-800 font-semibold">
                                            Read More...
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-2">
                                {post.tags.map((tag, index) => (
                                    <span key={index} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
                <div className="mt-12 text-center">
                    <Link
                        to="/blog"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Read More Blogs
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeBlog;