import React from 'react';
import { storiesOf } from '@storybook/react';
import{ startOfWeek, addDays, isSameWeek, isSameMonth, isWeekend } from 'date-fns';

import { muiTheme } from 'storybook-addon-material-ui';
import { basicTheme } from '../../../../.storybook/muiTheme';

import WeekRow from './index';

function getWeek(inputDate) {
  const start = startOfWeek(inputDate);

  const week = [];
  let date = start;
  let index = 1;

  while (isSameWeek(start, date)) {
    week.push({
      key: index,
      date,
      outOfMonth: !isSameMonth(date, inputDate),
      isWeekend: isWeekend(date),
    });
    date = addDays(date, 1);
    index++;
  }

  return week;
}

storiesOf('Week Row', module)
  .addDecorator(muiTheme(basicTheme))
  .add('same month', () => {
    let week = getWeek(new Date(2014,8,11));
    return <WeekRow dates={week} /> })
  .add('out of month', () => {
    let week = getWeek(new Date(2014,7,2));
    return <WeekRow dates={week} /> });