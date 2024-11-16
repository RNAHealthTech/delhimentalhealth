import React from 'react';
import { ExternalLink } from 'lucide-react';

// Custom Card Component with new styling
const Card = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`rounded-xl overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ 
  children,
  className = ""  
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

const MediaGallerySection = () => {
  const mediaItems = [
    {
      title: "Doctor explains: Loneliness, now a mental health epidemic, needs to be tackled to avert social disaster",
      source: "Firstpost",
      date: "2024",
      imageUrl: "/images/lonely.webp",
      link: "https://www.firstpost.com/health/doctor-explains-loneliness-now-a-mental-health-epidemic-needs-to-be-tackled-to-avert-social-disaster-13833803.html",
      excerpt: "In this insightful article, Dr. Prateek Kumar discusses the growing concern of loneliness as a mental health epidemic and its potential impact on society, offering professional insights on addressing this critical issue."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-lp">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-roboto-slab text-primary mb-4">
            Media & Gallery
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {mediaItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] 
                        hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)] 
                        transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between bg-white h-full relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-peach opacity-10 rounded-full -mr-12 -mt-12"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-edu text-accent">
                          {item.source}
                        </span>
                        <span className="w-1 h-1 bg-secondary rounded-full"></span>
                        <span className="text-sm font-edu text-accent">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-roboto-slab text-primary mb-4 leading-tight hover:text-secondary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 font-roboto-slab mb-6 line-clamp-3 leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors duration-300 font-roboto-slab group"
                    >
                      Read Full Article
                      <ExternalLink 
                        size={16} 
                        className="transform group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallerySection;