import React from 'react';
import { storiesOf } from '@storybook/react';

import { muiTheme } from 'storybook-addon-material-ui';
import { basicTheme } from '../../../../.storybook/muiTheme';

import DayOfMonth from './index';

const date = new Date(2014,8,11);

storiesOf('Day Of Month', module)
  .addDecorator(muiTheme(basicTheme))
  .add('basic', () => (
    <DayOfMonth date={date} outOfMonth={false} />
  ))
  .add('out of month', () => (
    <DayOfMonth date={date} outOfMonth={true} />
  ));