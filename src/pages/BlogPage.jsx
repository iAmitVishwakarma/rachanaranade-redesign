
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useBlogStore from '../stores/blogStore'; // ZUSTAND STORE
import useInstructorStore from '../stores/instructorStore'; // ZUSTAND STORE

// Helper function to format the date
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

// --- Reusable Blog Card Component ---
const BlogCard = ({ post, authorName, isSearchResult = false }) => (
    <motion.div
        whileHover={{ y: -8 }}
        className={`bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col ${isSearchResult ? 'sm:flex-row' : ''}`}
        layout
    >
        <Link to={`/blog/${post.slug}`} className={`w-full ${isSearchResult ? 'sm:w-1/3 sm:h-auto' : 'h-48'}`}>
            <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
            />
        </Link>
        <div className="p-6 flex flex-col flex-grow">
            {/* Using the first tag as the primary category for display */}
            <p className="text-sm text-teal-600 font-semibold">{post.tags[0]}</p>
            <Link to={`/blog/${post.slug}`}>
                <h3 className="text-xl font-bold text-darkText mt-2 hover:underline hover:text-teal-900">{post.title}</h3>
            </Link>
            {!isSearchResult && <p className="text-lightText mt-2 text-sm flex-grow">{post.excerpt}</p>}
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="text-xs text-gray-500">
                    <span>{authorName}</span>
                    <span className="mx-1">·</span>
                    <span>{formatDate(post.date)}</span>
                </div>
                <Link to={`/blog/${post.slug}`} className="text-sm font-semibold text-teal-600 hover:text-teal-700 inline-flex items-center">
                    Read More <ArrowRight size={16} className="ml-1" />
                </Link>
            </div>
        </div>
    </motion.div>
);

// --- Main Blog Page Component ---
const BlogPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [visiblePosts, setVisiblePosts] = useState(3); // Show more posts by default

    // Data is now coming directly from the Zustand stores
    const { posts: blogPosts, loading, error } = useBlogStore();
    const { instructors } = useInstructorStore();

    const isSearching = searchTerm.length > 0;

    // Create a map of instructor IDs to names for easy and efficient lookup
    const instructorMap = useMemo(() => {
        return instructors.reduce((acc, instructor) => {
            acc[instructor.id] = instructor.name;
            return acc;
        }, {});
    }, [instructors]);

    // Dynamically create a unique list of categories from all post tags
    const allCategories = useMemo(() => {
        const categories = new Set();
        blogPosts.forEach(post => {
            post.tags.forEach(tag => categories.add(tag));
        });
        return ['All', ...Array.from(categories)];
    }, [blogPosts]);

    const featuredPost = blogPosts.find(p => p.is_featured);
    const regularPosts = blogPosts.filter(p => !p.is_featured);

    // Memoized filtering logic for performance
    const filteredPosts = useMemo(() => {
        const postsToFilter = isSearching ? blogPosts : regularPosts;
        return postsToFilter
            .filter(post => {
                // If searching, filter by title
                if (isSearching) {
                    return post.title.toLowerCase().includes(searchTerm.toLowerCase());
                }
                // Otherwise, filter by the active category tag
                return activeCategory === 'All' || post.tags.includes(activeCategory);
            });
    }, [searchTerm, activeCategory, isSearching, regularPosts, blogPosts]);
    
    const loadMorePosts = () => {
        setVisiblePosts(prev => prev + 3);
    };

    // Since data is local, loading and error states are less critical but good for robustness
    if (loading) return <div className="text-center py-40">Loading articles...</div>;
    if (error) return <div className="text-center py-40 text-red-500">Error: {error}</div>;

    return (
        <div className="bg-background min-h-screen">
            {/* 1. Hero Section */}
            <section className="bg-white pt-24 pb-16 px-4 text-center">
                <h1 className="text-5xl font-extrabold text-darkText">Finance Insights</h1>
                <p className="text-lg text-lightText mt-4 max-w-2xl mx-auto">Articles and guides by CA Rachana Ranade to help you master your finances.</p>
                <div className="mt-8 max-w-lg mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search for articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
            </section>
            
            <div className="max-w-7xl mx-auto px-4 py-16">
                <AnimatePresence>
                    {isSearching ? (
                        // --- SEARCH RESULTS VIEW ---
                        <motion.div
                            key="search-results"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <h2 className="text-2xl font-bold text-darkText mb-8">Search Results for "{searchTerm}"</h2>
                            <div className="space-y-8">
                                {filteredPosts.length > 0 ? (
                                    filteredPosts.map(post => (
                                        <BlogCard 
                                            key={post.id} 
                                            post={post}
                                            authorName={instructorMap[post.author_id] || 'Unknown Author'}
                                            isSearchResult={true} 
                                        />
                                    ))
                                ) : (
                                    <p className="text-center text-lightText py-10">No articles found. Try a different search term.</p>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        // --- DEFAULT BLOG VIEW ---
                        <motion.div
                            key="default-view"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* Featured Post */}
                            {featuredPost && (
                                <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white p-8 rounded-2xl shadow-lg mb-16"
                                    initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6}}
                                >
                                   <Link to={`/blog/${featuredPost.slug}`}>
                                        <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover rounded-xl" />
                                   </Link>
                                    <div>
                                        <p className="text-sm font-bold text-teal-600">FEATURED</p>
                                       <Link to={`/blog/${featuredPost.slug}`}>
                                            <h2 className="text-3xl font-bold text-darkText mt-2 hover:underline hover:text-teal-900">{featuredPost.title}</h2>
                                        </Link>  
                                        <p className="text-lightText mt-4">{featuredPost.excerpt}</p>
                                      <Link to={`/blog/${featuredPost.slug}`}>
                                            <button className="mt-6 bg-teal-600 text-white font-bold py-3 px-6 rounded-full hover:bg-teal-700 transition-all duration-300">Read Full Article</button>
                                    </Link>
                                    </div>
                                </motion.div>
                            )}

                            {/* Category Filters */}
                            <div className="flex justify-center flex-wrap gap-2 mb-12">
                                {allCategories.map(cat => (
                                    <button key={cat} onClick={() => setActiveCategory(cat)}
                                        className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${activeCategory === cat ? 'bg-teal-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Blog Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredPosts.slice(0, visiblePosts).map(post => (
                                    <BlogCard 
                                        key={post.id}
                                        post={post} 
                                        authorName={instructorMap[post.author_id] || 'Unknown Author'}
                                    />
                                ))}
                            </div>

                            {/* Load More Button */}
                            {visiblePosts < filteredPosts.length && (
                                      <div className="text-center mt-16">
                                    <motion.button 
                                                                whileHover={{ scale: 1.05, gap: '1rem' }}
                                                                whileTap={{ scale: 0.95 }}
                                                                className="inline-flex items-center gap-2 bg-white text-teal-600 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                                                            onClick={loadMorePosts}
                                                            >
                                                                <span>Load More Articles</span>
                                                                <ArrowRight size={20} />
                                                            </motion.button>
                                </div>
                              
                            )}

                              {visiblePosts === filteredPosts.length && (
                                      <div className="text-center mt-16">
                                    <motion.button 
                                                                whileHover={{ scale: 1.05, gap: '1rem' }}
                                                                whileTap={{ scale: 0.95 }}
                                                                className="inline-flex items-center gap-2 bg-white text-teal-600 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                                                            onClick={() => setVisiblePosts(3)}
                                                            >
                                                                <span>Less Load Articles</span>
                                                                <ArrowRight size={20} />
                                                            </motion.button>
                                </div>
                              
                            )}
                        </motion.div>
                    )}

                    
                </AnimatePresence>
            </div>
            
            {/* Newsletter */}
            {!isSearching && (
                <section className="bg-teal-50 py-20 px-4 text-center">
                    <h2 className="text-3xl font-bold text-darkText mb-4">Never Miss an Insight</h2>
                    <p className="text-lg text-lightText max-w-xl mx-auto mb-8">Subscribe to get the latest finance articles and course updates delivered to your inbox.</p>
                    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                        <input type="email" placeholder="Enter your email" className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" required/>
                        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition-all duration-300">
                            Subscribe
                        </button>
                    </form>
                </section>
            )}
        </div>
    );
};

export default BlogPage;