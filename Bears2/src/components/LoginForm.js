import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
          />
        </CardSection>

        <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
        />
        </CardSection>

        <CardSection>
          <Button onPress={Actions.CategoryList}>
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