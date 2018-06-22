import React from 'react';
import Underline from './Underline';
import FloatingLabel from './FloatingLabel';
import { Animated, TextInput, View, Text } from 'react-native';

class Textfield extends Component {
  constructor(props) {
    super(props);
    this.theme = getTheme();
    this.inputFrame = {};
    this.anim = null;
    this.state = {
      inputMarginTop: 0,
    };
  }

  set bufferedValue(v) {
    this._bufferedValue = v;
    if (v) {
      this._aniFloatLabel();
    }
  }

  get bufferedValue() {
    return (this._bufferedValue || '').trim();
  }

  focus() {
    if (this.refs.input) {
      this.refs.input.focus();
    }
  }

  isFocused() {
    return this.refs.input && this.refs.input.isFocused();
  }

  blur() {
    if (this.refs.input) {
      this.refs.input.blur();
    }
  }

  componentWillMount() {
    this.bufferedValue = this.props.value || this.props.text ||
    this.props.defaultValue;
    this._originPlaceholder = this.props.placeholder;
  }

  componentWillReceiveProps(nextProps) {
    const newText = nextProps.value || nextProps.text || nextProps.defaultValue;
    if (newText) {
      this.bufferedValue = newText;
    }
    this._originPlaceholder = nextProps.placeholder;
  }

  componentDidMount() {
    requestAnimationFrame(this._doMeasurement.bind(this));
  }

  // property initializers begin

  _onTextChange = (text) => {
    this.bufferedValue = text;
    this._callback('onTextChange', text);
    this._callback('onChangeText', text);
  };

  _onFocus = (e) => {
    this._aniStartHighlight(true);
    this._callback('onFocus', e);
  };

  _onBlur = (e) => {
    this._aniStopHighlight();
    this._callback('onBlur', e);
  };

  // property initializers end

  startAnimations(animations, cb) {
    if (this.anim) {
      this.anim.stop();
    }

    this.anim = Animated.parallel(animations).start(cb);
  }

  _doMeasurement() {
    if (this.refs.input) {
      this.refs.input.measure(this._onInputMeasured.bind(this));
      if (this.props.floatingLabelEnabled && this.refs.floatingLabel) {
        this.refs.floatingLabel.measure(this._onLabelMeasured.bind(this));
      }
    }
  }

  _onLabelMeasured(left, top, width, height) {
    this.setState({ inputMarginTop: height });
  }

  _onInputMeasured(left, top, width, height) {
    Object.assign(this.inputFrame, { left, top, width, height });
    this.refs.underline.updateLineLength(width, () => {
      if (this.bufferedValue || this.isFocused()) {
        this._aniStartHighlight(this.isFocused());  // if input not empty, lift the label
      }
    });
  }

  _aniFloatLabel() {
    if (!(this.bufferedValue && this.props.floatingLabelEnabled)) {
      return;
    }

    if (this.refs.floatingLabel) {
      const animations = this.refs.floatingLabel.aniFloatLabel();
      if (animations.length) {
        this.startAnimations(animations);
      }
    }
  }

  // animation when textfield focused
  _aniStartHighlight(focused) {
    if (this.props.floatingLabelEnabled) {
      // hide fixed placeholder, if floating
      this.setPlaceholder('');

      // and show floating label
      // FIXME workaround https://github.com/facebook/react-native/issues/3220
      if (this.refs.floatingLabel)
        this.refs.floatingLabel.updateText(this._originPlaceholder);
    }

    // stretch the underline if enabled
    const animations = this.refs.underline.aniStretchUnderline(focused);

    // and lift the floating label, if enabled
    if (this.props.floatingLabelEnabled && this.refs.floatingLabel) {
      animations.push(...this.refs.floatingLabel.aniFloatLabel());
    }

    if (animations.length) {
      this.startAnimations(animations);
    }
  }

  // animation when textfield lost focus
  _aniStopHighlight() {
    // shrink the underline
    const animations = this.refs.underline.aniShrinkUnderline();

    // pull down the label, or keep position if input is not empty
    if (this.props.floatingLabelEnabled && !this.bufferedValue) {
      // input is empty, label should be pulled down
      animations.push(...this.refs.floatingLabel.aniSinkLabel());
    }

    if (animations.length) {
      this.startAnimations(animations, () => {
        if (this.props.floatingLabelEnabled) {
          // then show fixed placeholder
          this.setPlaceholder(this._originPlaceholder);

          // and hide floating label
          // FIXME workaround https://github.com/facebook/react-native/issues/3220
          if (!this.bufferedValue && this.refs.floatingLabel) {
            this.refs.floatingLabel.updateText('');
          }
        }
      });
    }
  }

  setPlaceholder(placeholder) {
    if (this.refs.input) {
      this.refs.input.setNativeProps({ placeholder });
    }
  }

  _callback(name, e) {
    if (this.props[name]) {
      this.props[name](e);
    }
  }

  render() {
    const tfTheme = this.theme.textfieldStyle;
    let floatingLabel;
    if (this.props.floatingLabelEnabled) {
      // the floating label
      const props = Object.assign(
        pick(['tintColor', 'highlightColor', 'floatingLabelFont'], tfTheme),
        utils.extractProps(this, FloatingLabel.propTypes));

      floatingLabel = (
        <FloatingLabel ref="floatingLabel"
          {...props}
          text={this.props.placeholder}
          allowFontScaling={this.props.allowFontScaling}
        />
      );
    }

    const underlineProps = Object.assign(
      pick(['tintColor', 'highlightColor'], tfTheme),
      utils.extractProps(this, ['tintColor',
        'highlightColor', 'underlineSize', 'underlineEnabled']));
    const inputProps = utils.extractProps(this, {
      ...TextInput.propTypes,
      password: 1,
    });

    return (
      <View style={this.props.style} onLayout={this._doMeasurement.bind(this)}>
        {floatingLabel}
        <TextInput  // the input
          ref="input"
          {...inputProps}
          {...this.props.additionalInputProps}
          style={textFieldStyle}
          onChangeText={this._onTextChange}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          allowFontScaling={this.props.allowFontScaling}
          secureTextEntry={this.props.password}
          underlineColorAndroid="transparent"
        />
        <Underline ref="underline"  // the underline
          {...underlineProps}
          underlineAniDur={this.props.floatingLabelAniDuration}
        />
      </View>
    );
  }
}

const styles = {
  textFieldStyle: {
    backgroundColor: MKColor.Transparent,
    alignSelf: 'stretch',
    paddingTop: 2, paddingBottom: 2,
    marginTop: this.state.inputMarginTop,
  },
};

export { TextField };