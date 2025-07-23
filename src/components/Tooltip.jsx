import React from 'react';

/**
 * A tooltip component that displays a text message on hover.
 * It's controlled by the parent using Tailwind's 'group' utility.
 * @param {object} props - The component props.
 * @param {string} props.text - The text to display inside the tooltip.
 */
const Tooltip = ({ text }) => {
  return (
    // The parent div uses 'group' to control the tooltip's visibility.
    <div className="group relative flex justify-center">
      <svg
        className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-help"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      {/* The tooltip span itself. 
        - It's hidden by default (scale-0).
        - It appears when the parent 'group' is hovered (group-hover:scale-100).
      */}
      <span className="absolute bottom-full mb-2 w-48 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 z-10 origin-bottom shadow-lg">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;