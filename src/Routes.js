import React from 'react';
import Signup from './components/signup/Signup';
import {Route, Switch} from 'react-router-dom';
import  NotFound  from './components/notFound/NotFound';
import Login from './components/login/Login'
import AppliedRoute from './components/AppliedRoute';
export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <Route component={NotFound}/>
  </Switch>
);