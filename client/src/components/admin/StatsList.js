import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import StatsDetail from './StatsCard';
import customers from '../SeedData/customerSeedData'

const numColumns = 3.5;
class StatsList extends Component {
  renderItem = ({ item, index }) => {
    return (
      <StatsDetail
        id={item.key}
        customer={item.name}
        scanTime={item.scanTime}
        menuOne={item.menuOne}
        menuTwo={item.menuTwo}
        tableNo={item.tableNo}
        action={item.action}
      />
    );
  };

  render() {
    return (
        <View style={{flex: 1}}>
          <View>
            <FlatList
              data={customers}
              style={styles.container}
              renderItem={this.renderItem}
              keyExtractor={item => item.key}
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: 50,
  },
  openTimes: {
    paddingTop: 15,
    paddingBottom: 25,
    fontSize: 20,
    left: (Dimensions.get('window').width / 2) - 125,
  },
  slideupText: {
    paddingTop: 20,
    fontSize: 20,
  }
});

export default(StatsList);


// menuOneCourseOneOptionOne={item.menuOne.courseOne.optionOne}
// menuOneCourseOneOptionTwo={item.menuOne.courseOne.optionTwo}
// menuOneCourseOneOptionThree={item.menuOne.courseOne.optionThree}
// menuOneCourseTwoOptionOne={item.menuOne.courseTwo.optionOne}
// menuOneCourseTwoOptionTwo={item.menuOne.courseTwo.optionTwo}
// menuOneCourseTwoOptionThree={item.menuOne.courseTwo.optionThree}
// menuOneCourseThreeOptionOne={item.menuOne.courseThree.optionOne}
// menuOneCourseThreeOptionTwo={item.menuOne.courseThree.optionTwo}
// menuOneCourseThreeOptionThree={item.menuOne.courseThree.optionThree}
// menuOneCourseFourOptionOne={item.menuOne.courseFour.optionOne}
// menuOneCourseFourOptionTwo={item.menuOne.courseFour.optionTwo}
// menuOneCourseFourOptionThree={item.menuOne.courseFour.optionThree}
// menuOneCourseFiveOptionOne={item.menuOne.courseFive.optionOne}
// menuOneCourseFiveOptionTwo={item.menuOne.courseFive.optionOne}
// menuOneCourseFiveOptionThree={item.menuOne.courseFive.optionOne}
// menuTwoCourseOneOptionOne={item.menuTwo.courseOne.optionOne}
// menuTwoCourseOneOptionTwo={item.menuTwo.courseOne.optionTwo}
// menuTwoCourseOneOptionThree={item.menuTwo.courseOne.optionThree}
// menuTwoCourseTwoOptionOne={item.menuTwo.courseTwo.optionOne}
// menuTwoCourseTwoOptionTwo={item.menuTwo.courseTwo.optionTwo}
// menuTwoCourseTwoOptionThree={item.menuTwo.courseTwo.optionThree}
// menuTwoCourseThreeOptionOne={item.menuTwo.courseThree.optionOne}
// menuTwoCourseThreeOptionTwo={item.menuTwo.courseThree.optionTwo}
// menuTwoCourseThreeOptionThree={item.menuTwo.courseThree.optionThree}
// menuTwoCourseFourOptionOne={item.menuTwo.courseFour.optionOne}
// menuTwoCourseFourOptionTwo={item.menuTwo.courseFour.optionTwo}
// menuTwoCourseFourOptionThree={item.menuTwo.courseFive.optionThree}
// menuTwoCourseFiveOptionOne={item.menuTwo.courseFive.optionOne}
// menuTwoCourseFiveOptionTwo={item.menuTwo.courseFive.optionTwo}
// menuTwoCourseFiveOptionThree={item.menuTwo.courseFive.optionThree}