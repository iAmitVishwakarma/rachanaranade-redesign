import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Menu, X } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses' },
    { label: 'Calculators', path: '/financial-calculators' },
    { label: 'Blog', path: '/blog' },
    { label: 'Membership', path: '/membership' },
    { label: 'About', path: '/about' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
        const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

       useEffect(() => {
        const loggedInStatus = localStorage.getItem('rr_is_logged_in');
        if (loggedInStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        // Clear authentication data from localStorage
        localStorage.removeItem('rr_is_logged_in');
        localStorage.removeItem('rr_user_auth');
        setIsLoggedIn(false);
        // Navigate to home page after logout
        navigate('/');
    };


    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.2, ease: "easeOut" }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, ease: "easeIn" }
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
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
                                className={({ isActive }) =>
                                    `relative text-base font-medium text-gray-700 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-primary after:scale-x-0 after:origin-left after:transition-transform ${
                                    isActive ? 'text-primary after:scale-x-100' : 'after:hover:scale-x-100'
                                    }`
                                }
                            > 
                                {item.label}
                            </NavLink>
                        ))}
                          {isLoggedIn ? (
                            <button onClick={handleLogout} className="ml-4 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md transition-all">
                                <LogOut size={16} />
                                <span>Logout</span>
                            </button>
                        ) : (
                            <Link to="/login" className="ml-4 bg-primary hover:opacity-90 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md transition-all">
                                Login
                            </Link>
                        )}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        className="md:hidden bg-white shadow-lg border-t border-gray-100"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={mobileMenuVariants}
                    >
                        <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.label}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                        isActive ? 'bg-teal-50 text-primary' : 'text-gray-700 hover:bg-gray-50'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                            <Link
                                to="/login"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 text-center bg-primary hover:opacity-90 text-white px-4 py-2.5 rounded-md text-base font-medium"
                            >
                                Login
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;