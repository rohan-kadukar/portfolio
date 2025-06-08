// src/components/Blog.js
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const BlogPost = ({ title, content, thumbnail, publishedDate, url }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
    className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700"
  >
    {/* Gradient overlay for thumbnail */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
    
    {thumbnail && (
      <div className="relative w-full h-56 overflow-hidden">
        <Image 
          src={thumbnail} 
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    )}
    
    <div className="p-6">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
        <FaCalendarAlt className="w-4 h-4" />
        <span>
          {new Date(publishedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {content}
      </p>
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors duration-300"
        >
          Read More
          <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const blogUrl = 'https://rohan-kadukar.blogspot.com/';

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;
        
        if (!API_KEY) {
          throw new Error('Blogger API key is not configured. Please add NEXT_PUBLIC_BLOGGER_API_KEY to your environment variables.');
        }
        
        const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/byurl?url=${encodeURIComponent(blogUrl)}&key=${API_KEY}`);
        const blogData = await response.json();
        
        if (blogData.error) {
          throw new Error(blogData.error.message || 'Failed to fetch blog data');
        }
        
        if (blogData.id) {
          const postsResponse = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogData.id}/posts?key=${API_KEY}&maxResults=6&orderBy=published`);
          const postsData = await postsResponse.json();
          
          if (postsData.error) {
            throw new Error(postsData.error.message || 'Failed to fetch blog posts');
          }
          
          setPosts(postsData.items || []);
        } else {
          throw new Error('Blog ID not found');
        }
        setLoading(false);
      } catch (err) {
        console.error('Blog fetch error:', err);
        setError(err.message || 'Failed to fetch blog posts. Please check your API key configuration.');
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [blogUrl]);

  return (
    <section id="blog" className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 transition-colors duration-500 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02] dark:opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-emerald-800 to-teal-800 dark:from-gray-100 dark:via-emerald-200 dark:to-teal-200 text-transparent bg-clip-text animate-gradient-x">
            Latest Blog Posts
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my thoughts, experiences, and insights on technology and development
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-emerald-600 dark:text-emerald-400 font-semibold">
                Loading posts...
              </div>
            </div>
          </div>
        ) : error ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl"
          >
            <p className="text-lg mb-4">{error}</p>
            <a
              href={blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Visit My Blog
              <FaArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogPost
                key={post.id}
                title={post.title}
                content={post.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...'}
                thumbnail={post.images?.[0]?.url}
                publishedDate={post.published}
                url={post.url}
              />
            ))}
          </div>
        )}

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Posts
            <FaArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;