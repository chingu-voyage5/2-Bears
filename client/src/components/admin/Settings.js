import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Card, CardSection, FloatingInput, Button, Spinner } from '../common';

class Settings extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>SETTINGS</Text>
        <View style={styles.card}>
          <View style={styles.cardSection}>
            <FloatingInput 
              label={'Email'}
              secureTextEntry={false}
              placeholder={''}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSection: {
    borderBottomWidth: 1,
    padding: 5,
    // backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'transparent',
    position: 'relative'
  },
})

export default(Settings);

//'rgba(63,81,181, 0.9)'
//'rgba(0,0,0, 0.12)'