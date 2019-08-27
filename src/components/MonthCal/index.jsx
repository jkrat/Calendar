import React from 'react';
import WeekHeaders from './WeekHeaders';
import MonthGrid from './MonthGrid';

const date = new Date(2015, 4, 1);

const index = () => {
  return (
    <div>
      <WeekHeaders />
      <MonthGrid firstDayOfMonth={date} />
    </div>
  );
};

export default index;
