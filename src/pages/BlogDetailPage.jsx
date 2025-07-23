// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link, useParams } from 'react-router-dom';

// import { ArrowLeft, Twitter, Linkedin, Facebook, Share2 } from 'lucide-react';
// import NewsletterCTA from '../components/NewsletterCTA'; // Re-using your existing component

// // --- Main Blog Detail Page Component ---
// const BlogDetailPage = () => {
    
//     const { id } = useParams(); // In a real app, you'd use this ID. For now, it's for structure.
   

//     // Filter for related posts - show posts from the same category, excluding the current one.
//     const relatedPosts = blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);
//     // Social share URLs
//     const shareUrl = window.location.href;
//     const shareTitle = `Check out this article: ${post.title}`;
//     const shareLinks = {
//         twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
//         linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`,
//         facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
//     };


//     return (
//         <div className="bg-white">
//             <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
//                 <Link to="/blog" className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-8 font-semibold group">
//                     <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" />
//                     Back to Blog
//                 </Link>

//                 {/* 1. Blog Hero */}
//                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//                     <p className="text-teal-600 font-semibold mb-2">{post.category}</p>
//                     <h1 className="text-4xl sm:text-5xl font-extrabold text-darkText tracking-tight mb-4">{post.title}</h1>
//                     <div className="flex items-center text-lightText text-sm">
//                         <p>By {post.author}</p>
//                         <span className="mx-2">|</span>
//                         <p>Published on {post.date}</p>
//                     </div>
//                 </motion.div>

//                 <motion.img 
//                     src={post.image} 
//                     alt={post.title} 
//                     className="w-full h-auto max-h-[500px] object-cover rounded-2xl my-8 sm:my-12 shadow-lg" 
//                     initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
//                 />

//                 {/* Main Content & Share Bar */}
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//                     {/* 3. Share Bar (Desktop) */}
//                     <div className="hidden lg:flex lg:col-span-1 flex-col items-center space-y-4 pt-16 sticky top-24 h-screen">
//                         <p className="font-semibold text-xs text-gray-400 tracking-widest uppercase">SHARE</p>
//                         <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"><Twitter size={20} className="text-gray-600" /></a>
//                         <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"><Linkedin size={20} className="text-gray-600" /></a>
//                         <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"><Facebook size={20} className="text-gray-600" /></a>
//                     </div>
                    
//                     {/* 2. Content Section */}
//                     <article className="prose prose-lg lg:col-span-11 max-w-none prose-h2:font-bold prose-h2:text-darkText prose-a:text-teal-600 hover:prose-a:text-teal-700">
//                         <p className="lead">
//                             This is the lead paragraph of the article, designed to grab the reader's attention. {post.excerpt}
//                         </p>
//                         <p>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
//                         </p>
//                         <h2>Understanding the Core Concepts</h2>
//                         <p>
//                             Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
//                         </p>
//                         <blockquote>
//                             "The best investment you can make is in yourself." - A wise person
//                         </blockquote>
//                         <ul>
//                             <li><strong>Diversification:</strong> Don't put all your eggs in one basket.</li>
//                             <li><strong>Compounding:</strong> Let your money work for you over the long term.</li>
//                             <li><strong>Risk Management:</strong> Understand your risk tolerance before investing.</li>
//                         </ul>
//                         <p>
//                             Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
//                         </p>
//                         <img src="https://picsum.photos/seed/inline-image/800/400" alt="Inline content" className="rounded-xl shadow-md"/>
//                         <h2>Conclusion</h2>
//                         <p>
//                             Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam.
//                         </p>
//                     </article>
//                 </div>

//                 {/* 5. Author Bio */}
//                 <div className="mt-16 pt-8 border-t border-gray-200 flex items-center">
//                     <img src="https://picsum.photos/seed/rachana-bio/100/100" alt="CA Rachana Ranade" className="w-20 h-20 rounded-full object-cover" />
//                     <div className="ml-6">
//                         <p className="text-sm text-gray-500">WRITTEN BY</p>
//                         <h4 className="text-xl font-bold text-darkText">{post.author}</h4>
//                         <p className="text-lightText mt-1">India's most trusted finance mentor, on a mission to make financial education simple and accessible for all.</p>
//                     </div>
//                 </div>

//                 {/* 3. Share Bar (Mobile) */}
//                 <div className="lg:hidden mt-12 text-center">
//                      <p className="font-semibold text-sm text-gray-500 mb-4">Share this article</p>
//                      <div className="flex justify-center space-x-4">
//                         <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full"><Twitter size={24} className="text-gray-700" /></a>
//                         <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full"><Linkedin size={24} className="text-gray-700" /></a>
//                         <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full"><Facebook size={24} className="text-gray-700" /></a>
//                     </div>
//                 </div>

//                 {/* 7. Related Posts */}
//               { relatedPosts.length > 0 && <div className="mt-20">
//                     <h3 className="text-2xl font-bold text-darkText mb-8 text-center">Read More Like This</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {relatedPosts.map(related => (
//                             <Link to={`/blog/${related.id}`} key={related.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//                                 <img src={related.image} alt={related.title} className="w-full h-40 object-cover" />
//                                 <div className="p-4">
//                                     <p className="text-sm text-teal-600 font-semibold">{related.category}</p>
//                                     <h4 className="font-bold text-darkText mt-1">{related.title}</h4>
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>}
//             </div>

//             {/* 8. Newsletter Signup */}
//             <NewsletterCTA />
//         </div>
//     );
// };

// export default BlogDetailPage;

import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Twitter, Linkedin, Facebook } from 'lucide-react';

import useBlogStore from '../stores/blogStore';
import useInstructorStore from '../stores/instructorStore';
import NewsletterCTA from '../components/NewsletterCTA';

// --- Helper function to render structured content from your data ---
const renderContent = (contentArray) => {
    if (!contentArray) return null;

    return contentArray.map((block, index) => {
        switch (block.type) {
            case 'paragraph':
                return <p key={index}>{block.text}</p>;
            case 'heading':
                return <h2 key={index} className="!mt-10 !mb-4">{block.text}</h2>;
            case 'list':
                return (
                    <ul key={index} className="!list-disc !pl-6">
                        {block.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                );
            default:
                return null;
        }
    });
};

// --- Main Blog Detail Page Component ---
const BlogDetailPage = () => {
    const { slug } = useParams(); // Use slug from URL
    const { posts } = useBlogStore();
    const { instructors } = useInstructorStore();

    // Find the current post and its author
    const post = posts.find(p => p.slug === slug);
    const author = post ? instructors.find(i => i.id === post.author_id) : null;

    // If post is not found, redirect or show a 404 page
    if (!post) {
        return <Navigate to="/404" replace />; // Or render a "Not Found" component
    }

    // Filter for related posts from the same primary category, excluding the current one
    const primaryCategory = post.tags[0];
    const relatedPosts = posts
        .filter(p => p.tags.includes(primaryCategory) && p.slug !== post.slug)
        .slice(0, 3);

    // Social share URLs
    const shareUrl = window.location.href;
    const shareTitle = `Check out this article: ${post.title}`;
    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    };

    const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="bg-white">
            <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
                <Link to="/blog" className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-8 font-semibold group">
                    <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to All Articles
                </Link>

                {/* Blog Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <p className="text-teal-600 font-semibold mb-2">{primaryCategory}</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-darkText tracking-tight mb-4">{post.title}</h1>
                    <div className="flex items-center text-lightText text-sm">
                        <p>By {author?.name || 'Unknown Author'}</p>
                        <span className="mx-2">|</span>
                        <p>Published on {formatDate(post.date)}</p>
                    </div>
                </motion.div>

                <motion.img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-auto max-h-[500px] object-cover rounded-2xl my-8 sm:my-12 shadow-lg" 
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
                />

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Share Bar (Desktop) */}
                    <aside className="hidden lg:flex lg:col-span-1 flex-col items-center space-y-4 pt-16 sticky top-24 h-screen">
                        <p className="font-semibold text-xs text-gray-400 tracking-widest uppercase">SHARE</p>
                        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"><Twitter size={20} className="text-gray-600" /></a>
                        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"><Linkedin size={20} className="text-gray-600" /></a>
                        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"><Facebook size={20} className="text-gray-600" /></a>
                    </aside>
                    
                    {/* Article Content */}
                    <article className="prose prose-lg lg:col-span-11 max-w-none prose-h2:font-bold prose-h2:text-darkText prose-a:text-teal-600 hover:prose-a:text-teal-700">
                        <p className="lead">{post.excerpt}</p>
                        {/* Render the structured content */}
                        {renderContent(post.content)}
                        <br />
                       { ExtraContent()}
                    </article>
                </div>

                {/* Author Bio */}
                {author && (
                    <div className="mt-16 pt-8 border-t border-gray-200 flex items-center">
                        <img src={author.profile_image} alt={author.name} className="w-20 h-20 rounded-full object-cover" />
                        <div className="ml-6">
                            <p className="text-sm text-gray-500">WRITTEN BY</p>
                            <h4 className="text-xl font-bold text-darkText">{author.name}</h4>
                            <p className="text-lightText mt-1">{author.bio}</p>
                        </div>
                    </div>
                )}
                
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="mt-20">
                        <h3 className="text-2xl font-bold text-darkText mb-8 text-center">Read More Like This</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map(related => (
                                <Link to={`/blog/${related.slug}`} key={related.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <img src={related.image} alt={related.title} className="w-full h-40 object-cover" />
                                    <div className="p-4">
                                        <p className="text-sm text-teal-600 font-semibold">{related.tags[0]}</p>
                                        <h4 className="font-bold text-darkText mt-1">{related.title}</h4>
                                     
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <NewsletterCTA />
        </div>
    );
};



 

export default BlogDetailPage;

const ExtraContent = ()=> (
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate ab quibusdam fugit soluta beatae. Sunt recusandae voluptatem ea rem exercitationem quisquam dolores ipsum ullam neque assumenda! Magni doloremque dignissimos dolorum delectus ullam, similique sapiente ipsam est architecto earum quisquam quasi ex quia? Illum saepe voluptatem tempora ut illo consequuntur, voluptatibus maiores nulla corporis ex maxime quisquam cupiditate impedit doloribus pariatur unde quod voluptas nostrum rerum labore! Delectus aperiam harum sapiente sunt ducimus officia tempore veniam itaque, suscipit rerum minus perspiciatis quam ipsum autem maxime voluptate temporibus distinctio laudantium nulla a veritatis doloribus quaerat quod? Pariatur provident exercitationem non eaque reiciendis, veritatis molestias repudiandae, dignissimos corrupti deserunt, excepturi ipsum corporis! Quod laudantium aperiam vitae magnam esse sint. Aliquid incidunt harum sit eos. Perspiciatis eligendi vel a expedita, temporibus reprehenderit exercitationem dolores sunt eum assumenda modi nesciunt blanditiis adipisci aut quia illum esse in rerum placeat, sint autem dolorem. Explicabo officia earum nostrum amet, alias vel totam eveniet tempore pariatur, ullam eaque fuga quaerat! Vel inventore reiciendis, mollitia consectetur quas incidunt commodi nesciunt dolorum, excepturi eos consequatur neque nihil eveniet? Fuga rerum labore incidunt, ad odit temporibus recusandae voluptatem ab nisi. Incidunt vitae asperiores numquam nihil earum doloremque ab, assumenda sequi omnis temporibus dolores molestiae, id, at ullam. Culpa quisquam dolor sequi aperiam consequatur eius reprehenderit maxime obcaecati excepturi deleniti? Praesentium impedit obcaecati quasi accusamus dolores, quaerat illum. Commodi quidem ducimus alias, aspernatur inventore odit ipsa. Delectus, minus perferendis voluptas in fuga magni est aliquid amet nostrum harum veritatis nulla molestiae consequuntur architecto distinctio non consectetur. Minus excepturi placeat ipsum blanditiis minima vero sequi in consequuntur, itaque voluptates velit ipsa alias eum optio debitis totam corporis numquam odit harum beatae incidunt assumenda! Excepturi sint autem, et quae delectus eum repellat officia deserunt, consequatur alias aliquid, nihil totam unde molestiae consectetur eaque?'
)