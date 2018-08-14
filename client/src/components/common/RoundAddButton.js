import React, { Component } from 'react';
import {
  StyleSheet,
	View,
  Text,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

const RoundAddButton = ({ onPress, children ,type,count,updateCount}) => {
  const typeText = type === 'delete'? '-':'+';
  const typeStyle = type === 'delete'? styles.deleteCart:styles.addCart;
  const  newOnPress =(type)=>{
    if(type !== 'count'){
    onPress()
    updateCount(type)
    }

  }
  return (
    <View>
      <TouchableWithoutFeedback onPress={()=>{newOnPress(type)}}>
        <View style={type === "count"? styles.cartCount : typeStyle}>
          <Text style={styles.addCartText}>{type === "count"?count:typeText}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  addCart: {
    position: 'absolute',
    bottom:72,
    width: 33,
    height: 33,
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
    fontSize: 18,
  },
  deleteCart: {
    position: 'absolute',
    bottom:5,
    width: 33,
    height: 33,
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
  cartCount: {
    position: 'absolute',
    bottom:40,
    width: 20,
    height: 30,
    borderRadius: 25,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        right: 60,
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
});

export { RoundAddButton };