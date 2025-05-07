import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 h-[calc(100vh-80px)] flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the Art and
            <span className="block">Science of Tea</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Explore the world's finest teas and their incredible health benefits. From ancient traditions to modern wellness, learn why tea is more than just a beverage.
          </p>
          <a
            href="#types"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#types')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Tea Types
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#f5f5f0"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;