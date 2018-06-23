import React, { Component } from 'react';
import { Animated, TextInput, View, Text } from 'react-native';

class Underline extends Component {
  constructor(props) {
    super(props);
    this.animatedLeft = new Animated.Value(0);
    this.animatedLineLength = new Animated.Value(0);
    this.state = {
      lineLength: 0,
      // lineLength: 2,
    };
  }

  // update the length of stretched underline
  updateLineLength(lineLength, cb) {
    this.setState({ lineLength }, cb);
  }

  // stretch the line, from center
  aniStretchUnderline(focused) {
    if (!(this.props.underlineEnabled && focused)) {
      return [];
    }

    this.animatedLeft.setValue(this.state.lineLength / 2);
    return [
      Animated.timing(this.animatedLeft, {
        toValue: 0,
        duration: this.props.underlineAniDur,
      }),
      Animated.timing(this.animatedLineLength, {
        toValue: this.state.lineLength,
        duration: this.props.underlineAniDur,
      }),
    ];
  }

  // // collapse the the line to a single point at center
  aniShrinkUnderline() {
    if (!this.props.underlineEnabled) {
      return [];
    }

    return [
      Animated.timing(this.animatedLeft, {
        toValue: this.state.lineLength / 2,
        duration: this.props.underlineAniDur,
      }),
      Animated.timing(this.animatedLineLength, {
        toValue: 0,
        duration: this.props.underlineAniDur,
      }),
    ];
  }

  // the colorful forefront line, animation enabled
  renderUnderline() {
    return this.props.underlineEnabled && (
      <Animated.View
        style={styles.underlineStyle}
      />);
  }

  render() {
    return (
      <View pointerEvents="none"
        style={[styles.container, {height: this.props.underlineSize}]}
      >
        <View  // the default silver border
          style={[styles.borderStyle, {backgroundColor: this.props.tintColor, height: this.props.underlineSize, width: this.state.lineLength,}]}
        />
        {this.renderUnderline()}
      </View>
    );
  }
}

const styles = {
  container: {
    height: 2,
  },
  borderStyle: {
    position: 'absolute',
    // backgroundColor: 'rgba(0, 0, 0, 0.12)',
    // height: 2,
  },
  underlineStyle: {
    position: 'absolute',
    backgroundColor: 'rgba(63,81,181, 0.9)',
    // height: 2,
    left: this.animatedLeft,
    width: this.animatedLineLength,
  },
};

export default Underline;