import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import StatsCard from './StatsCard';

class StatsItem extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>More Info about stat item</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    // alignItems: 'center',
    // alignSelf: 'center',
    borderRadius: 15,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    minHeight: 100,
    shadowOffset:{ width: 3,  height: 3, },
    shadowColor: '#000',
    shadowOpacity: .05,
  },
  cardTitle: {
    color: '#000',
  },
})

export default(StatsItem);