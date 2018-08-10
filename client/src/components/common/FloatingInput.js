import React, { Component } from 'react';
import { Dimensions, TextInput, View, Text } from 'react-native';

class FloatingInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: this.props.label,
      ellipsis: '',
      value:this.props.value,
      onChangeText: this.props.onChangeText,
      placeholder: this.props.placeholder || '',
      secureTextEntry: this.props.secureTextEntry,
      isFocused: false,
      underlineColor: 'rgba(0, 0, 0, 0.12)',
      labelMarginBottom: 3,
      labelColor: 'rgba(63, 81, 181, 0.75)',
      fontStyle: 'normal',
      fontSize: 18,
      display: 'flex',
      width: 0,
    }
  }

  handleInputFocus() {
    this.setState({
      isFocused: true,
      underlineColor: 'rgba(63, 81, 181, 0.75)',
      labelColor: 'rgba(0, 0, 0, 0.4)',
      labelMarginBottom: 45,
      fontStyle: 'italic',
      fontSize: 14,
      display: 'none',
      ellipsis: '...',
    });
  }
  
  handleInputBlur() {

    if ( this.state.value == this.props.value || ''  ) {
      this.setState({ isFocused: true,
        underlineColor: 'rgba(0, 0, 0, 0.12)',
        labelColor: 'rgba(63, 81, 181, 0.75)',
        labelMarginBottom: 3,
        fontStyle: 'normal',
        fontSize: 18,
        ellipsis: '',
        display: 'flex',
      });
    } else {
      this.setState({ isFocused: false,
        underlineColor: 'rgba(0, 0, 0, 0.12)',
      });
    }
  }

  measure(layout) {
    const { width } = layout;
    this.setState({ width: width }) 
  } 

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.floatingLabelStyle}>
          <Text
            style={[
              styles.floatingLabelText,
              {
                color: this.state.labelColor,
                marginBottom: this.state.labelMarginBottom,
                fontStyle: this.state.fontStyle,
                fontSize: this.state.fontSize,
              }
            ]}>
            {`${this.state.label}${this.state.ellipsis}`}
          </Text>
        </View>
        <View style={styles.placeholderStyle}>
          <Text
            style={[
              styles.placeholderText,
              {
                display: this.state.display,
                left: (Dimensions.get('window').width / 2) - (this.state.width / 2),
              }
            ]}
            onLayout={(event) => { this.measure(event.nativeEvent.layout) }}
          >
            {`${this.state.placeholder}`}
          </Text>
        </View>
        <TextInput
          label={this.props.label}
          secureTextEntry={this.props.secureTextEntry}
          placeholderTextColor={'rgba(0, 0, 0, 0.12)'}
          placeholder=' '
          selectionColor={'rgba(63, 81, 181, 0.9)'}
          underlineColorAndroid='transparent'
          autoCorrect={false}
          style={[styles.inputStyle, {borderBottomColor: this.state.underlineColor}]}
          value={this.props.value}
          onChangeText={(text) => this.props.ChangeText? this.props.ChangeText(text,this.props.name): this.setState({value: text})}
          onFocus={() => this.handleInputFocus()}
          onBlur={() => this.handleInputBlur()}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
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
    flex: 2,
    borderBottomWidth: 2,

    // borderBottomColor: 'rgba(63, 81, 181, 0.9)',
  },
  floatingLabelStyle: {
    position: 'absolute',
  },
  floatingLabelText: {
    marginLeft: 5,
  },
  placeholderStyle: {
    position: 'absolute',
  },
  placeholderText: {
    color: 'rgba(0, 0, 0, 0.12)',
    fontSize: 18,
    marginBottom: 3,
    alignSelf: 'center',
  },
  containerStyle: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
};

export { FloatingInput };