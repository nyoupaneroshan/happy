import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import FeatureBlocks from '../components/sections/FeatureBlocks';
import Testimonials from '../components/sections/Testimonials';
import RecentBlogs from '../components/sections/RecentBlogs';
import NewsletterCTA from '../components/sections/NewsletterCTA';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedProducts />
      <FeatureBlocks />
      
      {/* Animated Stats Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '99%', label: 'Customer Satisfaction' },
              { value: '10M+', label: 'Products Sold' },
              { value: '25+', label: 'Years Experience' },
              { value: '50+', label: 'Countries' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      {/* <RecentBlogs /> */}
      <NewsletterCTA />
    </motion.div>
  );
};

export default Home;