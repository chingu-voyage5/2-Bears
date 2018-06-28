import React, { Component } from 'react';
import { Dimensions, ScrollView, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, FloatingInput, Button, Spinner } from './common';

class RegisterForm extends Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.containerStyle}>
          <View style={styles.titleStyle}>
            <Text style={styles.titleText}>Register</Text>
          </View>
          <View style={styles.cardStyle}>
            <View style={styles.inputSection}>
              <FloatingInput
                label="First Name"
                placeholder="John"
              />
            </View>

            <View style={styles.inputSection}>
              <FloatingInput
                label="Last Name"
                placeholder="Johnson"
              />
            </View>

            <View style={styles.inputSection}>
              <FloatingInput
                label="Username"
                placeholder="TheJohn007"
              />
            </View>

            <View style={styles.inputSection}>
              <FloatingInput
                label="Email"
                placeholder="email@email.com"
              />
            </View>

            <View style={styles.inputSection}>
              <FloatingInput
                secureTextEntry
                label="Password"
                placeholder="password"
              />
            </View>

          </View>

          <View style={[styles.buttonSection, {justifyContent: 'center'}]}>
            <Button onPress={ Actions.main}>
              Register
            </Button>
            <View style={styles.signupText}>
              <Text style={styles.text}>Not your first time here?</Text>
                <TouchableWithoutFeedback onPress={ Actions.login }>
                  <View>
                    <Text style={styles.signupLink }>
                      Log in
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles ={
  containerStyle: {
    flex: 1,
    // minHeight: 550,
    paddingVertical: 80,
    justifyContent: 'space-around',
  },
  titleStyle: {
    alignSelf: 'center',
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '800',
    color: 'rgba(40, 40, 40, 1)'
  },
  cardStyle: {
    // minHeight: 500,
    marginHorizontal: 25,
    marginVertical: 25
  },
  inputSection: {
    padding: 5,
    flexDirection: 'row',
    position: 'relative'
  },
  buttonSection: {
    padding: 5,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  signupText: {
    marginTop: 15,
  },
  text: {

  },
  signupLink: {
    paddingLeft: 5,
    color: 'rgba(63, 81, 181, 0.75)',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default (RegisterForm);