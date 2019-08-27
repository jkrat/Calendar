import React from 'react';
import { storiesOf } from '@storybook/react';

import { muiTheme } from 'storybook-addon-material-ui';
import { basicTheme } from '../../../../.storybook/muiTheme';

import Navigation from './index';

storiesOf('App Bar', module)
  .addDecorator(muiTheme(basicTheme))
  .add('Navigation', () => <Navigation />);
