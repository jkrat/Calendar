import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { calendarForward, calendarBackward } from '../../../../redux/actions';

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
      <Button color="primary" size="large" className={classes.button}>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
