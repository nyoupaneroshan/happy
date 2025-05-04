import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import SectionHeading from '../components/ui/SectionHeading';
import { Filter } from 'lucide-react';
import NewsletterCTA from '../components/sections/NewsletterCTA';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'name';

const Products: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      case 'price-low':
        return a.variants[0].price - b.variants[0].price;
      case 'price-high':
        return b.variants[0].price - a.variants[0].price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Products
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover our premium collection of toothpaste formulated for your specific needs.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <SectionHeading
              title="All Products"
              withLine
            />
            
            <div className="flex items-center mt-4 md:mt-0">
              <Filter className="mr-2 text-gray-500" size={18} />
              <span className="text-gray-700 mr-2">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Our Toothpaste */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Why Choose Our Toothpaste?"
            subtitle="At White Happydent, we combine cutting-edge science with premium ingredients to create toothpaste that delivers exceptional results."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Clinically Proven Results",
                description: "Our formulations are backed by extensive research and testing to ensure they deliver the promised benefits."
              },
              {
                title: "Premium Ingredients",
                description: "We use only the highest quality ingredients, carefully selected for their effectiveness and safety."
              },
              {
                title: "Expert Formulation",
                description: "Developed by dental professionals with decades of experience in oral care."
              },
              {
                title: "No Harmful Chemicals",
                description: "Free from harsh ingredients like parabens, sulfates, and artificial colors that can irritate sensitive mouths."
              },
              {
                title: "Refreshing Experience",
                description: "Designed to make brushing a pleasure with long-lasting freshness and great taste."
              },
              {
                title: "Sustainable Packaging",
                description: "Committed to reducing our environmental impact with recyclable and eco-friendly packaging."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <NewsletterCTA />
    </motion.div>
  );
};

export default Products;