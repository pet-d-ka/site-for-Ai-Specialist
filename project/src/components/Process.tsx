import React from 'react';
import { Search, Code, BarChart, Check } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 group">
      <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <div>
        <div className="flex items-center mb-2">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mr-3">
            {number}
          </span>
          <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] to-black opacity-80 z-0"></div>
      
      {/* Gradient accent */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            title="My Process"
            subtitle="for AI Solutions"
            gradient="from-purple-400 to-blue-400"
          />
          
          <div className="space-y-16 mt-12">
            <Step
              number="01"
              title="Requirements Analysis"
              description="I begin by deeply understanding your business needs and objectives. This involves comprehensive data assessment, stakeholder interviews, and identifying key performance indicators to ensure our AI solution addresses the core challenges."
              icon={<Search size={24} className="text-white" />}
            />
            
            <Step
              number="02"
              title="Model Development"
              description="Using the latest neural network architectures, I design and build custom AI models tailored to your specific requirements. This includes data preprocessing, feature engineering, model training, and extensive validation to ensure optimal performance."
              icon={<Code size={24} className="text-white" />}
            />
            
            <Step
              number="03"
              title="Evaluation & Refinement"
              description="Every model undergoes rigorous testing and evaluation against industry benchmarks. I use advanced analytics to measure performance and iteratively refine the models, ensuring they exceed performance expectations and generalize well to new data."
              icon={<BarChart size={24} className="text-white" />}
            />
            
            <Step
              number="04"
              title="Deployment & Integration"
              description="I seamlessly integrate the AI solution into your existing infrastructure, ensuring scalability, reliability, and efficiency. This includes developing APIs, optimizing for production, implementing monitoring systems, and providing comprehensive documentation."
              icon={<Check size={24} className="text-white" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;