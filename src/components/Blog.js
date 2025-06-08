// src/components/Blog.js
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BlogPost = ({ title, content, thumbnail, publishedDate, url }) => (
  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 group">
    {thumbnail && (
      <div className="relative w-full h-48 overflow-hidden">
        <Image 
          src={thumbnail} 
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {content}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {new Date(publishedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
        >
          Read More →
        </a>
      </div>
    </div>
  </div>
);

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const blogUrl = 'https://rohan-kadukar.blogspot.com/';

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // Note: To use this component, you need to:
        // 1. Go to Google Cloud Console (https://console.cloud.google.com)
        // 2. Create a new project or select an existing one
        // 3. Enable the Blogger API v3
        // 4. Create credentials (API key)
        // 5. Replace YOUR_API_KEY below with your actual API key
        // 6. Add appropriate API restrictions in Google Cloud Console
        const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY || 'YOUR_API_KEY';
        
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
    <section id="blog" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 transition-colors duration-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02] dark:opacity-[0.03]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-emerald-800 to-teal-800 dark:from-gray-100 dark:via-emerald-200 dark:to-teal-200 text-transparent bg-clip-text animate-gradient-x">My Blog</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I share my thoughts and learnings on my personal blog. Check out my latest posts!
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 dark:text-red-400">
            {error}
            <div className="mt-4">
              <a
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
              >
                Visit My Blog
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
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

        <div className="text-center mt-12">
          <a
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            View All Posts
          </a>
        </div>

        
        {/* 
          If you plan to fetch blog posts and display summaries here in the future:
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[1,2,3].map(item => (
              <div key={item} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg animate-slideInUp">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Blog Post Title {item}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                  A short summary of the blog post will go here. This is just a placeholder...
                </p>
                <a href="#" className="text-blue-500 hover:underline text-sm font-medium">Read More &rarr;</a>
              </div>
            ))}
          </div> 
        */}
      </div>
    </section>
  );
};

export default Blog;