import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Heart, StarRating, RoundAddButton, PlateImage } from '../common'
// import { connect } from 'react-redux';
// import { employeeUpdate, employeeCreate } from '../actions';
// onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}

class StatsCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id : props.id,
      customer : props.customer,
      scanTime : props.scanTime,
      tableNo : props.tableNo,
      action : props.action,
      menuOne: props.menuOne,
      menuTwo: props.menuTwo,
    }
  }

  // getMenuOneOrderstats() {
  //   const menuOne = this.props.menuOne
  //   menuOne.map(x => {
  //     let i = 0
  //     while(i > menuOne.length && menuOne[i].value !== 'N/A') {


  //     }
  //   })
  // }

  // getMenuTwoOrderstats() {

  // }

  render() {
    return (
      <View style={styles.card}>
        <TouchableWithoutFeedback
          onPress={Actions.statsItem}
        >
          <View style={{paddingVertical: '8%', paddingHorizontal: '8%',}}>
            <Text style={styles.cardTitle}>{this.props.id}</Text>
            <Text>{this.props.customer}</Text>
            <Text>{this.props.scanTime}</Text>
            <View style={styles.menuOneStyle}>
              <Text>{this.props.menuOne.courseOne.optionOne}</Text>
              <Text>{this.props.menuOne.courseOne.optionTwo}</Text>
              <Text>{this.props.menuOne.courseOne.optionThree}</Text>
              <Text>{this.props.menuOne.courseTwo.optionOne}</Text>
              <Text>{this.props.menuOne.courseTwo.optionTwo}</Text>
              <Text>{this.props.menuOne.courseTwo.optionThree}</Text>
              <Text>{this.props.menuOne.courseThree.optionOne}</Text>
              <Text>{this.props.menuOne.courseThree.optionTwo}</Text>
              <Text>{this.props.menuOne.courseThree.optionThree}</Text>
              <Text>{this.props.menuOne.courseFour.optionOne}</Text>
              <Text>{this.props.menuOne.courseFour.optionTwo}</Text>
              <Text>{this.props.menuOne.courseFour.optionThree}</Text>
              <Text>{this.props.menuOne.courseFive.optionOne}</Text>
              <Text>{this.props.menuOne.courseFive.optionTwo}</Text>
              <Text>{this.props.menuOne.courseFive.optionThree}</Text>
            </View>
            <View style={styles.menuTwoStyle}>
              <Text>{this.props.menuTwo.courseOne.optionOne}</Text>
              <Text>{this.props.menuTwo.courseOne.optionTwo}</Text>
              <Text>{this.props.menuTwo.courseOne.optionThree}</Text>
              <Text>{this.props.menuTwo.courseTwo.optionOne}</Text>
              <Text>{this.props.menuTwo.courseTwo.optionTwo}</Text>
              <Text>{this.props.menuTwo.courseTwo.optionThree}</Text>
              <Text>{this.props.menuTwo.courseThree.optionOne}</Text>
              <Text>{this.props.menuTwo.courseThree.optionTwo}</Text>
              <Text>{this.props.menuTwo.courseThree.optionThree}</Text>
              <Text>{this.props.menuTwo.courseFour.optionOne}</Text>
              <Text>{this.props.menuTwo.courseFour.optionTwo}</Text>
              <Text>{this.props.menuTwo.courseFour.optionThree}</Text>
              <Text>{this.props.menuTwo.courseFive.optionOne}</Text>
              <Text>{this.props.menuTwo.courseFive.optionTwo}</Text>
              <Text>{this.props.menuTwo.courseFive.optionThree}</Text>
            </View>
            <Text>{this.props.tableNo}</Text>
            <Text>{this.props.action}</Text>

          </View>
        </TouchableWithoutFeedback>
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
    marginVertical: 10,
    marginHorizontal: 20,
    minHeight: 100,
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: '#000',
    shadowOpacity: .05,
  },
  cardTitle: {
    color: '#000',
  },
  cardDescription: {
    width: 300,
    paddingVertical: 20,
    color: '#000',
  },
  menuOneStyle: {
    flexDirection: 'row',
  },
  menuTwoStyle: {
    flexDirection: 'row',
  },
  // fakeOverflowCard: {
  //   // fakes overflow but requires more markup
  //   backgroundColor: "transparent",
  //   width: '100%',
  //   marginVertical: 10,
  //   position: "relative",
  //   paddingVertical: 5,
  // },
});

export default(StatsCard);