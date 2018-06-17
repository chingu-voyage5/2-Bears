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
  fakeOverflowCard: {
    // fakes overflow but requires more markup
    backgroundColor: "transparent",
    width: '100%',
    marginVertical: 10,
    position: "relative",
    paddingVertical: 5,
  },
});

export default(CategoryXList);