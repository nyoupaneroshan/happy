import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogs';
import BlogCard from '../components/ui/BlogCard';
import SectionHeading from '../components/ui/SectionHeading';
import NewsletterCTA from '../components/sections/NewsletterCTA';
import NotFound from './NotFound';
import ReactMarkdown from 'react-markdown';
import parse from 'html-react-parser';


// Helper function to generate a slug from a title (for consistency)
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => (p.slug || generateSlug(p.title)) === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div>
      {/* Hero Section for Single Post */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-gray-600">{post.date} | {post.category}</p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container max-w-3xl mx-auto">
          <div className="prose lg:prose-xl">
            {/* Display the post image */}
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover mb-6 rounded-md"
              />
            )}

            {/* Render HTML content */}
            {parse(post.content)}
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
};

export default BlogPost;
