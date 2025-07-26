import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, BarChart2, Youtube, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// A simple SVG component for the social login buttons
const GoogleIcon = () => <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 35.233 44 30.028 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>;

const Auth = () => {
       const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('login');
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        const existingUser = localStorage.getItem('rr_user_auth');
        if (existingUser && activeTab === 'login') {
            const userData = JSON.parse(existingUser);
            setFormData(prev => ({ ...prev, email: userData.email }));
        }
    }, [activeTab]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setMessage({ type: '', text: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (activeTab === 'signup') {
            // Sign Up Logic
            if (!formData.name || !formData.email || !formData.password) {
                setMessage({ type: 'error', text: 'Please fill all fields.' });
                return;
            }
            
            const existingUser = localStorage.getItem('rr_user_auth');
            if (existingUser && JSON.parse(existingUser).email === formData.email) {
                setMessage({ type: 'error', text: 'User with this email already exists.' });
            } else {
                localStorage.setItem('rr_user_auth', JSON.stringify({ 
                    name: formData.name, 
                    email: formData.email,
                    password: formData.password // Note: In production, hash this password
                }));
                localStorage.setItem('rr_is_logged_in', 'true');
                setMessage({ type: 'success', text: 'Account created successfully!' });
                navigate("/");
            }
        } else {
            // Login Logic
            const existingUser = localStorage.getItem('rr_user_auth');
            if (existingUser) {
                const userData = JSON.parse(existingUser);
                if (userData.email === formData.email && userData.password === formData.password) {
                    localStorage.setItem('rr_is_logged_in', 'true');
                    navigate("/");
                } else {
                    setMessage({ type: 'error', text: 'Invalid email or password.' });
                }
            } else {
                setMessage({ type: 'error', text: 'No account found with this email.' });
            }
        }
    };

    return (
        <div className=" bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden">
                
                {/* Left Side: Information */}
                <div className="hidden lg:block bg-gray-50 p-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <h2 className="text-3xl font-bold text-darkText mb-4">Begin Your Financial Journey Today</h2>
                        <p className="text-lightText mb-8">Join over 10 lakh+ learners and master the stock market in simple Hindi with India’s most trusted financial educator.</p>
                        
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><p className="font-bold text-2xl text-primary">10L+</p><p className="text-sm text-lightText">Learners Enrolled</p></div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><p className="font-bold text-2xl text-primary">50+</p><p className="text-sm text-lightText">Courses Sold</p></div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><p className="font-bold text-2xl text-primary">4.8M+</p><p className="text-sm text-lightText">YT Subscribers</p></div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"><p className="font-bold text-2xl text-primary">12+</p><p className="text-sm text-lightText">Years Experience</p></div>
                        </div>
                        <div className="flex items-center gap-7 text-lightText">
                           <div className='flex justify-center items-center'>
                            {[0,1,2].map((i)=>(
                           <img key={i} src={"https://i.pravatar.cc/150?" + i }alt="user"  className='w-10 border-2 rounded-full -mr-5'/>
                           ))
                           }</div>
                            <span >Trusted by thousands of students</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Form */}
                <div className="p-8 sm:p-12">
                    <div className="flex border-b border-gray-200 mb-8">
                        <button onClick={() => setActiveTab('login')} className={`px-6 py-3 font-semibold text-lg transition-colors ${activeTab === 'login' ? 'text-primary border-b-2 border-primary' : 'text-lightText'}`}>Login</button>
                        <button onClick={() => setActiveTab('signup')} className={`px-6 py-3 font-semibold text-lg transition-colors ${activeTab === 'signup' ? 'text-primary border-b-2 border-primary' : 'text-lightText'}`}>Sign Up</button>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            // variants={formVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            <form onSubmit={handleSubmit}>
                                {activeTab === 'signup' && (
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-lightText mb-2" htmlFor="name">Full Name</label>
                                        <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                                    </div>
                                )}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-lightText mb-2" htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-sm font-medium text-lightText" htmlFor="password">Password</label>
                                        {activeTab === 'login' && <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>}
                                    </div>
                                    <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                                </div>

                                {activeTab === 'login' && (
                                    <div className="flex items-center mb-6">
                                        <input type="checkbox" id="remember-me" className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-lightText">Remember me</label>
                                    </div>
                                )}
                                
                                {message.text && (
                                    <div className={`p-3 rounded-lg text-center text-sm mb-4 ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {message.text}
                                    </div>
                                )}

                                <button type="submit" className="w-full bg-darkText text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                                    {activeTab === 'login' ? 'Login' : 'Create Account'}
                                </button>
                            </form>
                            
                            <div className="relative my-8">
                                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-300"></span></div>
                                <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-lightText">Or continue with</span></div>
                            </div>
                            
                            <div className="flex justify-center gap-4">
                                <button className="flex-1 flex justify-center gap-3 items-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50"><GoogleIcon />  Continue with Google</button>
                                {/* Add other social icons as needed */}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Auth;
