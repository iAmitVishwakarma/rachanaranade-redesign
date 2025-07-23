// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">CA Rachana Ranade</h3>
//             <p className="text-gray-300">Making finance simple for everyone through easy-to-understand courses in Hindi.</p>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-300 hover:text-white transition">Home</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition">Courses</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition">About</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition">Contact</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Courses</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-300 hover:text-white transition">Stock Market</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition">Mutual Funds</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition">Business Models</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-white transition">All Courses</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Connect</h4>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-300 hover:text-white transition">
//                 <i className="fab fa-youtube text-xl"></i>
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition">
//                 <i className="fab fa-instagram text-xl"></i>
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition">
//                 <i className="fab fa-linkedin text-xl"></i>
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition">
//                 <i className="fab fa-twitter text-xl"></i>
//               </a>
//             </div>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
//           <p>© {new Date().getFullYear()} CA Rachana Ranade. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
// import { Link } from 'lucide-react';

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <footer
      className="bg-gray-100 text-gray-700 text-sm pt-10 pb-4 px-6 md:px-20"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Brand */}
        <div>
          <h2 className="text-lg font-bold text-teal-600 mb-2">
            CA Rachana Ranade
          </h2>
          <p className="text-sm">
            Learn finance & stock market in simple Hindi. Join 10L+ students and grow financially!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/courses" className="hover:text-teal-600">Courses</Link></li>
            <li><Link to="/financial-calculators" className="hover:text-teal-600">Financial Calculators</Link></li>
            <li><Link to="/membership" className="hover:text-teal-600">Membership</Link></li>
            <li><Link to="/blog" className="hover:text-teal-600">Blog</Link></li>
            <li><Link to="/about" className="hover:text-teal-600">About Us</Link></li> {/* <-- Yahan par add karein */}
          </ul>
        </div>
        {/* Policies */}
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <ul className="space-y-1">
            <li>Email: support@rachanaranade.com</li>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} CA Rachana Ranade. All rights reserved.
      </div>
    </footer>
  );
}
