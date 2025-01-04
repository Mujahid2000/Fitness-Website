import React, { useState } from "react";
import { FaPlus, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const HoverPlusButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex justify-center items-center pt-8">
      {/* Wrapper */}
      <div
        className="relative flex justify-center items-center w-10 h-10 rounded-full shadow-lg cursor-pointer transition"
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)} 
      >
        {/* Plus Icon with Background */}
        {!hover && (
          <div className="flex justify-center items-center w-full h-full bg-blue-500 rounded-full">
            <FaPlus size={20} className="text-white" />
          </div>
        )}

        {/* Social Icons */}
        {hover && (
          <div className="absolute flex space-x-3 animate-fade-in-scale">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-blue-400 text-white rounded-full shadow-md hover:bg-blue-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HoverPlusButton;
