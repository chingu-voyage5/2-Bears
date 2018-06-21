import React from 'react';
import { Stack, Scene, Router, Drawer } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CategoriesList from './components/CategoriesList'
import CategoryXList from './components/CategoryXList'
import DrawerContent from './components/drawer/DrawerContent';
import Cart from './components/Cart'

const RouterComponent = () => {
  return (
    <Router>

      <Stack key="root" hideNavBar>
      <Drawer
              hideNavBar
              key="drawer"
              contentComponent={DrawerContent}
              drawerWidth={300}
            >
        <Scene key="auth">
          <Scene key="login" component={LoginForm} hideNavBar initial />
        </Scene>
        <Scene key="main">
          <Scene key="categoriesList" component={ CategoriesList } title="Food Categories" initial />
          <Scene key="categoryXList" component={ CategoryXList } />
          <Scene key="cart" component={ Cart } />
        </Scene>
        </Drawer>
      </Stack>
    </Router>
  );
};

export default RouterComponent;