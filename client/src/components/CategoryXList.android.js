import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import CategoryX from './CategoryX';
import { BottomNav } from './common';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import categoryDetails from '../SeedData/orderItemSeed';

const numColumns = 3.5;
class CategoryXList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: this.props.category,
    }
  }

  componentWillMount() {
    console.log(categoryDetails)
    const categoryName = this.state.category
    function uniqBy (inputArray, callback) {
      return inputArray.filter(callback)
    }
    var inputFunc = function (a) {
      return ('category', a.category == categoryName)
    }

    this.setState({ category: uniqBy(categoryDetails, inputFunc) })
    console.log(this.state.category)
  }

  renderItem = ({ item, index }) => {
    return (
      <CategoryX
        title={item.title}
        description={item.description}
      />
    );
  };

  render() {
    return (
        <View style={{flex: 1}}>
          <View>
            <FlatList
              data={this.state.category}
              style={styles.container}
              renderItem={this.renderItem}
              keyExtractor={item => item.key}
            />
          </View>
          <BottomNav
            topValue={ -140 }
            openTimes={<Text style={styles.openTimes} >8:00AM to 22:00AM</Text>}
            linkOneElement={<Text style={[styles.slideupText, {paddingTop: 0}]} >Cart</Text>}
            linkTwoElement={<Text style={styles.slideupText} >Food Categories</Text>}
            linkThreeElement={<Text style={styles.slideupText} >Login</Text>}
            linkOneScene={Actions.cart}
            linkTwoScene={Actions.categoriesList}
            linkThreeScene={Actions.auth}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: 50,
    minHeight: '92%',
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