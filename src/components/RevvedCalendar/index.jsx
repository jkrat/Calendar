import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import CalNav from './CalNav';
import CalBody from './CalBody';

const useStyles = makeStyles({
  root: {},
});

const RevvedCalendar = ({ date, layout }) => {
  const classes = useStyles();

  return (
    <>
      <CalNav date={date} layout={layout} />
      <CalBody date={date} layout={layout} />
    </>
  );
};

const mapStateToProps = state => ({
  date: state.date,
  layout: state.layout,
});

export default connect(mapStateToProps)(RevvedCalendar);
