import React from 'react';
import useBlogStore from '../../stores/blogStore';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeBlogSection = () => {
    const { posts } = useBlogStore();
    // Take the first 2 blog posts
    const latestArticles = posts.slice(0, 2);

    return (
        <section className="bg-white py-16 sm:py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-darkText text-center mb-12">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {latestArticles.map((post, index) => (
                        <motion.div 
                            key={post.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link to={`/blog/${post.slug}`} className="block bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden group">
                                <div className="overflow-hidden">
                                     <img src="https://via.placeholder.com/600x400.png/E0F2F1/334155?text=Blog+Image" alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-darkText group-hover:text-primary transition-colors">{post.title}</h3>
                                    <p className="text-sm text-lightText mt-2">{post.excerpt}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeBlogSection;