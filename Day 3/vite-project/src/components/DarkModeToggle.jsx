import { useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">
        Dark Mode Toggle
      </h1>

      <p className="text-lg mb-6">
        Current Mode:{" "}
        <span className="font-semibold">
          {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </span>
      </p>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`px-6 py-3 rounded-lg font-semibold transition-all ${
          darkMode
            ? "bg-yellow-400 text-black hover:bg-yellow-500"
            : "bg-gray-800 text-white hover:bg-gray-900"
        }`}
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}