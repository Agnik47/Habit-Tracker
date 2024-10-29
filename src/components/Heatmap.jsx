import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const getHeatmapValue = (date, habits) => {
  const habitsForDate = habits[date] || [];
  const totalHabits = habitsForDate.length;
  const completedHabits = habitsForDate.filter(habit => habit.completed).length;
  return {
    date,
    count: totalHabits === 0 ? 0 : (completedHabits / totalHabits) * 100
  };
};

const generateHeatmapData = (habits) => {
  const data = [];
  for (let i = 0; i < 365; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateString = date.toISOString().split('T')[0];
    data.push(getHeatmapValue(dateString, habits));
  }
  return data;
};

const Heatmap = ({ habits }) => {
  const heatmapData = generateHeatmapData(habits);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Habit Completion Heatmap</h2>
      <CalendarHeatmap
        startDate={new Date(new Date().setDate(new Date().getDate() - 365))}
        endDate={new Date()}
        values={heatmapData}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${Math.ceil(value.count / 25)}`;
        }}
        tooltipDataAttrs={value => ({
          'data-tip': `${value.date}: ${value.count}% habits completed`
        })}
        showWeekdayLabels
      />
    </div>
  );
};

export default Heatmap;
