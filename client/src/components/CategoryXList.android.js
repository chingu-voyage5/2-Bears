import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BottomNav } from './common';
import CategoryX from './CategoryX';
import categoryDetails from '../SeedData/orderItemSeed';
import { setCategoryItems } from '../actions'

const numColumns = 3.5;
class CategoryXList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: this.props.category,
    }
    this.props.dispatch(setCategoryItems());
  }

  componentWillMount() {
    const categoryPick = this.props.category
    console.log('picked the category: ', categoryPick)

    getItemsOfSame = (inputArray, callback) => inputArray.filter(callback)
    hasSameCategory = (a) => ('category', a.category == categoryPick)

    const getCategoryItems = getItemsOfSame(categoryDetails, hasSameCategory)
    console.log(getCategoryItems)

    this.props.dispatch(setCategoryItems(getCategoryItems));
    // this.setState({ category: getItemsOfSame(categoryDetails, hasSameCategory) })
    // console.log(this.state.category)
  }

  renderItem = ({ item, index }) => {
    // console.log('renderItem entered')
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
              data={this.props.categoryItems}
              style={styles.container}
              renderItem={ this.renderItem}
              keyExtractor={item => item.id}
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


const mapStateToProps = (state) => {
  console.log(state)
  return {
    // category: state.items.category,
    categoryItems: state.items.categoryItems,
  };
};

export default connect(mapStateToProps)(CategoryXList);
// export default (CategoryXList);