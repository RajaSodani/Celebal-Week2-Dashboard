import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import CalendarPage from './pages/Calendar';
import KanbanPage from './pages/KanbanBoard';
import './App.css';

function App() {
    const [themeMode, setThemeMode] = useState('light');

    const toggleTheme = () => {
        console.log(themeMode)
        setThemeMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={themeMode === 'dark' ? 'dark' : ''}>
            <Router>
                <div className="flex-1 bg-gray-100 dark:bg-gray-900 min-h-screen">
                    <Topbar toggleTheme={toggleTheme} />
                <div className="flex">
                    <Sidebar />
                        <div className="p-4">
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/reports" element={<Reports />} />
                                <Route path="/calendar" element={<CalendarPage />} />
                                <Route path="/kanban" element={<KanbanPage />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
