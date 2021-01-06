import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from './HomeContainer';
import DiaryEnorllContainer from './DiaryEnrollContainer';

import Entry from '../components/Entry';
import MyFantasia from '../components/MyFantasia';
import Detail from '../components/Detail';

const AppContainer = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <HomeContainer />
      </Route>
      <Route path='/entry'>
        <Entry />
      </Route>
      <Route path='/newDiary'>
        <DiaryEnorllContainer />
      </Route>
      <Route path='/myFantasia'>
        <MyFantasia />
      </Route>
      <Route path='/detail/:id'>
        <Detail />
      </Route>
    </Switch>
  );
};

export default AppContainer;
