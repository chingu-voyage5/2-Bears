import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

class FloatingInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: this.props.label,
      value: '',
      onChangeText: this.props.onChangeText,
      placeholder: this.props.placeholder,
      secureTextEntry: this.props.secureTextEntry,
      isFocused: false,
      underlineColor: 'rgba(0, 0, 0, 0.12)',
      labelMarginBottom: 3,
      labelColor: 'rgba(0, 0, 0, 0.12)',
    }
  }

  // handleFloatingLabel() {
  //   if (this.state.isFocused || this.state.value !== '') {
  //     // return (
  //     //   <View style={styles.floatingLabelStyle}>
  //     //     <Text style={[styles.floatingLabelText, {color: this.state.labelColor, marginBottom: this.state.marginColor, }]}>
  //     //       {`${this.state.label}...`}
  //     //     </Text>
  //     //   </View>
  //     // )
  //     this.setState({ labelColor: 'rgba(63, 81, 181, 0.9)', marginBottom: 45,})
  //   }
  // }

  handleInputFocus() {
    console.log('focus worksss')
    this.setState({
      isFocused: true,
      underlineColor: 'rgba(63, 81, 181, 0.9)',
      labelColor: 'rgba(63, 81, 181, 0.9)',
      labelMarginBottom: 45,
    });
    console.log(this.state.labelMarginBottom)
  }

  handleInputBlur() {
    console.log('blur worksss')
    this.setState({ isFocused: false,
      underlineColor: 'rgba(0, 0, 0, 0.12)',
      labelColor: 'rgba(0, 0, 0, 0.12)',
      labelMarginBottom: 3,
    });
    console.log(this.state.labelMarginBottom)
  }
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.floatingLabelStyle}>
          <Text
            handleFloatingLabel={() => this.handleFloatingLabel()} 
            style={[
              styles.floatingLabelText,
              {
                color: this.state.labelColor,
                marginBottom: this.state.labelMarginColor,
              }
            ]}>
            {`${this.state.label}...`}
          </Text>
        </View>
        <TextInput
          label={this.props.label}
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          placeholderTextColor={'rgba(0, 0, 0, 0.12)'}
          selectionColor={'rgba(63, 81, 181, 0.9)'}
          underlineColorAndroid='transparent'
          autoCorrect={false}
          style={[styles.inputStyle, {borderBottomColor: this.state.underlineColor}]}
          value={this.props.value}
          onChangeText={(text) => this.setState({value: text})}
          onFocus={() => this.handleInputFocus()}
          onBlur={() => this.handleInputBlur()}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            console.log('height:', layout.height);
            console.log('width:', layout.width);
            console.log('x:', layout.x);
            console.log('y:', layout.y);
          }}
        />
      </View>
    );
  }
};

const styles = {
  inputStyle: {
    color: 'rgba(63, 81, 181, 0.9)',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
    borderBottomWidth: 2,
    // borderBottomColor: 'rgba(63, 81, 181, 0.9)',
  },
  floatingLabelStyle: {
    position: 'absolute',
  },
  floatingLabelText: {
    fontSize: 18,
    marginBottom: 45,
    marginBottom: 3,
    marginLeft: 5,
  },
  containerStyle: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { FloatingInput };