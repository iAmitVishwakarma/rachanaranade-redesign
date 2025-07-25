import React from 'react';
import useBlogStore from '../../stores/blogStore';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BlogCard } from '../../pages/BlogPage';

const HomeBlogSection = () => {
    const { posts } = useBlogStore();
    // Take the first 2 blog posts
    const latestArticles = posts.slice(1, 4 );

    return (
        <section className="bg-white py-16 sm:py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-darkText text-center mb-12">Latest Articles</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {latestArticles.map(post => (
                                    <BlogCard
                                        key={post.id}
                                        post={post} 
                                     
                                    />
                                ))}
                            </div>
            </div>
        </section>
    );
};

export default HomeBlogSection;