import React, { Component } from 'react';
import CategoryX from './CategoryX';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const categories = [
  { key: 'Meal1' }, { key: 'Meal2' }, { key: 'Meal3' }, { key: 'Meal4' }, { key: 'Meal5' }, { key: 'Meal6' }, { key: 'Meal7' }, { key: 'Meal8' }, { key: 'Meal9' }, { key: 'Meal10' }, { key: 'Meal11' }, { key: 'Meal12' }, { key: 'Meal13' },
]

const numColumns = 3.5;
class CategoryXList extends Component {
  renderItem = ({ item, index }) => {
    return (
      <CategoryX
        title={item.key}
        description="Phasellus posuere lectus vel mattis bibendum. Aliquam vulputate quis mi vitae sodales. Nulla vel luctus quam."
      />
    );
  };

  render() {
    return (
      <FlatList
        data={categories}
        style={styles.container}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  // card: {
  //   backgroundColor: '#fff',
  //   // paddingTop: 22,
  //   alignItems: 'center',
  //   alignSelf: 'center',
  //   borderRadius: 15,
  //   width: '70%',
  //   elevation: 2,
  //   minHeight: 100,
  // },
  // cardTitle: {
  //   color: '#000',
  // },
  // cardDescription: {
  //   // left: -45,
  //   width: 150,
  //   paddingVertical: 20,
  //   color: '#000',
  // },
  // cardReview: {
  //   // left: -45,
  //   width: 150,
  //   paddingVertical: 20,
  //   color: '#000',
  //   backgroundColor: 'white',
  // },
  // plate: {
  //   position: 'absolute',
  //   top: 20,
  //   left: 40,
  //   width: 70,
  //   height: 70,
  //   borderRadius: 25,
  //   backgroundColor:'#fff',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   elevation: 3,
  // },
  // plateText: {
  //   color: '#000',
  // },
  // addCart: {
  //   position: 'absolute',
  //   right: 45,
  //   bottom: 36,
  //   width: 40,
  //   height: 40,
  //   borderRadius: 25,
  //   backgroundColor:'white',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   elevation: 3,
  // },
  // addCartText: {
  //   color: '#000',
  // },
  fakeOverflowCard: {
    // fakes overflow but requires more markup
    backgroundColor: "transparent",
    width: '100%',
    marginVertical: 10,
    // justifyContent: 'center',
    position: "relative",
    paddingVertical: 5,
  },
});

export default(CategoryXList);