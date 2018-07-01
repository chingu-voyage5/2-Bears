import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SolidButton = ({ onPress, children }) => {

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
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    // flex: 1,
    // alignSelf: 'stretch',
    backgroundColor: 'rgba(50, 50, 50, 1)',
    borderRadius: 35,
    // borderWidth: 1,
    // borderColor: '#007aff',
    // marginLeft: 5,
    // marginRight: 5,
    paddingHorizontal: 60,
    // paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  }
};

export { SolidButton };
