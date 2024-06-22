import React from 'react';
import CalendarComponent from '../components/Calendar';

function CalendarPage() {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white w-10   ">Calendar</h2>
            <div style={{ height: '100vh' }}>
                <CalendarComponent />
            </div>
        </div>
    );
}

export default CalendarPage;

