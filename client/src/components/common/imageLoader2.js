
import React, { Component } from 'react';
// import { connect } from 'react-redux';
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

class ImageLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category : props.category,
      numColumns : props.numColumns,
    }
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: .5
    }).start()
  }

  handlePressOut() {
    console.log('clicked on: ', this.props)
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40
    }).start()
    Actions.categoryXList({category: this.state.category});
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
    height: Dimensions.get('window').width / 3
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
};

export { ImageLoader };