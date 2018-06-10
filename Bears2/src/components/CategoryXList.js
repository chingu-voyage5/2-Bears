import React, { Component } from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
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
            <Text style={styles.cardText}>+</Text>
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
    width: '60%',
    // margin:15,
    height: Dimensions.get('window').width / numColumns,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowOffset:{  width: 3,  height: 3,  },
        shadowColor: '#000',
        shadowOpacity: .05,
      },
    }),
  },
  plate: {
    position: 'absolute',
    left: 60,
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowOffset:{  width: 5,  height: 5,  },
        shadowColor: '#000',
        shadowOpacity: .05,
      },
    }),
  },
  cardText: {
    color: '#000',
  },
  plateText: {
    color: '#000',
  },
  addCart: {
    position: 'absolute',
    right: 65,
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowOffset:{  width: -1,  height: 5,  },
        shadowColor: '#000',
        shadowOpacity: .05,
      },
    }),
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