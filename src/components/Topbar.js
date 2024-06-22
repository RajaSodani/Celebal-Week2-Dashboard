import React from "react";

function Topbar({ toggleTheme }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md top-bar">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        Celebal Summer Internship
      </h1>
      <button
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Topbar;
