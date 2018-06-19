import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CategoriesList from './components/CategoriesList'
import CategoryXList from './components/CategoryXList'
import Cart from './components/Cart'

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} hideNavBar initial />
        </Scene>
        <Scene key="main">
          <Scene key="categoriesList" component={ CategoriesList } hideNavBar initial />
          <Scene key="categoryXList" component={ CategoryXList } />
          <Scene key="cart" component={ Cart } />
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;