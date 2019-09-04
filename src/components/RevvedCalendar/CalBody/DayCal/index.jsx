import React from 'react';
import DayHeader from './DayHeader';
import { getDayHeader } from './utils';
import DayGrid from './DayGrid';

const date = new Date(2015, 4, 1);
const header = getDayHeader(date);

const index = () => (
  <div>
    <DayHeader header={header} />
    <DayGrid day={date} />
  </div>
);

export default index;
