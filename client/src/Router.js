import React from 'react';
import { Stack, Scene, Router, Drawer } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CategoriesList from './components/guest/CategoriesList';
import CategoryXList from './components/guest/CategoryXList';
import DrawerContent from './components/drawer/DrawerContent';
import About from './components/guest/About';
import Cart from './components/guest/Cart';
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
          <Scene key="auth" title={"2 Bears"}>
            <Scene key="login" component={LoginForm} initial />
          </Scene>

          <Scene key="main" title={"2 Bears"}>
            <Scene key="categoriesList" component={ CategoriesList } initial />
            <Scene key="categoryXList" component={ CategoryXList } />
            <Scene key="cart" component={ Cart } />
            <Scene key="about" component={ About } />
          </Scene>

          <Scene key="admin" title={"2 Bears"}>
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