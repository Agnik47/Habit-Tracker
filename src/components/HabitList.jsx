import React from 'react';
import HabitItem from './HabitItem';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const HabitList = ({ selectedDay, habits, toggleHabitCompletion }) => {
  const totalHabits = habits.length;
  const completedHabits = habits.filter(habit => habit.completed).length;
  const completionRate = totalHabits === 0 ? 0 : (completedHabits / totalHabits) * 100;

  return (
    <div>
      <div className="mb-6 flex justify-center">
        <div className="w-24 h-24">
          <CircularProgressbar
            value={completionRate}
            text={`${Math.round(completionRate)}%`}
            styles={buildStyles({
              textColor: '#fff',
              pathColor: '#4caf50',
              trailColor: '#d6d6d6'
            })}
          />
        </div>
      </div>
      <div className="space-y-4">
        {habits.map((habit, index) => (
          <HabitItem key={index} habit={habit} toggleCompletion={() => toggleHabitCompletion(selectedDay, habit.name)} />
        ))}
      </div>
    </div>
  );
};

export default HabitList;
