import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../data/blogs';

interface BlogCardProps {
  post: BlogPost;
  compact?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, compact = false }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.article 
      className="bg-white rounded-lg overflow-hidden shadow-md"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className={`w-full object-cover ${compact ? 'h-48' : 'h-60'}`}
        />
        <div className="absolute top-4 left-4 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded">
          {post.category}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>By {post.author}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 line-clamp-2">
          <Link to={`/blog/${post.slug}`} className="hover:text-primary-500 transition-colors">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        {!compact && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span key={index} className="inline-flex items-center text-xs bg-gray-100 text-gray-800 rounded-full px-2 py-1">
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <Link 
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
        >
          Read More
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;