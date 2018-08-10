import React, { Component } from 'react';
import Interactable from 'react-native-interactable';
import { Actions } from 'react-native-router-flux';
import {
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

class BottomNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topValue: props.topValue,
      linkOneElement: props.linkOneElement,
      linkOneScene: props.linkOneScene,
      linkTwoElement: props.linkTwoElement,
      linkTwoScene: props.linkTwoScene,
      linkThreeElement: props.linkThreeElement,
      linkThreeScene: props.linkThreeScene,
      openTimes: props.openTimes,
    }
    this._deltaY = new Animated.Value(0);
  }
  render() {
    return (
      <View style={styles.container}>
        <Interactable.View
          verticalOnly={true}
          snapPoints={[{y: 0}, {y: -240}]}
          boundaries={{bottom: 0, top: -240}}
          animatedValueY={this._deltaY}
          style={[styles.interactableView, {top: this.state.topValue}]}
        >
          <View style={styles.slideupContainer}>
            <View style={styles.slideupToggle} />
            {this.state.openTimes}
            <TouchableWithoutFeedback onPress={this.state.linkOneScene} >
              <View>
                {this.state.linkOneElement}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.state.linkTwoScene} >
              <View>
                {this.state.linkTwoElement}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.state.linkThreeScene} >
              <View>
                {this.state.linkThreeElement}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Interactable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  interactableView: {
    height: Dimensions.get('window').height - 300,
  },
  slideupContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20,
    paddingLeft: 35,
    left: 0,
    right: 0,
    height: 290,
    backgroundColor: 'white',
    ...Platform.select({
      android: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.125)',
      },
      ios: {
        shadowOffset:{  width: 0,  height: -3,  },
        shadowColor: '#000',
        shadowOpacity: .05,
      }
    })
  },
  slideupToggle: {
    marginLeft: -35,
    height: 10,
    width: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#c1c1c1',
    alignSelf: 'center',
  },
});

export { BottomNav };