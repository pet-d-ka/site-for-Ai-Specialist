import React from 'react';
import { Heart, Brain, Battery, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: 'Heart Health',
    description: 'Regular tea consumption can lower blood pressure and reduce the risk of cardiovascular diseases.'
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-500" />,
    title: 'Mental Clarity',
    description: 'The combination of caffeine and L-theanine improves focus and cognitive performance.'
  },
  {
    icon: <Battery className="w-8 h-8 text-green-500" />,
    title: 'Energy Boost',
    description: 'Natural caffeine content provides sustained energy without the jitters of coffee.'
  },
  {
    icon: <Leaf className="w-8 h-8 text-emerald-500" />,
    title: 'Antioxidants',
    description: 'Rich in polyphenols that help protect cells from damage and support immune function.'
  }
];

const TeaBenefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Health Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tea is more than just a delicious beverage - it's a natural source of wellness with numerous health benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeaBenefits;