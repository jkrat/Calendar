import React from 'react';
import { storiesOf } from '@storybook/react';

import { muiTheme } from 'storybook-addon-material-ui';
import { basicTheme } from '../../../../.storybook/muiTheme';

import MonthLabel from './index';

storiesOf('Month label', module)
  .addDecorator(muiTheme(basicTheme))
  .add('basic', () => <MonthLabel label="August" />)
  .add('primary', () => <MonthLabel label="August" color="primary" />);
