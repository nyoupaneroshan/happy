import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blogs';
import BlogCard from '../ui/BlogCard';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';

const RecentBlogs: React.FC = () => {
  const recentPosts = blogPosts.slice(0, 3);
  
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionHeading
          title="Latest Dental Tips & News"
          subtitle="Discover the latest in dental care with expert advice, tips, and product information from our dental professionals."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} compact />
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
            to="/blog"
            variant="outline"
            size="lg"
            icon={<Book size={18} />}
          >
            Read All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentBlogs;