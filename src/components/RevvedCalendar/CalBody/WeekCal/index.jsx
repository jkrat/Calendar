import React from 'react';
import WeekHeaders from './WeekHeaders';
import { getWeekHeaders, getDaysInWeek } from './utils';
import WeekGrid from './WeekGrid';

const index = ({ date }) => {
  const headers = getWeekHeaders(date);
  const days = getDaysInWeek(date);
  return (
    <div>
      <WeekHeaders headers={headers} />
      <WeekGrid calendar={days} />
    </div>
  );
};

export default index;
