import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

class KitchenStatus extends Component {
  render() {
    return (
      <View>
        <View style={styles.fakeNav}/>
        <Text>KITCHENSTATUS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fakeNav: {
    position: 'absolute',
    top: -56,
    width: '100%',
    height: 55,
    backgroundColor: 'white',
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowOffset:{  width: -1,  height: 5,  },
        shadowColor: '#000',
        shadowOpacity: .05,
      }
    })
  },
})

export default(KitchenStatus);