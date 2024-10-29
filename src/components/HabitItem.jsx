import React from 'react';

const HabitItem = ({ habit, toggleCompletion }) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
      <span className={`text-lg ${habit.completed ? 'line-through' : ''}`}>
        {habit.name}
      </span>
      <button
        onClick={toggleCompletion}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {habit.completed ? 'Undo' : 'Complete'}
      </button>
    </div>
  );
};

export default HabitItem;
