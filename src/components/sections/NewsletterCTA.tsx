import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Send } from 'lucide-react';

const NewsletterCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here would be the logic to submit the email to a backend
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };
  
  return (
    <section className="section bg-gradient-to-r from-secondary-500 to-primary-500 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Stay Fresh and Informed
          </motion.h2>
          
          <motion.p 
            className="text-lg opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Subscribe to our newsletter for dental care tips, exclusive offers, and the latest product updates.
          </motion.p>
          
          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20 flex-grow max-w-md"
              required
            />
            <Button 
              type="submit"
              variant="primary" 
              className="bg-white text-secondary-600 hover:bg-gray-100"
              icon={<Send size={16} />}
            >
              Subscribe
            </Button>
          </motion.form>
          
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-white/90"
            >
              Thanks for subscribing! Check your inbox soon for updates.
            </motion.div>
          )}
          
          <motion.p 
            className="mt-6 text-sm opacity-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;