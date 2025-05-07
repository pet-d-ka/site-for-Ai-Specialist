import React from 'react';
import { motion } from 'framer-motion';

const teaTypes = [
  {
    name: 'Green Tea',
    description: 'Light and refreshing with high antioxidant content. Known for boosting metabolism and improving brain function.',
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-green-100'
  },
  {
    name: 'Black Tea',
    description: 'Full-bodied and robust, rich in caffeine and flavonoids. Helps improve heart health and reduces stress.',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-amber-100'
  },
  {
    name: 'Oolong Tea',
    description: 'Partially oxidized tea with complex flavors. Aids in weight management and promotes healthy skin.',
    image: 'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-orange-100'
  }
];

const TeaTypes = () => {
  return (
    <section id="types" className="py-20 bg-[#f5f5f0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Types of Tea
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each type of tea offers unique flavors and health benefits, derived from different processing methods and oxidation levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teaTypes.map((tea, index) => (
            <motion.div
              key={tea.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`rounded-2xl overflow-hidden shadow-lg ${tea.color}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={tea.image}
                  alt={tea.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  {tea.name}
                </h3>
                <p className="text-gray-700">
                  {tea.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeaTypes;