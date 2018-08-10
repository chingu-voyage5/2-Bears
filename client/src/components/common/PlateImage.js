import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
	View,
  Text,
  Platform
} from 'react-native';

class PlateImage extends Component {
  
	render() {
    
		return (
      <View style={styles.plate}>
        {this.props.image?<Image style={styles.image} source={{uri:this.props.image}}/>:<Text style={styles.plateText}>IMG</Text>}
      </View>
		);
	}
}

const styles = StyleSheet.create({
  plate: {
    position: 'absolute',
    top: 28,
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        left: 50,
        elevation: 3,
      },
      ios: {
        left: -20,
        shadowOffset:{  width: 3,  height: 3,  },
        shadowColor: '#000',
        shadowOpacity: .05,
      }
    })
  },
  plateText: {
    color: '#000',
  },
  image:{
    width:'100%',
    height:"100%",
   
    borderRadius:25
  }
});

export { PlateImage };