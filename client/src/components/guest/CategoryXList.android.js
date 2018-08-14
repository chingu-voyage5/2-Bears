import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import FoodItem from './FoodItem';
import { BottomNav } from '../common';
import CmsPreview from '../admin/CMS/CmsPreview';
import { setCategoryItems } from '../../actions';
import * as cartAct from '../../actions/cartActions';
import CartActionButton from '../common/CartActionButton';
import categoryDetails from '../../SeedData/orderItemSeed';

const bottomNavHeight = 50
const iosTopNavHeight = 80
class CategoryXList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: this.props.category,
      categoryItems:this.props.categoryItems
    }
    this.props.dispatch(setCategoryItems());
  }

  componentWillMount() {
    console.log(this.props)
    const categoryPick = this.props.category

    getItemsOfSame = (inputArray, callback) => inputArray.filter(callback)
    hasSameCategory = (a) => ('category', a.category == categoryPick)

    const getCategoryItems = getItemsOfSame(categoryDetails.data, hasSameCategory)

    this.props.dispatch(setCategoryItems(getCategoryItems));
  }


  renderItem = ({ item, index }) => {
    return (
      <FoodItem
        cart={this.props.cart}
        title={item.title}
        description={item.description}
        price={item.price}
        image={item.image}
        category={item.category}
        id={item.id}
        cartActions={this.props.cartActions}
      />
    );
  };

  render() {
    return (
        <View style={{flex: 1}}>
          <View style={styles.fakeNav}/>
          <CartActionButton/>
          <ScrollView style={styles.scrollView}>
            <FlatList
              data={this.props.categoryItems}
              style={styles.container}
              renderItem={ this.renderItem}
              keyExtractor={item => item.id}
            />
          </ScrollView>
          <BottomNav
            topValue={ 0 }
            openTimes={<Text style={styles.openTimes} >8:00AM to 22:00AM</Text>}
            linkOneElement={<Text style={[styles.slideupText, {paddingTop: 0}]} >Cart</Text>}
            linkTwoElement={<Text style={styles.slideupText} >Food Categories</Text>}
            linkThreeElement={<Text style={styles.slideupText} >Login</Text>}
            linkOneScene={()=>Actions.push('cart', {hideNavBar: true})}
            linkTwoScene={Actions.categoriesList}
            linkThreeScene={Actions.auth}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  fakeNav: {
    position: 'absolute',
    top: -56,
    width: '100%',
    height: 55,
    backgroundColor: 'white',
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowOffset:{  width: -1,  height: 5,  },
        shadowColor: '#000',
        shadowOpacity: .05,
      }
    })
  },
  scrollView: {
    minHeight: ((Dimensions.get('window').height) - iosTopNavHeight) - bottomNavHeight,
    maxHeight: ((Dimensions.get('window').height) - iosTopNavHeight) - bottomNavHeight,
  },
  container: {
    // paddingTop: 20,
    // marginBottom: 60,
    // minHeight: ((Dimensions.get('window').height) - iosTopNavHeight) - bottomNavHeight,
    minHeight: '100%',
    // maxHeight: ((Dimensions.get('window').height) - iosTopNavHeight) - bottomNavHeight,
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

const mapDispatchToProps = dispatch =>{
  return{
    cartActions:bindActionCreators(cartAct,dispatch),
    dispatch
  }
}

const mapStateToProps = (state) => {
  return {
    categoryItems: state.items.categoryItems,
    cart:state.cart
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CategoryXList);