import React, { Component } from 'react';
import {
  Animated,
  NativeModules,
  TextInput,
  View,
  Text
} from 'react-native';

class FloatingLabel extends Component {
  constructor(props) {
    super(props);
    this.labelDim = {};
    this.offsetX = 0;
    this.placeholderHeight = 0;
    this.state = {
      progress: new Animated.Value(1),
      opacity: new Animated.Value(0),
      text: '',
    };
  }

  componentWillMount() {
    this.updateText(this.props.text);
  }

  componentWillReceiveProps(nextProps) {
    this.updateText(nextProps.text);
  }

  // property initializers begin

  _onLabelLayout = ({ nativeEvent: { layout } }) => {
    console.log('onlabellayout function works')
    const x = layout.x;
    const width = layout.width;
    const height = layout.height;

    if (width && !this.offsetX) {
      this.offsetX = ((width - (width * 0.8)) / 2 * -1) - x;
    }

    if (height && !this.placeholderHeight) {
      this.placeholderHeight = height;
    }

    if (width !== this.labelDim.width || height !== this.labelDim.height) {
      this.labelDim = { width, height };
    }
  };

  // property initializers end

  updateText(text) {
    this.setState({ text });
  }

  measure(cb) {
    return this.refs.label && UIManager.measure(findNodeHandle(this.refs.label), cb);
  }

  aniFloatLabel() {
    if (!this.props.floatingLabelEnabled) {
      return [];
    }

    return [Animated.sequence([
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: this.props.opacityAniDur,
      }),
      Animated.timing(this.state.progress, {
        toValue: 0,
        duration: this.props.floatingLabelAniDuration,
      }),
    ])];
  }

  aniSinkLabel() {
    if (!this.props.floatingLabelEnabled) {
      return [];
    }

    return [Animated.sequence([
      Animated.timing(this.state.progress, {
        toValue: 1,
        duration: this.props.floatingLabelAniDuration,
      }),
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: this.props.opacityAniDur,
      }),
    ])];
  }
  //outputRange: ['rgba(63,81,181, 0.9)', 'rgba(0, 0, 0, 0.12)'],
  render() {
    const labelColor = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.highlightColor, this.props.tintColor],
    });

    const labelScale = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0.8, 1],
    });

    const labelY = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.placeholderHeight],
    });

    const labelX = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [this.offsetX, 0],
    });

    return (
      <Animated.Text
        ref="label"
        pointerEvents="none"
        allowFontScaling={this.props.allowFontScaling}

        style={[
          styles.floatingLabelStyle, {
            top: labelY,
            left: labelX,
            color: labelColor,
            opacity: this.state.opacity,
            transform: [{ scale: labelScale }],
            marginBottom: this.props.floatingLabelBottomMargin,
          }]}
        onLayout={this._onLabelLayout}
      >
        {this.state.text}
      </Animated.Text>
    );
  }
}

const styles = {
  floatingLabelStyle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    fontSize: 16,
    // fontSize: 10,
    // fontStyle: 'italic',
    // fontWeight: '200',
    // marginBottom: 20,
  },
};

export default FloatingLabel;
