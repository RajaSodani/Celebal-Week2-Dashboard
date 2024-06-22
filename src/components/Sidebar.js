import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="md:hidden p-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded"
                >
                    {isOpen ? 'Close Menu' : 'Open Menu'}
                </button>
            </div>

            <div
                className={`${
                    isOpen ? 'block' : 'hidden'
                } md:block bg-white dark:bg-gray-800 w-64 min-h-screen p-4 shadow-md`}
            >
                <nav>
                    <ul>
                        <li className="mb-4 h-10 navig">
                            <Link to="/" className="text-gray-900 dark:text-white">Dashboard</Link>
                        </li>
                        <li className="mb-4 h-10 navig">
                            <Link to="/reports" className="text-gray-900 dark:text-white">Reports</Link>
                        </li>
                        <li className="mb-4 h-10 navig">
                            <Link to="/calendar" className="text-gray-900 dark:text-white">Calendar</Link>
                        </li>
                        <li className="mb-4 h-10 navig">
                            <Link to="/kanban" className="text-gray-900 dark:text-white">Kanban Board</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
