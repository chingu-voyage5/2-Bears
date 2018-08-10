import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

class QRGenerator extends Component {
  render() {
    return (
      <QRCode
        value="THIS IS SO COOL"
      />
    );
  };
}

const styles = StyleSheet.create({})

export default(QRGenerator);