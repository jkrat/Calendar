import React from 'react';
import { storiesOf } from '@storybook/react';

import { muiTheme } from 'storybook-addon-material-ui';
import { basicTheme } from '../../../../.storybook/muiTheme';

import MonthBody from './index';

storiesOf('Month body', module)
  .addDecorator(muiTheme(basicTheme))
  .add('basic', () => <MonthBody firstDayOfMonth={new Date(1988, 5, 1)} />);
