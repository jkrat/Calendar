export function changeCalendarLayout(layout) {
  return {
    type: 'CHANGE_CALENDAR_LAYOUT',
    payload: {
      layout,
    },
  };
}
export function calendarForward(date, layout) {
  return {
    type: 'CALENDAR_FORWARD',
    payload: {
      date,
      layout,
    },
  };
}
export function calendarBackward(date, layout) {
  return {
    type: 'CALENDAR_BACKWARD',
    payload: {
      date,
      layout,
    },
  };
}
export function selectDate(date) {
  return {
    type: 'SELECT_DATE',
    payload: {
      date,
    },
  };
}
