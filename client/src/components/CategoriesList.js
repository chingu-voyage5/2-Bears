import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const data = [
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

const numColumns = 3

class CategoryXList extends Component {
  constructor(props) {
    super(props);
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: .5
    }).start()
  }

  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40
    }).start()
    Actions.categoryXList();
  }

  renderItem = ({ item, index }) => {
    const animatedStyle = {
      transform: [{ scale: this.animatedValue }]
    }

    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableWithoutFeedback
        // pressRetentionOffset={{ top: 0, left: 0, bottom: 0, right: 0 }}
        delayPressIn={100}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
      >
      <View style={{flex: 1}}>
      <Animated.View style={[styles.item, animatedStyle]}>
        <Text style={styles.itemText}>{item.key}</Text>
      </Animated.View>
      </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#4d243d',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});

export default(CategoryXList);