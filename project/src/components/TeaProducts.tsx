import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Premium Green Tea',
    price: '$24.99',
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Hand-picked Japanese Sencha green tea leaves with a smooth, refreshing taste.'
  },
  {
    name: 'Earl Grey Black Tea',
    price: '$22.99',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Classic black tea blend with bergamot oil for a distinctive citrus aroma.'
  },
  {
    name: 'Jasmine Oolong',
    price: '$26.99',
    image: 'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Semi-oxidized oolong tea scented with fresh jasmine flowers.'
  },
  {
    name: 'White Tea Collection',
    price: '$29.99',
    image: 'https://images.pexels.com/photos/1638282/pexels-photo-1638282.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Delicate white tea buds with subtle floral notes and natural sweetness.'
  }
];

const TeaProducts = () => {
  return (
    <section id="products" className="py-20 bg-[#f5f5f0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium teas, sourced from the finest tea gardens around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    {product.price}
                  </span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeaProducts;