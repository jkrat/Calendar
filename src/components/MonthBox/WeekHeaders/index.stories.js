import React from 'react';
import { storiesOf } from '@storybook/react';

import { muiTheme } from 'storybook-addon-material-ui';
import { basicTheme } from '../../../../.storybook/muiTheme';

import WeekHeaders from './index';

storiesOf('Week Headers', module)
  .addDecorator(muiTheme(basicTheme))
  .add('basic', () => <WeekHeaders />);
