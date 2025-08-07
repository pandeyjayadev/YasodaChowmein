'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { STRAPI_API_URL } from '@/lib/api'; // Make sure this points to your Strapi URL

export default function BlogListPage() {
  const [posts, setPosts] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts data from Strapi
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch all posts
        const res = await fetch(`${STRAPI_API_URL}/api/blogs?populate=*`);
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        
        const formattedPosts = data.data.map(item => ({
          id: item.id,
          ...item.attributes,
          featuredImage: item.attributes.featuredImage?.data?.attributes?.url 
            ? `${STRAPI_API_URL}${item.attributes.featuredImage.data.attributes.url}`
            : '/default-image.jpg',
          author: item.attributes.author?.data?.attributes || {
            name: 'Unknown Author',
            avatar: '/default-avatar.jpg',
            bio: ''
          }
        }));
        setPosts(formattedPosts);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  if (posts.length === 0) return <div className="text-center py-20">No posts found.</div>;

  return (
    <div className="bg-white">
      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-25">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-orange-500">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600">{post.content.substring(0, 150)}...</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}