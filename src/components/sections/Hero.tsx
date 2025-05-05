import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-primary-500/20 to-white/0" />
        <div className="absolute pattern-dots-xl text-primary-500 top-0 left-0 w-full h-full" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary-100 text-primary-600 font-medium px-3 py-1 rounded-full mb-4">
              Advanced Dental Care
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A Brighter Smile Begins with 
              <span className="text-primary-500"> White Happydent</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Discover our premium toothpaste collection designed to strengthen enamel, 
              fight cavities, and give you that confident, fresh feeling all day long.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products">
            <Button
                // as={Link}
                // to="/products"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Explore Products
              </Button>
              </Link>

              <Link to="/about">
              <Button
                // as={Link}
                // to="/about"
                variant="outline"
                size="lg"
              >
                Learn More
              </Button>
              </Link>
            </div>
            
            <div className="flex items-center mt-8 space-x-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">4.9 star rating</span>
              </div>
              <div className="text-gray-600">
                <span className="font-bold">1,200+</span> Happy Customers
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-full p-4 absolute -top-10 -right-10 w-64 h-64 blur-3xl" />
            <img
              src="https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="White Happydent Toothpaste"
              className="w-full h-auto rounded-xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-white shadow-xl py-4 px-6 z-20">
              <div className="flex items-center gap-3">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#5CDED1" />
                  <path d="M17 27L25 20L17 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-500">Clinically Proven</p>
                  <p className="text-lg font-bold">99% Effective</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;