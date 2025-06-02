import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700"
      aria-label="Toggle Theme"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
