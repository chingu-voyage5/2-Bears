import React, { Component } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const data = [
  { key: 'Meal1' }, { key: 'Meal2' }, { key: 'Meal3' }, { key: 'Meal4' }, { key: 'Meal5' }, { key: 'Meal6' }, { key: 'Meal7' }, { key: 'Meal8' }, { key: 'Meal9' }, { key: 'Meal10' }, { key: 'Meal11' }, { key: 'Meal12' }, { key: 'Meal13' },
]

const numColumns = 3.5;
class CategoryXList extends Component {
  renderItem = ({ item, index }) => {
    return (
      <View style={styles.fakeOverflowCard}>
        <View style={styles.plate}>
          <Text style={styles.plateText}>IMG</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>{item.key}</Text>
        </View>
        <TouchableWithoutFeedback>
          <View style={styles.addCart}>
            <Text style={styles.addCartText}>+</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={data}
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
  card: {
    backgroundColor: '#fff',
    paddingTop: 22,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    width: '70%',
    elevation: 2,
    height: Dimensions.get('window').width / numColumns,
  },
  plate: {
    position: 'absolute',
    left: 40,
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  cardText: {
    left: -45,
    color: '#000',
  },
  plateText: {
    color: '#000',
  },
  addCart: {
    position: 'absolute',
    right: 45,
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  addCartText: {
    color: '#000',
  },
  fakeOverflowCard: {
    // fakes overflow but requires more markup
    backgroundColor: "transparent",
    width: '100%',
    marginVertical: 10,
    justifyContent: 'center',
    position: "relative",
    paddingVertical: 5,
  },
});

export default(CategoryXList);