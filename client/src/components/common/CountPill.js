import React, { Component } from 'react';
import {
  StyleSheet,
	View,
  Text,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

const CountPill = ({ cartActions, title, description, image, price, category, id, count, updateCount }) => {
  const newOnPress = (type) => {
    if(type === 'add'){
      cartActions.addToCart(title,description,image,price,category,id)
    } else if (type === 'delete') {
      cartActions.deleteCartItem(id)
    }
    updateCount(type)
  }
  return (
    <View style={styles.pillWrapper}>
      <TouchableWithoutFeedback onPress={()=>{newOnPress('add')}}>
        <View style={styles.addCart}>
          <Text style={styles.pillText}>+</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.cartCount}>
        <Text style={styles.countText}>{count}</Text>
      </View>

      <TouchableWithoutFeedback onPress={()=>{newOnPress('delete')}}>
        <View style={styles.deleteCart}>
          <Text style={styles.pillText}>-</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  pillWrapper: {
    position: 'absolute',
    top: 24,
    height: 78,
    width: 45,
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
  addCart: {
    top: 0,
    width: 45,
    height: 24,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartCount: {
    top:0,
    width: 45,
    height: 30,
    backgroundColor:'#5A66D1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteCart: {
    bottom:0,
    width: 45,
    height: 24,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillText: {
    color: '#000',
    fontSize: 18,
  },
  countText: {
    color: '#fff',
    fontSize: 18,
  }
});

export { CountPill };