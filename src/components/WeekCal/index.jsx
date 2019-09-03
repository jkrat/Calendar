import React from 'react';
import WeekHeaders from './WeekHeaders';
import { getWeekHeaders, getDaysInWeek } from './utils';
import WeekGrid from './WeekGrid';

const date = new Date(2015, 4, 1);
const headers = getWeekHeaders(date);
const days = getDaysInWeek(date);

const index = () => (
  <div>
    <WeekHeaders headers={headers} />
    <WeekGrid calendar={days} />
  </div>
);

export default index;
