import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Neural Image Recognition System",
      category: "Computer Vision",
      description: "Advanced image recognition system using convolutional neural networks to identify objects with 98.7% accuracy.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["TensorFlow", "Python", "OpenCV", "Docker"]
    },
    {
      id: 2,
      title: "Predictive Analytics Dashboard",
      category: "Data Analysis",
      description: "Real-time analytics platform that uses machine learning to predict market trends and customer behavior.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["PyTorch", "React", "D3.js", "Flask"]
    },
    {
      id: 3,
      title: "Conversational AI Assistant",
      category: "NLP",
      description: "Natural language processing system that understands context and provides human-like responses.",
      image: "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["BERT", "FastAPI", "React", "WebSockets"]
    },
    {
      id: 4,
      title: "Autonomous Drone Navigation",
      category: "Computer Vision",
      description: "Deep learning model for real-time drone navigation in complex environments using visual input.",
      image: "https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["PyTorch", "ROS", "C++", "CUDA"]
    },
    {
      id: 5,
      title: "Financial Forecasting System",
      category: "Data Analysis",
      description: "Time-series forecasting model that predicts market movements with exceptional accuracy.",
      image: "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Keras", "NumPy", "Pandas", "AWS"]
    },
    {
      id: 6,
      title: "Sentiment Analysis API",
      category: "NLP",
      description: "Scalable API for analyzing sentiment in text data across multiple languages and contexts.",
      image: "https://images.pexels.com/photos/8728388/pexels-photo-8728388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Transformers", "FastAPI", "Redis", "Docker"]
    }
  ];
  
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#1a0b2e] opacity-80 z-0"></div>
      
      {/* Gradient accent */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Projects"
          subtitle="Showcase"
          gradient="from-blue-400 to-purple-400"
        />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                  : 'bg-purple-900/30 text-white/70 hover:bg-purple-900/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-900/30 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs bg-purple-500/30 text-purple-300 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-black/40 text-blue-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300 flex items-center">
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;