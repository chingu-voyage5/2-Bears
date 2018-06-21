import React from 'react';
import { Stack, Scene, Router, Drawer } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CategoriesList from './components/CategoriesList';
import CategoryXList from './components/CategoryXList';
import DrawerContent from './components/drawer/DrawerContent';
import Cart from './components/Cart';
import Stats from './components/admin/Stats';
import DrinkStatus from './components/admin/DrinkStatus';
import KitchenStatus from './components/admin/KitchenStatus';
import Settings from './components/admin/Settings';
import Scan from './components/admin/Scan';

const RouterComponent = () => {
  return (
    <Router>

      <Stack key="root" hideNavBar>
        <Drawer
          hideNavBar
          key="drawer"
          contentComponent={DrawerContent}
          drawerWidth={300}
          title={"2 Bears"}
        >
          <Scene key="auth">
            <Scene key="login" component={LoginForm} hideNavBar initial />
          </Scene>

          <Scene key="main">
            <Scene key="categoriesList" component={ CategoriesList } title="Food Categories" initial />
            <Scene key="categoryXList" component={ CategoryXList } />
            <Scene key="cart" component={ Cart } />
          </Scene>

          <Scene key="admin">
            <Scene key="scan" component={ Scan } />
            <Scene key="stats" component={ Stats }  initial />
            <Scene key="drinks" component={ DrinkStatus } />
            <Scene key="kitchen" component={ KitchenStatus } />
            <Scene key="settings" component={ Settings } />
          </Scene>

        </Drawer>
      </Stack>
    </Router>
  );
};

export default RouterComponent;