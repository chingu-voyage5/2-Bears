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
import{ BottomNav, ImageLoader } from '../common'
import { getCategories } from '../../actions'

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

  renderItem = ({ item, index }) => {
    console.log(item.category)
    return (
      <ImageLoader item={item} category={item.category}/>
    );
  };

  render() {
    const formatData = (data, numColumns) => {
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
    console.log(this.props)
    return (
      <View style={styles.container}>
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
  console.log('THIS IS REDUX STATE',state.items.newCategoriesList);
  return {
    categories: state.items.newCategoriesList,
  };
};

// const mapDispatchToProps =() => {
//   return {
//     getCategoryItems
//   }
// }

export default connect(mapStateToProps)(CategoriesList);