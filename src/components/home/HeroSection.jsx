import { motion ,AnimatePresence} from 'framer-motion';
import heroImg from '../../assets/images/rachana-portrait.png';
import { X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function HeroSection() {
const stats = [
    { label: 'Learners', value: '10L+' },
    { label: 'Courses', value: '50+' },
    { label: 'YT Subscribers', value: '4.7M' },
    { label: 'Years of Exp.', value: '15+' },
]
const [isPopupOpen, setIsPopupOpen] = useState(false);
const videoSrc = "https://www.youtube.com/embed/pFtUAeUbXZI?si=UFVeLXOU7OI8vFxe"

  return (
    <>
    <section className="bg-gradient-to-br to-amber-100/60 from-amber-50/10 py-12 md:py-20 h-[700px] md:h-[600px]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold font-poppins text-gray-900 leading-tight">
            Learn Stock Market in <span className="text-teal-600">Simple Hindi</span>
          </h1>
          <p className="mt-4 text-lg font-inter text-gray-600 max-w-xl">
            Join over 10 lakh+ learners & begin your journey to financial literacy with India’s most trusted educator.
          </p>
         <div className="flex gap-4 flex-wrap mb-10">
              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:opacity-90 transition text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
                >
                  Explore Courses
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-200 hover:bg-gray-300 transition text-darkText px-6 py-3 rounded-lg font-semibold"
                onClick={() => setIsPopupOpen(true)} // <-- Add onClick handler
              >
                Watch Free Demo
              </motion.button>
            </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-700">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center w-30 shadow-sm p-4 rounded-lg ">
                <p className="font-semibold text-2xl text-primary">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </div>
            ))}
           
          </div>
        </motion.div>

      <motion.div
  initial={{ opacity: 0, scale: 0.8 , y: 50 }}
  animate={{ opacity: 1, scale: 1 , y: 10 }}
  transition={{ duration: 0.7 }}
  className="relative flex justify-center"
>
  <motion.div 
   initial={{  scale: 0.7 ,x: 0, y: 70 ,rotate: 2 ,opacity: 0.1 }}
    animate={{  scale: 1.1,  x: 0, y: 20 , rotate: 0 , opacity: 1 }}
    transition={{ duration: 0.7 }}
  className=" bg-gradient-to-r from-teal-200 to-teal-600 ease-in   rounded-t-full z-100">
  <img
    src={heroImg}
    alt="CA Rachana Ranade"
    className="w-full  max-w-xs px-1   z-100 drop-shadow-lg "
  />
</motion.div>
  
  <motion.div
    initial={{  scale: 0.5 ,x: -70, y: 50 ,rotate: 5 }}
    animate={{  scale: 1.5,  x: -400, y: 0 , rotate: 60 ,  }}
    transition={{ duration: 0.9 }}
    className=" w-20 h-20 -top-10 -left-10 -ml-5 bg-gradient-to-r blur-[5px]  to-teal-600 opacity-60 rounded-full z-40"
  />

  
  <motion.div
    initial={{  scale: 0.5 ,x: -70, y: -50 ,rotate: 45 }}
    animate={{  scale: 1,  x: 0, y: 0 , rotate: 0 }}
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
            transition={{ type: 'spring', damping: 15, stiffness: 100 }}
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

