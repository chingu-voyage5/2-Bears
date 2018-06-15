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
        <View style={styles.card}>
          <View style={styles.plate}>
            <Text style={styles.plateText}>IMG</Text>
          </View>
          <Text style={styles.cardText}>{item.key}</Text>
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
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: '70%',
    margin:15,
    height: Dimensions.get('window').width / numColumns,
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: '#000',
    shadowOpacity: .05,
  },
  plate: {
    position: 'absolute',
    left: -20,
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: '#000',
    shadowOpacity: .05,
  },
  cardText: {
    top: -22,
    left: -35,
    color: '#000',
  },
  plateText: {
    color: 'black',
    backgroundColor: 'white',
  },
  addCart: {
    position: 'absolute',
    right: -20,
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset:{  width: -1,  height: 5,  },
    shadowColor: '#000',
    shadowOpacity: .05,
  },
  addCartText: {
    color: '#000',
  }
});

export default(CategoryXList);