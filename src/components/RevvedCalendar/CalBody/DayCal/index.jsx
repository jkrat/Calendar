import React from 'react';
import DayHeader from './DayHeader';
import { getDayHeader } from './utils';
import DayGrid from './DayGrid';

const index = ({ date }) => {
  const header = getDayHeader(date);
  return (
    <>
      <DayHeader header={header} />
      <DayGrid day={date} />
    </>
  );
};

export default index;
