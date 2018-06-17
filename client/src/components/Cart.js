import React, { Component } from 'react';
import Interactable from 'react-native-interactable';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Heart, StarRating, RoundAddButton, PlateImage } from './common'

class Cart extends Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(0);
  }
  render() {
    return (
      <View style={styles.container}>
        <Interactable.View
          verticalOnly={true}
          snapPoints={[{y: 0}, {y: -300}]}
          boundaries={{bottom: 300, bottom: 0}}
          animatedValueY={this._deltaY}
          style={{justifyContent: 'flex-end', top: 500}}
        >
          <View style={{left: 0, right: 0, height: 550, backgroundColor: 'red'}} />
        </Interactable.View>
        <View style={{backgroundColor: 'yellow', height: 50, alignItems: 'center', justifyContent: 'flex-end', top: 300}}>
          <Animated.View style={{
            transform: [
              {
                translateY: this._deltaY.interpolate({
                  inputRange: [-150, -150, 0, 0],
                  outputRange: [-58, -58, 0, 0]
                })
              },
              {
                scale: this._deltaY.interpolate({
                  inputRange: [-150, -150, 0, 0],
                  outputRange: [0.35, 0.35, 1, 1]
                })
              }
            ]
          }}>
          </Animated.View>
        </View>

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

export default(Cart);