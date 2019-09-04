import React from 'react';
import YearCal from './YearCal';
import MonthCal from './MonthCal';
import WeekCal from './WeekCal';
import DayCal from './DayCal';

function SelectLayout(layout) {
  switch (layout) {
    case 'year':
      return YearCal;
    case 'month':
      return MonthCal;
    case 'week':
      return WeekCal;
    case 'day':
      return DayCal;
    default:
      return null;
  }
}

const CalLayout = ({ layout, ...restProps }) => {
  const Layout = SelectLayout(layout);

  return <Layout {...restProps} />;
};

export default CalLayout;
