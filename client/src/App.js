import React  from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Header } from './components/common';
import reducers from './reducers';
import Router from './Router'

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    </Provider>
  );
};

export default App;

// <Header headerText="Welcome, User" />