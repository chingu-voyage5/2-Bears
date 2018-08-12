import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Animated,
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CmsPreview from '../admin/CMS/CmsPreview';
import{ BottomNav, ImageLoader} from '../common'
import CardActionButton from '../common/CartActionButton';
import { getCategories } from '../../actions'
import * as cartAct from '../../actions/cartActions';
import {bindActionCreators } from 'redux';

const numColumns = 3
const bottomNavHeight = 50
const androidTopNavHeight = 80
const iosTopNavHeight = 60

class CategoriesList extends Component {
  constructor(props) {
    super(props);

    this._deltaY = new Animated.Value(0);
    this.props.dispatch(getCategories());
  }

  componentWillUpdate(nextProps, nextState){
    console.log('categorieslist updated');
  }

  renderItem = ({ item, index }) => {

    return (
      <ImageLoader item={item} category={item.category}/>
    );
  };

  render() {
    const formatData =  (data, numColumns) => {

      if(data){
      const numberOfFullRows = Math.floor(data.length / numColumns);

      let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
      while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
      }

      return data;
    }
    };
    return (
      <View style={styles.container}>
        <View style={styles.fakeNav}/>
        <View>
          <FlatList
            data={ formatData( this.props.categories, numColumns)}
            keyExtractor={item => 'c' + item.key}
            renderItem={this.renderItem}
            numColumns={numColumns}
            style={styles.flatlist}
          />
        </View>
        <BottomNav
          topValue={ 0 }
          openTimes={<Text style={styles.openTimes} >8:00AM to 22:00AM</Text>}
          linkOneElement={<Text style={[styles.slideupText, {paddingTop: 0}]} >Cart</Text>}
          linkTwoElement={<Text style={styles.slideupText} >Food Categories</Text>}
          linkThreeElement={<Text style={styles.slideupText} >Login</Text>}
          linkOneScene={()=>Actions.push('cart', {hideNavBar: true})}
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
    position:'relative'
  },
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
  flatlist: {
    // minHeight: '92%',
    // minHeight: '94%',
    ...Platform.select({
      android: {
        height: ((Dimensions.get('window').height) - androidTopNavHeight) - bottomNavHeight,
      },
      ios: {
        height: ((Dimensions.get('window').height) - iosTopNavHeight) - bottomNavHeight,
      }
    }),
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

const mapDispatchToProps = dispatch => {
  return {
    cartActions:bindActionCreators(cartAct,dispatch),
    dispatch
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoriesList);