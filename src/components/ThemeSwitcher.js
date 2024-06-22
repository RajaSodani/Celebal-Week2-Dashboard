import React from 'react';

function ThemeSwitcher({ setThemeMode }) {
    const handleThemeChange = (event) => {
        setThemeMode(event.target.checked ? 'dark' : 'light');
    };

    return (
        <div className="flex items-center mb-4">
            <span className="mr-2">Light</span>
            <label className="switch">
                <input type="checkbox" onChange={handleThemeChange} />
                <span className="slider round"></span>
            </label>
            <span className="ml-2">Dark</span>
        </div>
    );
}

export default ThemeSwitcher;
