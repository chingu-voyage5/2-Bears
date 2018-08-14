import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Animated,
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const FakeNav = () => {
  return(
    <View style={styles.fakeNav}/>
  );
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

export { FakeNav };