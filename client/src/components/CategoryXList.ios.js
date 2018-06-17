import React, { Component } from 'react';
import CategoryX from './CategoryX';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import { BottomNav } from './common';
const data = [
  { key: 'Meal1' }, { key: 'Meal2' }, { key: 'Meal3' }, { key: 'Meal4' }, { key: 'Meal5' }, { key: 'Meal6' }, { key: 'Meal7' }, { key: 'Meal8' }, { key: 'Meal9' }, { key: 'Meal10' }, { key: 'Meal11' }, { key: 'Meal12' }, { key: 'Meal13' },
]

class CategoryXList extends Component {
  renderItem = ({ item, index }) => {
    return (
      <View>
        <CategoryX
          title={item.key}
          description="Phasellus posuere lectus vel mattis bibendum. Aliquam vulputate quis mi vitae sodales. Nulla vel luctus quam."
        />
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: .9}}>
          <FlatList
            data={data}
            style={styles.container}
            renderItem={this.renderItem}
          />
        </View>
        <View style={{flex: 0.1}}>
          <BottomNav text="Bottom Navigation"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default(CategoryXList);