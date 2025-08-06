'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UserIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

export default function BlogPostPage({ postId }) {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isAdmin] = useState(false); // Set via auth context later

  // Fetch post data
  useEffect(() => {
    const fetchPost = async () => {
      // Replace with actual API call in production:
      // const res = await fetch(`/api/posts/${postId}`);
      // const data = await res.json();
      
      const mockPost = {
        id: postId,
        title: "The Secret Behind Our Signature Chowmein",
        content: `<p class="lead">For generations, our family has perfected the art of Chowmein...</p>
        <h2>The Family Recipe</h2>
        <p>It all began in my grandmother's kitchen...</p>`,
        excerpt: "Discover the family recipe that started it all",
        featuredImage: "/assets/images/blog-chowmein-detail.jpg",
        author: {
          name: "Chef Rajesh",
          avatar: "/assets/images/chef-rajesh.jpg",
          bio: "Head chef at Yasoda Chowmein with 15 years experience"
        },
        createdAt: "2023-05-15T10:00:00Z",
        readTime: "4 min read",
        category: "Recipes",
        tags: ["chowmein", "family recipe", "nepali cuisine"]
      };
      setPost(mockPost);

      const mockRelated = [
        {
          id: "2",
          title: "Sustainable Sourcing in Nepali Cuisine",
          excerpt: "How we partner with local farmers",
          image: "/assets/images/blog-farm.jpg",
          date: "April 2, 2023"
        },
        {
          id: "3",
          title: "The Evolution of Nepali Street Food",
          excerpt: "From traditional markets to modern restaurants",
          image: "/assets/images/blog-streetfood.jpg",
          date: "March 10, 2023"
        }
      ];
      setRelatedPosts(mockRelated);
    };

    fetchPost();
  }, [postId]);

  if (!post) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="bg-white">
      {/* Admin Bar */}
      {isAdmin && (
        <div className="bg-gray-800 text-white py-2 px-4 flex justify-between items-center">
          <span>Admin Mode</span>
          <Link 
            href={`/admin/posts/edit/${post.id}`}
            className="flex items-center text-sm bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded"
          >
            <PencilSquareIcon className="h-4 w-4 mr-1" />
            Edit Post
          </Link>
        </div>
      )}

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
            <span className="inline-flex items-center">
              <ClockIcon className="h-4 w-4 mr-1" />
              {post.readTime}
            </span>
            <span className="inline-flex items-center">
              <UserIcon className="h-4 w-4 mr-1" />
              By {post.author.name}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-500 bg-orange-50 rounded-full">
              {post.category}
            </span>
            {post.tags.map(tag => (
              <span key={tag} className="inline-block px-3 py-1 text-sm font-semibold text-gray-500 bg-gray-100 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Featured Image */}
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
        </header>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="mt-16 p-6 bg-gray-50 rounded-xl flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">About {post.author.name}</h3>
              <p className="mt-2 text-gray-600">{post.author.bio}</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-orange-500">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}