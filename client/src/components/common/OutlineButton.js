import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const OutlineButton = ({ onPress, children }) => {

  return (
      <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
          {children}
        </Text>
      </TouchableOpacity>
  );
};

const styles = {

  textStyle: {
    alignSelf: 'center',
    color: 'rgba(50, 50, 50, 1)',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    // flex: 1,
    // alignSelf: 'stretch',
    width: 120,
    backgroundColor: 'transparent',
    borderColor: 'rgba(50, 50, 50, 1)',
    borderWidth: 2,
    borderRadius: 35,
    paddingHorizontal: 30,
    // paddingVertical: 20,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 4,
  }
};

export { OutlineButton };