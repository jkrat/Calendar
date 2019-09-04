import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  roo: {
    width: '100%',
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    '& #body': {
      height: 'calc(100vh - 118px)',
    },
  },
  day: {
    border: '1px solid grey',
  },
});

const DayGrid = ({ date }) => {
  const classes = useStyles();

  return (
    <div className={classes.roo}>
      <table
        cellPadding="0"
        cellSpacing="0"
        borderCollapse="collapse"
        className={classes.root}
      >
        <tbody>
          <tr>
            <td data-date={date} className={classes.day} id="body" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DayGrid;
