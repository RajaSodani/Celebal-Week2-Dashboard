import React from 'react';

function Card({ title, content }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{content}</p>
        </div>
    );
}

export default Card;
    