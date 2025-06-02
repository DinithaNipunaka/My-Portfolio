import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Loading.css"; // Ensure this file contains styling enhancements

const Loading = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loading = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loading);
          setTimeout(onFinish, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(loading);
  }, [onFinish]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center text-green-400 font-mono p-4">
      {/* Title */}
      <h1 className="text-3xl mt-8 mb-6 tracking-widest text-shadow-neon text-center">
        🚀 LOADING YOUR UNIVERSE...
      </h1>

      {/* Loading Bar */}
      <div className="w-80 h-6 bg-gray-800 border-2 border-green-400 rounded-full overflow-hidden shadow-lg shadow-green-500/50">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-glow"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        />
      </div>

      {/* Percentage */}
      <p className="mt-4 text-lg text-shadow-neon animate-pulse">{progress}%</p>
    </div>
  );
};

export default Loading;