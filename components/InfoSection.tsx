import React from 'react';

interface InfoSectionProps {
  title: string;
  subtitle?: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ 
  title, 
  subtitle, 
  content, 
  imageSrc, 
  imageAlt,
  reversed = false 
}) => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-16 ${reversed ? 'md:flex-row-reverse' : ''}`}>
          
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            {subtitle && (
              <span className="text-rose-600 font-bold tracking-wider text-sm uppercase mb-2 block">
                {subtitle}
              </span>
            )}
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h2>
            <div className="prose prose-lg text-gray-600">
              {content.split('\n').map((paragraph, idx) => (
                paragraph.trim() && <p key={idx} className="mb-4">{paragraph.trim()}</p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};