// import React, { useEffect, useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';
// import blogsData from '../data/blogData'; 

// export default function BlogSection() {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     AOS.init({ duration: 800 });
//    setBlogs(blogsData);
//   }, []);

//   return (
//     <section className="bg-white py-20 px-6 md:px-20" data-aos="fade-up">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
//           Latest from the Blog
//         </h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {blogs.map((blog) => (
//             <Link
//               key={blog.id}
//               to={`/blog/${blog.id}`}
//               className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition"
//             >
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-44 object-cover"
//               />
//               <div className="p-5">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   {blog.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-3">{blog.excerpt}</p>
//                 <span className="text-xs text-gray-400">{blog.date}</span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
