import { motion } from "framer-motion";
import { Star, StarsIcon } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Link to={`/courses/${course.slug}`}>
      <motion.div
        className="bg-white rounded-2xl h-full flex flex-col overflow-hidden transition-all ease-in-out duration-75 shadow-lg border border-gray-100"
        whileHover={{
          y: -2,
          scale: 1.02,
          boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Illustration container */}
        <div className="bg-teal-50 aspect-video flex h-fit  items-center justify-center relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full  hover:scale-1.2  object-cover opacity-80 blur-[2px]  contrast-90 brightness-95"
          />
          <h3 className=" absolute text-white text-shadow text-shadow-black hover:scale-1.2  text-2xl font-poppins font-bold ">
            {course.title}
          </h3>
        </div>

        {/* Content container */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="my-2 flex items-center justify-between">
            <p className="text-sm text-teal-600 font-semibold mt-1">
              {course.category}
            </p>
            <p className="flex items-center">
              <i className="text-yellow-400">
                <Star fill="currentcolor" />
              </i>
              <span className="ml-1 text-sm font-medium">{course.rating}</span>
              <span className="ml-1 text-xs text-gray-500">({course.rating_count})</span>
            </p>
          </div>
          <h3 className="text-xl font-bold text-darkText">{course.title}</h3>
          <p className="text-sm my-2">{course.description}</p>

          <div className="mt-1 pt-1 border-t border-gray-100 flex justify-between items-center">
            <span className="text-2xl font-extrabold text-darkText">
              ₹{course.price}
            </span>
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
