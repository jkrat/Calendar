import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { changeCalendarLayout } from '../../../../redux/actions';

const useStyles = makeStyles(theme => ({
  root: {},
  active: {
    backgroundColor: `${theme.palette.primary.main}!important`,
    color: `${theme.palette.primary.contrastText}!important`,
  },
}));

const Tabs = ({ layout, navigationTab }) => {
  const classes = useStyles();
  return (
    <ButtonGroup size="large" variant="outlined" color="primary">
      <Button
        onClick={() => navigationTab('day')}
        className={layout === 'day' ? classes.active : ''}
      >
        Day
      </Button>
      <Button
        onClick={() => navigationTab('week')}
        className={layout === 'week' ? classes.active : ''}
      >
        Week
      </Button>
      <Button
        onClick={() => navigationTab('month')}
        className={layout === 'month' ? classes.active : ''}
      >
        Month
      </Button>
      <Button
        onClick={() => navigationTab('year')}
        className={layout === 'year' ? classes.active : ''}
      >
        Year
      </Button>
    </ButtonGroup>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    navigationTab: layout => {
      dispatch(changeCalendarLayout(layout));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Tabs);
