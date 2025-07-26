import { motion, AnimatePresence } from "framer-motion";
import heroImg from "/Images/rachana-portrait.webp";
import { Users, Youtube, Star, X } from 'lucide-react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const stats = [ 
    // { label: "Courses", value: "50+" },
     { icon: Users, value: '10L+', label: 'Learners' },
  { icon: Youtube, value: '4.7M+', label: 'Subscribers' },
  { icon: Star, value: '4.8/5', label: 'Rating' },
  ];
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const videoSrc =
    "https://www.youtube.com/embed/pFtUAeUbXZI?si=UFVeLXOU7OI8vFxe";


  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 


  return (
    <>
      <section className="bg-gradient-to-br to-amber-100/60 from-amber-50/10 pt-10 sm:pt-20 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-darkText leading-tight mb-4">
              Financial Market Ka Masterplan, <span className="text-primary">Aapki Bhasha Mein.</span>
            </h1>
            <p className="text-lightText text-base sm:text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              India ke sabse vishwasniya educator ke saath 10 lakh+ logon se juden aur financial freedom ki shuruaat karen.
            </p>
<div className="flex flex-col sm:flex-row gap-4 flex-wrap mb-10 justify-center lg:justify-start">
              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:opacity-90 transition text-white px-8 py-3 rounded-lg font-semibold shadow-lg w-full sm:w-auto"
                >
                  Explore Courses
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-200 hover:bg-gray-300 transition text-darkText px-8 py-3 rounded-lg font-semibold w-full sm:w-auto"
                onClick={() => setIsPopupOpen(true)}
              >
                Watch Free Demo
              </motion.button>
            </div>
              <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3 shadow bg-white  px-4 py-2 rounded">
                  <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  <div>
                    <p className="font-bold text-lg sm:text-xl text-darkText">{stat.value}</p>
                    <p className="text-sm text-lightText">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

         
            </motion.div>
         

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 10 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <motion.div
              initial={{ scale: 0.7, x: 0, y: 70, rotate: 2, opacity: 0.1 }}
              animate={ isMobile ? { scale: 1, x: 0, y: 0, rotate: 0, opacity: 1}: { scale: 1.1, x: 0, y: 20, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className=" bg-gradient-to-r from-teal-200 to-teal-600 ease-in    rounded-t-full z-100"
            >
              <img
                src={heroImg}
                alt="CA Rachana Ranade"
                className="w-full    md:max-w-xs px-1   z-100 drop-shadow-lg "
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0.5, x: -70, y: 50, rotate: 5 }}
              animate={{ scale: 1.5, x: -400, y: 0, rotate: 60 }}
              transition={{ duration: 0.9 }}
              className=" w-20 h-20 -top-10 -left-10 -ml-5 bg-gradient-to-r blur-[5px]  to-teal-600 opacity-60 rounded-full z-40"
            />

            <motion.div
              initial={{ scale: 0.5, x: -70, y: -50, rotate: 45 }}
              animate={{ scale: 1, x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute w-20 h-20 -bottom-5 right-20 blur-xs  bg-gradient-to-r to-accent opacity-60 rounded-full z-50"
            />
          </motion.div>
        </div>
      </section>
      <VideoPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        videoSrc={videoSrc}
      />
    </>
  );
}

const VideoPopup = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="relative bg-black w-full max-w-4xl aspect-video rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the video player
          >
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 z-10 text-white hover:text-gray-300 transition"
              aria-label="Close video player"
            >
              <X size={32} />
            </button>
            <iframe
              className="w-full h-full"
              src={videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
