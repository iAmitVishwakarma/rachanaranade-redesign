
import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { financialCalculators } from "../data/calculatorsDB";
import { Link } from "react-router-dom";




// Page layout wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

// Grid of calculator cards
const CalculatorsGrid = () => (
  <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-darkText tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        FINANCIAL CALCULATORS
      </motion.h1>
      <p className="mt-4 text-lg text-lightText max-w-2xl mx-auto">
        Unlock powerful tools to simplify your planning, optimize your investments, and make smarter money decisions every day. From SIPs to retirement, everything you need—all in one place. 
      </p>
    </div>
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
    >
      {financialCalculators.map((item,id) => (
        <motion.div
          keys={item.id}
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <CalculatorCard item={item} />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const CalculatorCard = ({ item }) => {
  const { name, description, icon, color, status, slug } = item;
const IconComponent = icon; 

  const cardClasses = `bg-white rounded-2xl p-6 h-full flex flex-col items-start shadow-md transition-all duration-300 border border-gray-200`;

  return (
    <Link to={`${slug}`} className="h-full block">
      <motion.div
        className={cardClasses}
      >
        <div className="bg-gray-100 p-3 rounded-lg">
         <IconComponent className={`h-8 w-8 ${color}`} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-5">{name}</h3>
        <p className="text-sm text-gray-500 mt-2 flex-grow">{description}</p>
      </motion.div>
    </Link>
  );
};

// Routing page for calculators
const FinancialCalculatorsPage = () => (
  <PageWrapper>
  <CalculatorsGrid />
  </PageWrapper>

);

export default FinancialCalculatorsPage;



