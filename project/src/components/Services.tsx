import React from 'react';
import { BrainCircuit, BarChart3, Database, Network, Bot, LineChart } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-900/30">
      <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
      <ul className="text-gray-300 space-y-2">
        {description.split('. ').map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Deep Learning",
      description: "Custom neural network architectures. Transfer learning implementation. Model optimization and deployment. Real-time inference solutions",
      icon: <BrainCircuit size={24} className="text-white" />
    },
    {
      title: "Computer Vision",
      description: "Object detection and recognition. Image segmentation and classification. Video analysis and processing. Facial recognition systems",
      icon: <Bot size={24} className="text-white" />
    },
    {
      title: "Natural Language Processing",
      description: "Text classification and sentiment analysis. Language generation and summarization. Chatbot development. Custom LLM fine-tuning",
      icon: <Network size={24} className="text-white" />
    },
    {
      title: "Data Analysis",
      description: "Predictive modeling and forecasting. Pattern recognition in large datasets. Anomaly detection systems. Business intelligence solutions",
      icon: <BarChart3 size={24} className="text-white" />
    },
    {
      title: "MLOps",
      description: "ML pipeline automation. Model monitoring and maintenance. Scalable AI infrastructure. CI/CD for machine learning",
      icon: <Database size={24} className="text-white" />
    },
    {
      title: "AI Consulting",
      description: "Strategic AI implementation planning. Technology stack recommendations. ROI assessment for AI projects. Training and knowledge transfer",
      icon: <LineChart size={24} className="text-white" />
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] to-black opacity-80 z-0"></div>
      
      {/* Gradient accent */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Services"
          subtitle="include"
          gradient="from-purple-400 to-blue-400"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;