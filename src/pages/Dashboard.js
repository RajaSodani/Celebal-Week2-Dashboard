import React from 'react';
import Card from '../components/Card';
import Chart from '../components/Chart';
import Table from '../components/Table';

function Dashboard() {
    const content1 = <div>
        <h1>1. Introduction to React.js</h1>
        <h1>2. Setting Up Development Environment</h1>
        <h1>3. Creating Basic React Components</h1>
        <h1>4. JSX Syntax</h1>
        <h1>5. Props and State , Event Handling</h1>
    </div>
    const content2 = <div>
        <h1>1. Understanding React Component Lifecycle</h1>
        <h1>2. State Management Introduction</h1>
        <h1>3. React Hooks</h1>
        <h1>4. Managing Component State with Class Components</h1>
    </div>
    const content3 = <div>
        <h1>1. React Router</h1>
        <h1>2. Navigation Between Pages</h1>
        <h1>3. Using Nested Routes</h1>
        <h1>4. Route Guarding</h1>
        <h1>5. Multi-Page Application Using React Router</h1>
    </div>
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
                <Card title="Week 1" content={content1} />
                <Card title="Week 2" content={content2} />
                <Card title="Week 3" content={content3}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md">
                    <Chart />
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-md overflow-x-auto">
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
