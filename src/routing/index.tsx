import * as React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { Home, TermsOfService, NotFound } from '../pages';
import { createBrowserHistory } from 'history';
const supportsHistory = 'pushState' in window.history;

export const Routing: React.FC = () => {
  const history = createBrowserHistory({ basename: '', forceRefresh: !supportsHistory });

  return (
    <Router history={history}>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={TermsOfService} exact path="/terms-of-service" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
