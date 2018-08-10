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
import CmsPreview from '../admin/CMS/CmsPreview';
import { BottomNav } from '../common';
import CategoryXItem from '../CategoryXItem.android';
import categoryDetails from '../../SeedData/orderItemSeed';
import { setCategoryItems } from '../../actions'
import {bindActionCreators} from 'redux';
import * as cartAct from '../../actions/cartActions';
import CartActionButton from '../common/CartActionButton';

const bottomNavHeight = 50
const iosTopNavHeight = 80
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

    getItemsOfSame = (inputArray, callback) => inputArray.filter(callback)
    hasSameCategory = (a) => ('category', a.category == categoryPick)

    const getCategoryItems = getItemsOfSame(categoryDetails.data, hasSameCategory)

    this.props.dispatch(setCategoryItems(getCategoryItems));
  }


  renderItem = ({ item, index }) => {
    return (
      <CategoryXItem
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
          <View>
            <CartActionButton/>
            <FlatList
              data={this.props.categoryItems}
              style={styles.container}
              renderItem={ this.renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <BottomNav
            topValue={ 0 }
            openTimes={<Text style={styles.openTimes} >8:00AM to 22:00AM</Text>}
            linkOneElement={<Text style={[styles.slideupText, {paddingTop: 0}]} >Cart</Text>}
            linkTwoElement={<Text style={styles.slideupText} >Food Categories</Text>}
            linkThreeElement={<Text style={styles.slideupText} >Login</Text>}
            linkOneScene={()=>this.props.cartActions.toggleCart()}
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