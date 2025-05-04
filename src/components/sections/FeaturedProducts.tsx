import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionHeading
          title="Featured Products"
          subtitle="Discover our premium toothpaste collection designed to give you a brighter, healthier smile."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            component={Link}
            to="/products"
            variant="secondary"
            size="lg"
            icon={<ShoppingBag size={18} />}
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;