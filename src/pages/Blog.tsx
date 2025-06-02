import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';
import BlogCard from '../components/ui/BlogCard';
import SectionHeading from '../components/ui/SectionHeading';
import { Search, Filter } from 'lucide-react';
import NewsletterCTA from '../components/sections/NewsletterCTA';

// Helper function to generate a slug from a title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
};

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Extract unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
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
              Dental Health Blog
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Expert tips, advice, and insights for better oral health
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-12">
        <div className="container">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div className="flex items-center">
              <Filter className="mr-2 text-gray-500" size={18} />
              <select
                value={selectedCategory}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                // Use the slug if it exists, otherwise generate one from the title
                const slug = post.slug || generateSlug(post.title);
                return (
                  <Link to={`/blog/${slug}`} key={post.id}>
                    <BlogCard post={post} />
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
      
      <NewsletterCTA />
    </motion.div>
  );
};

export default Blog;