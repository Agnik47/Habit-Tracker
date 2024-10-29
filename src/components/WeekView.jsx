import React from 'react';
import DayCard from './DayCard';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WeekView = ({ setSelectedDay }) => {
  return (
    <div className="grid grid-cols-7 gap-4 mb-6">
      {days.map((day, index) => (
        <DayCard key={index} day={day} setSelectedDay={setSelectedDay} />
      ))}
    </div>
  );
};

export default WeekView;
