import React from 'react';
import WeekHeaders from './WeekHeaders';
import MonthGrid from './MonthGrid';

const MonthCal = ({ date }) => (
  <div>
    <WeekHeaders />
    <MonthGrid firstDayOfMonth={date} />
  </div>
);

export default MonthCal;
