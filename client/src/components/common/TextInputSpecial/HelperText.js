import * as React from 'react';
import { Animated, StyleSheet } from 'react-native';

const AnimatedText = Animated.createAnimatedComponent(Text);

class HelperText extends React.PureComponent<Props, State> {

  state = {
    shown: new Animated.Value(this.props.visible ? 1 : 0),
    textHeight: 0,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible) {
      if (this.props.visible) {
        this._animateFocus();
      } else {
        this._animateBlur();
      }
    }
  }

  _animateFocus = () => {
    Animated.timing(this.state.shown, {
      toValue: 1,
      duration: 150,
    }).start();
  };

  _animateBlur = () => {
    Animated.timing(this.state.shown, {
      toValue: 0,
      duration: 180,
    }).start();
  };

  _handleTextLayout = e =>
    this.setState({
      textHeight: e.nativeEvent.layout.height,
    });

  render() {
    const { style, type, visible, theme } = this.props;
    const { colors, dark } = theme;

    const textColor =
      this.props.type === 'error'
        ? colors.error
        : color(colors.text)
            .alpha(dark ? 0.7 : 0.54)
            .rgb()
            .string();

    return (
      <AnimatedText
        onLayout={this._handleTextLayout}
        style={[
          styles.text,
          {
            color: textColor,
            opacity: this.state.shown,
            transform:
              visible && type === 'error'
                ? [
                    {
                      translateY: this.state.shown.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-this.state.textHeight, 0],
                      }),
                    },
                  ]
                : [],
          },
          style,
        ]}
      >
        {this.props.children}
      </AnimatedText>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    paddingVertical: 4,
  },
});

export default withTheme(HelperText);