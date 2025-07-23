import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
      <Link to={`/courses/${course.slug}`}>
               <motion.div
                   className="bg-white rounded-2xl h-full flex flex-col overflow-hidden shadow-lg border border-gray-100"
                   whileHover={{ y: -10, boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                   transition={{ duration: 0.3 }}
               >
                   {/* Illustration container */}
                   <div className="bg-teal-50 aspect-video flex h-fit items-center justify-center relative">
                       <img 
                           src={course.image} 
                           alt={course.title} 
                           className="w-full h-full  object-cover opacity-80 blur-[2px] contrast-90 brightness-95" 
                       />
                        <h3 className=" absolute text-white text-2xl font-poppins font-bold ">
                           
                       {course.title}</h3>
                       
                      
                   </div>
                   
                   {/* Content container */}
                   <div className="p-6 flex flex-col flex-grow">
                       <h3 className="text-xl font-bold text-darkText">{course.title}</h3>
                       <p></p>
                       <p className="text-sm text-teal-600 font-semibold mt-1">{course.category}</p>
                       <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                           <span className="text-2xl font-extrabold text-darkText">₹{course.price}</span>
                           <span className="text-sm font-semibold text-white bg-teal-600 px-4 py-2 rounded-full">
                               View Course
                           </span>
                       </div>
                   </div>
               </motion.div>
           </Link>
  );
};

export default CourseCard;