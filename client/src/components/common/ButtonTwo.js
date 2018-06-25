import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonTwo = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  buttonStyle: {
    // flex: 1,
    alignSelf: 'center',
    backgroundColor: 'rgba(63, 81, 181, 0.75)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(63, 81, 181, 0.75)',
    marginLeft: 5,
    marginRight: 5
  }
};

export { ButtonTwo };
