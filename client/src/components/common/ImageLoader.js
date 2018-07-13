
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
// import categories from '../../SeedData/orderItemSeed';
// import { getCategoryItems } from '../../actions'

class ImageLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category : props.category,
      numColumns : props.numColumns,
    }
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
    // this.getCategoryItems() = this.props.dispatch(getCategoryItems()).bind(this);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: .5
    }).start()
    // const categoryName = this.state.category
    // const categoryItems = categories.filter(function(arr) {
    //   return arr.category == categoryName;
    // });
    // this.setState({
    //   category : categoryItems
    // })
    // console.log(this.state.category)
  }

  handlePressOut() {
    console.log('cool new word', this.props)
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40
    }).start()
    // Actions.categoryXList({ category: this.props.dispatch(getCategoryItems(this.state.category)) });
    // this.getCategoryItems(this.state.category);
    Actions.categoryXList();

  }

  render() {
    const animatedStyle = {
      transform: [{ scale: this.animatedValue }]
    }

    if (this.props.item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableWithoutFeedback
        delayPressIn={100}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
      >
        <View style={{flex:1}}>
          <Animated.View style={[styles.item, animatedStyle]}>
            <Text style={styles.itemText}>{this.props.category}</Text>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = {
  item: {
    backgroundColor: '#4d243d',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / 3 //this.numColumns
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
};

const mapStateToProps = (state) => {
  return {
    // categoryPick: state.items.category,
    category: this.state.category,
  };
};

// export { ImageLoader };
export connect(mapStateToProps)( ImageLoader );