import React from 'react';
import { storiesOf } from '@storybook/react';

import { muiTheme } from 'storybook-addon-material-ui';
import { basicTheme } from '../../../../.storybook/muiTheme';

import Tabs from './index';

storiesOf('Duration Tabs', module)
  .addDecorator(muiTheme(basicTheme))
  .add('basic', () => (
    <Tabs />
  ))
  .add('primary', () => (
    <Tabs color="primary" />
  ));