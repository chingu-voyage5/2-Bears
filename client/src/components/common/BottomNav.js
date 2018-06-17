import React, { Component } from 'react';
import Interactable from 'react-native-interactable';
import {
  StyleSheet,
  Image,
	View,
  Text,
  Platform,
} from 'react-native';


const BottomNav = (props) => {
  return (
    <Interactable.View
      horizontalOnly={true}
      snapPoints={[{x: 0}, {x: -200}]}
      onSnap={this.onDrawerSnap}
    >
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.text}</Text>
      </View>
    </Interactable.View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
});

export { BottomNav };