import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import { Card, CardSection, FloatingInput, Button, Spinner } from '../common';

class Settings extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>SETTINGS</Text>
        <View style={styles.card}>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'First Course Name'}
            />
          </View>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'Age Group One'}
            />
          </View>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'Age Group Two'}
            />
          </View>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'Meal Option One'}
            />
          </View>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'Meal One Price'}
            />
          </View>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'Meal Option Two'}
            />
          </View>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'Meal Two Price'}
            />
          </View>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'Meal Option Three'}
            />
          </View>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'Meal Three Price'}
            />
          </View>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'Meal Option Four'}
            />
          </View>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'Meal Four Price'}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    // marginBottom: 100,
  },
  card: {
    borderColor: 'transparent',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 50,
  },
  cardSection: {
    borderBottomWidth: 1,
    padding: 5,
    // backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: 'transparent',
    position: 'relative'
  },
  title: {
    paddingLeft: 15,
    // paddingTop: 15,
  }
})

export default(Settings);

//'rgba(63,81,181, 0.9)'
//'rgba(0,0,0, 0.12)'