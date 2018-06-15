import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
	View,
	Text
} from 'react-native';

class PlateImage extends Component {
	render() {
		return (
      <View style={styles.plate}>
        <Text style={styles.plateText}>IMG</Text>
      </View>
		);
	}
}

const styles = StyleSheet.create({
  plate: {
    position: 'absolute',
    top: 28,
    left: 50,
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  plateText: {
    color: '#000',
  },
});

export { PlateImage };