import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Interactable from 'react-native-interactable';

export default class CollapsingHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Cart Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});