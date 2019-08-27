import React from 'react';
import { storiesOf } from '@storybook/react';

import { muiTheme } from 'storybook-addon-material-ui';
import { basicTheme } from '../../../../.storybook/muiTheme';

import Navigation from './index';

storiesOf('Navigation', module)
  .addDecorator(muiTheme(basicTheme))
  .add('basic', () => (
    <Navigation />
  ))
  .add('primary', () => (
    <Navigation color="primary" />
  ));