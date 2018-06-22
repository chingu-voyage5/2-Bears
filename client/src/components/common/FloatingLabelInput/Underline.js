import React from 'react';
import { Animated, TextInput, View, Text } from 'react-native';

class Underline extends Component {
  constructor(props) {
    super(props);
    this.animatedLeft = new Animated.Value(0);
    this.animatedLineLength = new Animated.Value(0);
    this.state = {
      lineLength: 0,
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

  // collapse the the line to a single point at center
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
        style={styles.container}
      >
        <View  // the default silver border
          style={styles.borderStyle}
        />
        {this.renderUnderline()}
      </View>
    );
  }
}

const styles = {
  underlineStyle: {
    position: 'absolute',
    backgroundColor: this.props.highlightColor,
    height: this.props.underlineSize,
    left: this.animatedLeft,
    width: this.animatedLineLength,
  },
  container: {
    // top: -this.props.underlineSize,
    height: this.props.underlineSize,
  },
  borderStyle: {
    position: 'absolute',
    backgroundColor: this.props.tintColor,
    height: this.props.underlineSize,
    width: this.state.lineLength,
  },
};

export default Underline;