import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import { Card, CardSection, FloatingInput, ButtonTwo, Spinner } from '../common';
import {Actions} from 'react-native-router-flux';

class Settings extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.buttonContainerStyle}>
          <ButtonTwo onPress={Actions.cms}>
            Save
          </ButtonTwo>
        </View>
        <View style={styles.card}>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'Number of courses'}
              placeholder={'1'}
            />
          </View>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'how many options for first course?'}
              placeholder=''
            />
          </View>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'how many options for second course?'}
              placeholder=''
            />
          </View>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'Add Kid Menu? (answer \'yes\' or \'no\')'}
              placeholder=''
            />
          </View>
          <View style={styles.cardSection}>
            <FloatingInput
              label={'How many drink options?'}
              placeholder=''
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

// const mapStateToProps = (state) => {
//   const {
//     numberofCourses,
//     numberofOptionsCourseOne,
//     numberofOptionsCourseTwo,
//     numberofOptionsCourseThree,
//     numberofOptionsCourseFour,
//     numberofOptionsCourseFive,
//     numberofMenue,
//     numberofDrinks,
//   } = state.Setting;

//   return {
//     numberofCourses,
//     numberofOptionsCourseOne,
//     numberofOptionsCourseTwo,
//     numberofOptionsCourseThree,
//     numberofOptionsCourseFour,
//     numberofOptionsCourseFive,
//     numberofMenue,
//     numberofDrinks,
//   };
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    // marginBottom: 100,
  },
  buttonContainerStyle: {
    flexDirection: "row",
    justifyContent: 'space-around',
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
    fontSize: 18,
    color: '#000',
    fontWeight: '800',
    marginBottom: 10,
    // paddingTop: 15,
  }
})

export default (Settings);

//'rgba(63,81,181, 0.9)'
//'rgba(0,0,0, 0.12)'