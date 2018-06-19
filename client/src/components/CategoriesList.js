import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BottomNav, ImageLoader } from './common';

const numColumns = 3
const categories = [
  { key: 'Category1' }, { key: 'Category2' }, { key: 'Category3' }, { key: 'Category4' }, { key: 'Category5' }, { key: 'Category6' }, { key: 'Category7' }, { key: 'Category8' }, { key: 'Category9' }, { key: 'Category10' }, { key: 'Category11' }, { key: 'Category12' }, { key: 'category13' },
]
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};

class CategoriesList extends Component {
  renderItem = ({ item, index }) => {
    return (
      <ImageLoader  item={item} />
    );
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <FlatList
            data={formatData(categories, numColumns)}
            keyExtractor={item => item.key}
            style={styles.container}
            renderItem={this.renderItem}
            numColumns={numColumns}
          />
        </ScrollView>
        <BottomNav />
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

export default(CategoriesList);