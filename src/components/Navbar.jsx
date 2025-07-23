// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <Link to="/" className="flex items-center">
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-bold text-primary"
//           >
//             CA Rachana Ranade
//           </motion.div>
//         </Link>
        
//         <div className="hidden md:flex space-x-8">
//           <Link to="/" className="text-gray-700 hover:text-primary transition">Home</Link>
//           <Link to="/courses" className="text-gray-700 hover:text-primary transition">Courses</Link>
//           <Link to="/about" className="text-gray-700 hover:text-primary transition">About</Link>
//           <Link to="/auth" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition">
//             Login
//           </Link>
//         </div>
        
//         {/* Mobile menu button */}
//         <button className="md:hidden text-gray-700">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {label: 'Home', path: '/' },
      { label: ' Courses', path: '/courses' },
    { label: 'Calculators', path: '/financial-calculators' },
    { label: 'Blog', path: '/blog' },
    { label: 'Membership', path: '/membership' },
     { label: 'About', path: '/about' }, 
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-1 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-teal-600">
          Rachana<span className="text-orange-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => (isActive ? "border-b-2 border-teal-600 rounded  " : `px-1 text-base text-gray-700 hover:text-teal-600 transition`) }
            >
              {item.label}
            </NavLink>
          ))}
          {/* <button className="text-sm text-gray-600 hover:text-blue-600 transition">
            हिंदी
          </button> */}
          <Link
            to="/login"
            className="ml-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <div className="flex flex-col px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-700 hover:text-teal-600 transition"
              >
                {item.label}
              </Link>
            ))}
            <button className="text-sm text-gray-600 text-left">हिंदी</button>
            <Link
              to="/login"
              className="mt-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-1.5 rounded-full text-sm font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


export default Navbar;