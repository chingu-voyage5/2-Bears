import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CountPill, Heart, PlateImage, StarRating } from '../common'

class FoodItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count:this.props.cart.filter(item=> item.id == this.props.id).length > 0?
      this.props.cart.filter(item=> item.id == this.props.id)[0].quantity:0 ,
      title : props.title,
      expanded : false,
      animation : new Animated.Value(16),
      liked: false,
      scale: new Animated.Value(0),
      animations: [
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
      ]
    }
    this.updateCount = this.updateCount.bind(this);
    this.triggerLike = this.triggerLike.bind(this);
  }

  componentWillMount() {
    console.log(this)
  }

  componentWillUpdate(nextProps, nextState){
    console.log('CategoryXItem updated');
  }

  triggerLike() {
    this.setState({
      liked: !this.state.liked
    })
    Animated.spring(this.state.scale, {
      toValue: 2,
      friction: 3
    }).start(() => {
      this.state.scale.setValue(0);
    });
  }

  _setMaxHeight(event){
    console.log(event.nativeEvent.layout)
    this.setState({
        maxHeight: (event.nativeEvent.layout.height) + 100 // nativeEvent.layoutHeight isn't the correct height for some reason. Added 100 to see text for now.
    });
  }

  _setMinHeight(event){
    this.setState({
      minHeight: event.nativeEvent.layout.height,
    });
  }

  hideOnExpand() {
    // console.log('hits hide on expand function')
    this.state.expanded ? { height:0, width: 0 } : {display: 'block' }
  }

  toggle() {
    let initialValue = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
    finalValue       = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
    this.setState({
        expanded : !this.state.expanded
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(
        this.state.animation,
        {
            toValue: finalValue
        }
    ).start();
  }

  updateCount(type){
    if(type === 'delete'){
      if(this.state.count === 0){
        return;
      }
      this.setState({
        count:this.state.count -1
      })
    }
    else if(type === 'add'){
      this.setState({
        count:this.state.count + 1
      })
    }
    else if(type === 'count'){
      return;
    }
  }

  render() {
    const {title,description,image,price,category,id,cartActions, cart, update} = this.props;
    const bouncyHeart = this.state.scale.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, .8, 1]
    })
    const heartButtonStyle = {
      transform: [
        { scale: bouncyHeart }
      ]
    }
    return (
      <View style={styles.card}>
        <TouchableWithoutFeedback
        onPress={this.toggle.bind(this)}
        >
          <View style={{paddingTop: 22, paddingHorizontal: '15%',}}>
            <Animated.View style={{height: this.state.animation}}>
              <Text style={styles.cardTitle} onLayout={this._setMinHeight.bind(this)}>
                {this.props.title}
              </Text>
              <Text style={[styles.cardDescription, this.hideOnExpand.bind(this)]} onLayout={this._setMaxHeight.bind(this)}>
                {this.props.description}
              </Text>
            </Animated.View>
            <View style={styles.cardReview}>
              <StarRating
                ratings={2}
              />
              <Text >
                15mg fat
              </Text>
            </View>
            <View style={styles.heartContainer}>
              <TouchableWithoutFeedback onPress={this.triggerLike}>
                <Animated.View style={heartButtonStyle}>
                  <Heart filled={this.state.liked} />
                </Animated.View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <PlateImage />
        <CountPill
          updateCount={this.updateCount}
          count={this.state.count}
          cartActions={cartActions}
          title={title}
          description={description}
          image={image}
          price={price}
          category={category}
          id={id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 15,
    marginVertical: 15,
    minHeight: 100,
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: '#000',
    shadowOpacity: .05,
  },
  cardTitle: {
    color: '#000',
  },
  cardDescription: {
    width: 150,
    paddingTop: 20,
    // flexWrap: 'wrap',
    color: '#000',
  },
  cardReview: {
    width: 150,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#fff'
  },
  heartContainer: {
    position: 'absolute',
    bottom: 50,
    left: 18,
  }
});

export default(FoodItem);
