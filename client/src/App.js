import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers/index';
import Router from './Router';

const logger = createLogger({});
const middleware = [
    thunkMiddleware,
    logger,
];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducers);
console.disableYellowBox = true;
export default class App extends Component {
    componentDidMount() {
        SplashScreen.hide()
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="#4F6D7A"
                    />
                    <Router />
                </View>
            </Provider>
    );
    }
}

                    // <Header headerText="Welcome, User" />
