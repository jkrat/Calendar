import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/calendar" />
      <Route exact path="/calendar" component={NotFound} />
      <Route path="/calendar/:duration" component={App} />
      {/* <Route path="/calendar/month" component={App} />
      <Route path="/calendar/Week" component={App} />
      <Route path="/calendar/Day" component={App} /> */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
