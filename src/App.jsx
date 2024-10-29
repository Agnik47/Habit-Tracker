import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WeekView from './components/WeekView';
import HabitList from './components/HabitList';
import AddHabit from './components/AddHabit';

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [habits, setHabits] = useState({});

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem('habits')) || {};
    setHabits(storedHabits);
  }, []);
 
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (day, habit) => {
    setHabits((prev) => ({
      ...prev,
      [day]: [...(prev[day] || []), habit]
    }));
  };

  const toggleHabitCompletion = (day, habitName) => {
    setHabits((prev) => ({
      ...prev,
      [day]: prev[day].map(habit =>
        habit.name === habitName ? { ...habit, completed: !habit.completed } : habit
      )
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      <Navbar />
      <div className="flex-1 p-5">
        <h1 className="text-4xl font-bold text-center mb-8">Habit Tracker</h1>
        <WeekView setSelectedDay={setSelectedDay} />
        {selectedDay && (
          <>
            <AddHabit selectedDay={selectedDay} addHabit={addHabit} />
            <HabitList
              selectedDay={selectedDay}
              habits={habits[selectedDay] || []}
              toggleHabitCompletion={toggleHabitCompletion}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
