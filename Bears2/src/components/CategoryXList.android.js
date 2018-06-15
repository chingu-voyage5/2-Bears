import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const data = [
  { key: 'Meal1' }, { key: 'Meal2' }, { key: 'Meal3' }, { key: 'Meal4' }, { key: 'Meal5' }, { key: 'Meal6' }, { key: 'Meal7' }, { key: 'Meal8' }, { key: 'Meal9' }, { key: 'Meal10' }, { key: 'Meal11' }, { key: 'Meal12' }, { key: 'Meal13' },
]

const numColumns = 3.5;
class CategoryXList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title : props.title,
      expanded : false,
      animation : new Animated.Value(15)
    };
  }

  _setMaxHeight(event){
    this.setState({
        maxHeight   : event.nativeEvent.layout.height
    });
  }

  _setMinHeight(event){
    this.setState({
      minHeight: event.nativeEvent.layout.height,
    });
  }

  hideOnExpand() {
    console.log('hits function')
    this.state.expanded ? { height:0, width: 0 } : { display: 'block' }
  }

  toggle() {
    let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
    finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
    this.setState({
        expanded : !this.state.expanded  //Step 2
    });

    this.state.animation.setValue(initialValue);  //Step 3
    Animated.spring(     //Step 4
        this.state.animation,
        {
            toValue: finalValue
        }
    ).start();
  }

  renderItem = ({ item, index }) => {
    return (
      <View
        style={styles.fakeOverflowCard}
      >
        <View style={styles.plate}>
          <Text style={styles.plateText}>IMG</Text>
        </View>
        <View style={styles.card}>
          <TouchableWithoutFeedback
          onPress={this.toggle.bind(this)}
          >
            <View style={{paddingTop: 22}}>
              <Animated.View style={{height: this.state.animation}}>
                <Text style={styles.cardTitle} onLayout={this._setMinHeight.bind(this)}>{item.key}</Text>
                <Text style={[styles.cardDescription, this.hideOnExpand.bind(this)]} onLayout={this._setMaxHeight.bind(this)}>
                Phasellus posuere lectus vel mattis bibendum. Aliquam vulputate quis mi vitae sodales. Nulla vel luctus quam.
                </Text>
              </Animated.View>
              <Text style={styles.cardReview} >
                5 stars
                75mg fat
              </Text>
            </View>
          </TouchableWithoutFeedback>

        </View>
        <TouchableWithoutFeedback>
          <View style={styles.addCart}>
            <Text style={styles.addCartText}>+</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={data}
        style={styles.container}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    // paddingTop: 22,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    width: '70%',
    elevation: 2,
    minHeight: 100,
  },
  cardTitle: {
    color: '#000',
  },
  cardDescription: {
    // left: -45,
    width: 150,
    paddingVertical: 20,
    color: '#000',
  },
  cardReview: {
    // left: -45,
    width: 150,
    paddingVertical: 20,
    color: '#000',
    backgroundColor: 'white',
  },
  plate: {
    position: 'absolute',
    top: 20,
    left: 40,
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  plateText: {
    color: '#000',
  },
  addCart: {
    position: 'absolute',
    right: 45,
    bottom: 36,
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  addCartText: {
    color: '#000',
  },
  fakeOverflowCard: {
    // fakes overflow but requires more markup
    backgroundColor: "transparent",
    width: '100%',
    marginVertical: 10,
    // justifyContent: 'center',
    position: "relative",
    paddingVertical: 5,
  },
});

export default(CategoryXList);