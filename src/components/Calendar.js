import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useTheme } from '../contexts/ThemeProvider';
const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const { isDarkMode } = useTheme();

  if (isDarkMode === undefined) {
    throw new Error('ThemeContext not properly provided');
  }

  const calendarStyle = {
    height: '100%',
    width: '100%',
    background: isDarkMode ? '#2d3748' : '#edf2f7', 
    color: isDarkMode ? '#fff' : '#000', 
  };

  const events = [
    {
      id: 1,
      title: 'Meeting',
      start: new Date(2024, 6, 1, 10, 0, 0),
      end: new Date(2024, 6, 1, 12, 0, 0),
    },
    {
      id: 2,
      title: 'Conference',
      start: new Date(2024, 6, 15, 11, 0, 0),
      end: new Date(2024, 6, 15, 14, 0, 0),
    },
    {
      id: 3,
      title: 'Course Start',
      start: new Date(2024, 5, 1, 8, 0, 0),
      end: new Date(2024, 5, 1, 10, 0, 0),
    },
  ];

  return (
    <div style={{ height: '550px', background: isDarkMode ? '#1a202c' : '#fff', padding: '20px',width:'1100px'}}>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={calendarStyle}
      />
    </div>
  );
};

export default CalendarComponent;


// import React from 'react';
// import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { useTheme } from '../contexts/ThemeProvider';
// const localizer = momentLocalizer(moment);


// const CalendarComponent = () => {
//   const events = [
//     {
//       id: 1,
//       title: 'Meeting',
//       start: new Date(2024, 6, 1, 10, 0, 0),
//       end: new Date(2024, 6, 1, 12, 0, 0),
//     },
//     {
//       id: 2,
//       title: 'Conference',
//       start: new Date(2024, 6, 15, 11, 0, 0),
//       end: new Date(2024, 6, 15, 14, 0, 0),
//     },
//   ];

//   return (
//     <div style={{ height: '100vh' }}>
//       <BigCalendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: '100%' }}
//       />
//     </div>
//   );
// };

// export default CalendarComponent;
