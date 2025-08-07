'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { STRAPI_API_URL } from '@/lib/api';

export default function BlogPostPage({ params }) {
  const { slug } = params;
  console.log('Slug received by BlogPostPage:', slug);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch post data from Strapi
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch main post
        console.log('Fetching post with slug:', slug);
        const requestUrl = `${STRAPI_API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`;
        console.log('Attempting to fetch from URL:', requestUrl);
        const postRes = await fetch(requestUrl);
        
        if (!postRes.ok) throw new Error('Failed to fetch post');
        
        const postData = await postRes.json();
        console.log('Post data received:', postData);
        
        if (!postData.data || postData.data.length === 0) {
          throw new Error('Post not found');
        }
        
        const postItem = postData.data[0];
        
        // Format the post data
        const formattedPost = {
          id: postItem.id,
          ...postItem.attributes,
          featuredImage: postItem.attributes.featuredImage?.data?.attributes?.url 
            ? `${STRAPI_API_URL}${postItem.attributes.featuredImage.data.attributes.url}`
            : '/default-image.jpg',
          author: postItem.attributes.author?.data?.attributes || {
            name: 'Unknown Author',
            avatar: '/default-avatar.jpg',
            bio: ''
          }
        };
        
        setPost(formattedPost);
        
      } catch (err) {
        console.error('Error fetching post:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  if (!post) return <div className="text-center py-20">Post not found</div>;

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-25">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Blog
        </Link>
      </nav>

      {/* Article */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
            <span className="inline-flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              {new Date(post.createdAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            {post.readTime && (
              <span className="inline-flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" />
                {post.readTime}
              </span>
            )}
            <span className="inline-flex items-center">
              <UserIcon className="h-4 w-4 mr-1" />
              By {post.author?.name || 'Unknown Author'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.category && (
              <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-500 bg-orange-50 rounded-full">
                {post.category}
              </span>
            )}
            {post.tags?.map(tag => (
              <span key={tag} className="inline-block px-3 py-1 text-sm font-semibold text-gray-500 bg-gray-100 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={post.featuredImage}
                alt={`Featured image for ${post.title}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          {post.content && (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}

          {/* Author Bio */}
          {post.author && (
            <div className="mt-16 p-6 bg-gray-50 rounded-xl flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <Image
                  src={post.author.avatar || '/default-avatar.jpg'}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">About {post.author.name}</h3>
                {post.author.bio && (
                  <p className="mt-2 text-gray-600">{post.author.bio}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}