import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
// import { connect} from 'react-redux';
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
class CategoryXList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: this.props.category
    }
  }

  componentWillMount(){
    console.log(categoryDetails)
    const categoryName = this.state.category
    function uniqBy (inputArray, callback) {
      return inputArray.filter(callback)
    }
    var inputFunc = function (a) {
      return ('category', a.category == categoryName )
    }

    this.setState({ category: uniqBy(categoryDetails, inputFunc)})
    console.log(this.state.category)
  }

  renderItem = ({ item, index }) => {
    return (
      <View>
        <CategoryX
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
            data={this.state.category}
            style={styles.container}
            renderItem={this.renderItem}
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
    marginTop: 20,
    minHeight: '99%',
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

// const mapStateToProps = state => state;

export default(CategoryXList);
// export default connect(mapStateToProps)(CategoryXList);

