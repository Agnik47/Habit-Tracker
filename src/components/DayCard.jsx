import React from 'react';

const DayCard = ({ day, setSelectedDay }) => {
  return (
    <div
      onClick={() => setSelectedDay(day)}
      className="bg-gray-700 p-4 rounded-lg text-center cursor-pointer hover:bg-gray-600 transition duration-300"
    >
      <h3 className="text-lg font-bold">{day}</h3>
    </div>
  );
};  

export default DayCard;
