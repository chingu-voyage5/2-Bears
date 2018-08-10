import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect} from 'react-redux';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BottomNav } from './common';
import CategoryXItem from './CategoryXItem';
import categoryDetails from '../SeedData/orderItemSeed';
import { setCategoryItems } from '../actions'

const bottomNavHeight = 50
const iosTopNavHeight = 60
class CategoryXList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: this.props.category
    }
    this.props.dispatch(setCategoryItems());
  }

  componentWillMount(){
    const categoryPick = this.props.category
    console.log('picked the category: ', categoryPick)

    getItemsOfSame = (inputArray, callback) => inputArray.filter(callback)
    hasSameCategory = (a) => ('category', a.category == categoryPick)

    const getCategoryItems = getItemsOfSame(categoryDetails.data, hasSameCategory)
    console.log(getCategoryItems)

    this.props.dispatch(setCategoryItems(getCategoryItems));
  }

  renderItem = ({ item, index }) => {
    return (
      <View>
        <CategoryXItem
          title={item.title}
          description={item.description}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <FlatList
            data={this.props.categoryItems}
            style={styles.container}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <BottomNav
          topValue={ 0 }
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
    paddingTop: 20,
    minHeight: ((Dimensions.get('window').height) - iosTopNavHeight) - bottomNavHeight,
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
const mapStateToProps = state => state;


const mapStateToProps = (state) => {
  console.log(state)
  return {
    categoryItems: state.items.categoryItems,
  };
};

export default connect(mapStateToProps)(CategoryXList);

