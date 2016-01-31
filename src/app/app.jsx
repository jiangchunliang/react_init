/**
 * Created by CHEN on 2016/1/28.
 */


import React from 'react';
import { render } from 'react-dom'
import routers from './components/routers'
import Main from './components/Main'
import login from './components/login'
import { Router, Route, Link, browserHistory } from 'react-router'



render(
  <Router location="hash">
      <Route  path="/" component={Main}>
          <Route path="login" component={login}/>
      </Route>
  </Router>
    ,document.getElementById('app'));
