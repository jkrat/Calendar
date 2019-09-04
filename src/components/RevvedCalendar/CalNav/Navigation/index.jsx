import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {
  calendarForward,
  calendarBackward,
  selectDate,
} from '../../../../redux/actions';

const useStyles = makeStyles({
  button: {
    margin: '0 10px',
  },
});

const Navigation = ({
  date,
  layout,
  navigationForward,
  navigationBackward,
  selectToday,
}) => {
  const classes = useStyles();
  return (
    <div>
      <IconButton
        color="primary"
        onClick={() => navigationBackward(date, layout)}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      <Button
        color="primary"
        size="large"
        className={classes.button}
        onClick={() => selectToday(new Date())}
      >
        Today
      </Button>
      <IconButton
        color="primary"
        onClick={() => navigationForward(date, layout)}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
  );
};

const mapStateToProps = state => ({
  date: state.date,
  layout: state.layout,
});

const mapDispatchToProps = dispatch => {
  return {
    navigationForward: (date, layout) => {
      dispatch(calendarForward(date, layout));
    },
    navigationBackward: (date, layout) => {
      dispatch(calendarBackward(date, layout));
    },
    selectToday: date => {
      dispatch(selectDate(date));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
