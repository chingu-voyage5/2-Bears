import React, { Component } from 'react';
import {
  StyleSheet,
	View,
  Text,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

class RoundAddButton extends Component {
	render() {
		return (
      <View>
        <TouchableWithoutFeedback>
          <View style={styles.addCart}>
            <Text style={styles.addCartText}>+</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
		);
	}
}

const styles = StyleSheet.create({
  addCart: {
    position: 'absolute',
    bottom: 42,
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        right: 55,
        elevation: 3,
      },
      ios: {
        right: -15,
        shadowOffset:{  width: -1,  height: 5,  },
        shadowColor: '#000',
        shadowOpacity: .05,
      }
    })
  },
  addCartText: {
    color: '#000',
  },
});

export { RoundAddButton };