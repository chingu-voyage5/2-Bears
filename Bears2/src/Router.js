import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CategoryList from './components/CategoryList'

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={LoginForm} title="Please Login" initial={true} />
        <Scene key="CategoryList" component={ CategoryList } title="food categories" />
      </Stack>
    </Router>
  );
};

export default RouterComponent;