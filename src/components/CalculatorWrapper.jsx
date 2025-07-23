import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Tooltip from './Tooltip'; // Import the new Tooltip component

/**
 * A wrapper that provides a consistent layout for all financial calculators.
 * @param {object} props - The component props.
 * @param {string} props.title - The title of the calculator.
 * @param {React.ReactNode} props.children - The content (inputs and results).
 */
const CalculatorWrapper = ({ title, children }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-background py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <button
          onClick={() => navigate(-1)} // Navigates to the previous page
          className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-8 font-semibold group"
        >
          <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to All Calculators
        </button>
        
        <h1 className="text-4xl font-extrabold text-darkText mb-4">{title}</h1>
        
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 border border-gray-100">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

// A dedicated section for calculator inputs (e.g., sliders)
export const CalculatorInputSection = ({ children }) => (
  <div className="space-y-8">{children}</div>
);

// A dedicated section for displaying calculation results
export const CalculatorResultSection = ({ children }) => (
  <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-xl border border-gray-200">
    {children}
  </div>
);

/**
 * A reusable input component (range slider) with a label, value display, and tooltip.
 * @param {object} props - The component props.
 */
export const CalculatorInput = ({ label, value, unit, onChange, min, max, step, tooltip }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <label className="font-semibold text-gray-700">{label}</label>
        {/* The Tooltip component is included here if tooltip text is provided */}
        {tooltip && <Tooltip text={tooltip} />}
      </div>
      <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full font-bold text-sm shadow-sm">
        {/* Formats numbers with Indian style commas for readability */}
        {new Intl.NumberFormat('en-IN').format(value)} {unit}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
    />
  </div>
);

export default CalculatorWrapper;