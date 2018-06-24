import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { AppRegistry } from 'react-native';
import { createLogger } from 'redux-logger';
import reducers from './reducers/index';
import { Header } from './components/common';
import Router from './Router'


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
                    <Header headerText="Welcome, User" />
                    <Router />
                </View>
            </Provider>
    );
    }
}