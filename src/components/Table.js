import React from 'react';
import { useTheme } from '../contexts/ThemeProvider';

const Table = () => {
  const { isDarkMode } = useTheme();

  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';

    const data = [
        { id: 1, name: 'John Doe', age: 30, address: '123 Main St.', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', age: 25, address: '456 Elm St.', email: 'jane.smith@example.com' },
        { id: 3, name: 'Bob Johnson', age: 40, address: '789 Oak St.', email: 'bob.johnson@example.com' },
        { id: 4, name: 'Alice Williams', age: 35, address: '321 Pine St.', email: 'alice.williams@example.com' },
        { id: 5, name: 'Michael Brown', age: 28, address: '567 Cedar St.', email: 'michael.brown@example.com' },
        { id: 6, name: 'Sarah Davis', age: 33, address: '890 Maple St.', email: 'sarah.davis@example.com' },
    ];
  return (
    <div className="overflow-x-auto ">
      <table className={`min-w-full ${bgColor}`}>
        <thead>
          <tr>
            <th className={`py-2 px-4 bg-gray-200 dark:bg-gray-500 ${textColor}`}>Name</th>
            <th className={`py-2 px-4 bg-gray-200 dark:bg-gray-500 ${textColor}`}>Age</th>
            <th className={`py-2 px-4 bg-gray-200 dark:bg-gray-500 ${textColor}`}>Address</th>
            <th className={`py-2 px-4 bg-gray-200 dark:bg-gray-500 ${textColor}`}>Email</th>
          </tr>
        </thead>
        <tbody>
        {data.map((row) => (
            <tr key={row.id}>
              <td className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>{row.name}</td>
              <td className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>{row.age}</td>
              <td className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>{row.address}</td>
              <td className={`py-2 px-4 border-b ${borderColor} ${textColor}`}>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;



