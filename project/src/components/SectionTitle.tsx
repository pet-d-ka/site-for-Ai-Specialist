import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  gradient?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  gradient = "from-purple-500 to-blue-500", 
  centered = true 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-white text-4xl md:text-5xl font-bold mb-2">
        {title}
        {subtitle && (
          <>
            <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
              {subtitle}
            </span>
          </>
        )}
      </h2>
      <div className={`h-1 w-24 bg-gradient-to-r ${gradient} rounded-full mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;