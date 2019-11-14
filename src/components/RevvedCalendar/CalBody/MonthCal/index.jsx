import React from 'react';
import WeekHeaders from './WeekHeaders';
import MonthGrid from './MonthGrid';
import { getFirstDayOfMonth } from './utils';

const MonthCal = ({ date }) => {
  const firstDay = getFirstDayOfMonth(date);
  return (
    <div>
      <WeekHeaders />
      <MonthGrid firstDayOfMonth={firstDay} />
    </div>
  );
};

export default MonthCal;
