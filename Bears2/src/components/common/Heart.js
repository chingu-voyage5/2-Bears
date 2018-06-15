import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const Heart = ({ filled, style, ...props }) => {
  const centerNonFilled = (
    <View style={[StyleSheet.absoluteFill, styles.fit]}>
      <View style={[styles.leftHeart, styles.heartShape, styles.emptyFill]} />
      <View style={[styles.rightHeart, styles.heartShape, styles.emptyFill]} />
    </View>
  );

  const fillStyle = filled? styles.filledHeart : styles.empty;
  return (
    <Animated.View { ...props } style={[ styles.heart, style ]}>
      <View style={[styles.leftHeart, styles.heartShape, fillStyle]} />
      <View style={[styles.rightHeart, styles.heartShape, fillStyle]} />
      {!filled && centerNonFilled}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  heart: {
    width: 25,
    height: 25,
    backgroundColor: 'transparent',
  },
  heartShape: {
    width: 15,
    height: 22.5,
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 7.5,
    borderTopRightRadius: 7.5,
  },
  filledHeart: {
    backgroundColor: '#e31745',
  },
  fit: {
    transform: [
      { scale: .9 },
    ]
  },
  emptyFill: {
    backgroundColor: '#fff',
  },
  empty: {
    backgroundColor: '#ccc'
  },
  leftHeart: {
    transform: [
      { rotate: '-45deg' }
    ],
    left: 2.5
  },
  rightHeart: {
    transform: [
    { rotate: '45deg'}
    ],
    right: 2.5,
  }
})


export { Heart };