<<<<<<< HEAD
import React, { Component }  from 'react';
=======
import React, { Component } from 'react';
>>>>>>> a91b8d2d0eea65e4c1b89e7fda972d6afb1e6c9f
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { AppRegistry } from 'react-native';
import { createLogger } from 'redux-logger';
import reducers from './reducers/index';
import Router from './Router';

<<<<<<< HEAD
console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
}

// <Header headerText="Welcome, User" />
=======
const logger = createLogger({});
const middleware = [
    thunkMiddleware,
    logger,
];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducers);
console.disableYellowBox = true;
export default class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Router />
                </View>
            </Provider>
    );
    }
}

                    // <Header headerText="Welcome, User" />
>>>>>>> a91b8d2d0eea65e4c1b89e7fda972d6afb1e6c9f
