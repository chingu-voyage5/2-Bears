import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BottomNav, ImageLoader } from './common'
import { getCategories } from '../actions'

const numColumns = 3

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

    // this.state = {
    //   uniqueCategories: uniqueCategories,
    // }

    this._deltaY = new Animated.Value(0);
    // this.props.dispatch(getCategories(orderItems));
    this.props.dispatch(getCategories());
  }

  renderItem = ({ item, index }) => {
    console.log(item.category)
    // console.log(this.props.categories)
    return (
      <ImageLoader item={item} category={item.category}/>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={formatData(this.props.categories, numColumns)}
            keyExtractor={item => 'c' + item.key}
            renderItem={this.renderItem}
            numColumns={numColumns}
            style={styles.flatlist}
          />
        </View>
        <BottomNav
          topValue={ -140 }
          openTimes={<Text style={styles.openTimes} >8:00AM to 22:00AM</Text>}
          linkOneElement={<Text style={[styles.slideupText, {paddingTop: 0}]} >Cart</Text>}
          linkTwoElement={<Text style={styles.slideupText} >Food Categories</Text>}
          linkThreeElement={<Text style={styles.slideupText} >Login</Text>}
          linkOneScene={Actions.cart}
          linkTwoScene={Actions.main}
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
    minHeight: '94%',
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

const mapStateToProps = (state) => {
  return {
    categories: state.items.newCategoriesList,
  };
};

export default connect(mapStateToProps)(CategoriesList);