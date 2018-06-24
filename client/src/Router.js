import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CategoriesList from './components/CategoriesList'
import CategoryXList from './components/CategoryXList'
import Cart from './components/Cart'

class RouterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render(){
        const { dispatch, errorMessage, isAuthenticated } = this.props
        return (
            <Router>
                <Stack key="root" hideNavBar>
                    <Scene key="login" component={LoginForm} hideNavBar  errorMessage={errorMessage} dispatch={dispatch} initial />

                    <Scene key="categoriesList" component={ CategoriesList } title="Food Categories" />
                    <Scene key="categoryXList" component={ CategoryXList } />
                    <Scene key="cart" component={ Cart } />

                </Stack>
            </Router>
    );

    }


};

const mapsStateToProps = (state) => {
    const { auth } = state;
    const { isAuthenticated, errorMessage } = auth;

    return {
        isAuthenticated,
        errorMessage
    }
}

export default connect(mapsStateToProps)(RouterComponent);