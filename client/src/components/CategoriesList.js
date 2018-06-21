import React, { Component } from 'react';
import Interactable from 'react-native-interactable';
import {
  Animated,
  Dimensions,
  FlatList,
  Platform,
  ScrollView,
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

class CategoriesList extends Component {
  constructor(props) {
    super(props);

    this._deltaY = new Animated.Value(0);
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
        delayPressIn={2}
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
      <View style={styles.container}>
        <Animated.View >
          <FlatList
            data={formatData(categories, numColumns)}
            keyExtractor={item => item.key}
            renderItem={this.renderItem}
            numColumns={numColumns}
            style={styles.flatlist}
          />
        </Animated.View>
        <BottomNav
        topValue={ -140 }
        openTimes={<Text style={styles.openTimes} >8:00AM to 22:00AM</Text>}
        linkOneElement={<Text style={[styles.slideupText, {paddingTop: 0}]} >Cart</Text>}
        linkTwoElement={<Text style={styles.slideupText} >About</Text>}
        linkThreeElement={<Text style={styles.slideupText} >Login</Text>}
        linkOneScene={Actions.cart}
        linkTwoScene={Actions.about}
        linkThreeScene={Actions.auth}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    marginBottom: 50
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

export default(CategoryXList);