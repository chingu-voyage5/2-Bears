import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { loginUser } from '../actions/login';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',

        }
        this.passwordChange = this.passwordChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        const { dispatch, errorMessage, isAuthenticated } = this.props
    }

    emailChange(text) {
        this.setState({
            email: text,
        },()=> console.log(this.state) )
    }

    passwordChange(text) {

        this.setState({
            password: text
        })
    }

    handleLoginClick() {
        // console.log('this is the props on line 26', this.props);
        const email = this.state.email;
        const password = this.state.password;
        const creds = { email: email, password: password };
        this.props.dispatch(loginUser(creds));
    }



  render() {
        const { dispatch, errorMessage, isAuthenticated } = this.props;


    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={ text => this.emailChange(text)}

      />
        </CardSection>

        <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={ text => this.passwordChange(text)}
        />
        </CardSection>

        <CardSection>
          <Button onPress={() => this.handleLoginClick()}>
          Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles ={
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default (LoginForm);