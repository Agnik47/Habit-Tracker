import React, { useState } from 'react';

const AddHabit = ({ selectedDay, addHabit }) => {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      addHabit(selectedDay, { name: habitName, completed: false });
      setHabitName('');
    }
  };

  return (
    <form className="mb-6 text-center" onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter your next Aim....  "
        className="p-2 w-80 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddHabit;
