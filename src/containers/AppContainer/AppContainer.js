import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from '../../components/Home';
import Entry from '../../components/Entry';
import DiaryEditor from '../../components/DiaryEditor';
import MyFantasia from '../../components/MyFantasia';

const AppContainer = () => {
  // const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  return (
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/entry'>
        <Entry />
      </Route>
      <Route path='/newDiary'>
        <DiaryEditor />
      </Route>
      <Route path='/myFantasia'>
        <MyFantasia />
      </Route>
    </Switch>
  );
};

export default AppContainer;
