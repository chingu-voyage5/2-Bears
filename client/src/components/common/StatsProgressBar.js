import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

class StatsProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      borderBottomRightRadius: 0,
      changeToRoundEdge      : .99
    }
  }

  componentWillMount() {
    this.animation1 = new Animated.Value(this.props.progress1);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.progress1 !== this.props.progress1) {
      Animated.timing(this.animation1, {
        toValue: this.props.progress1,
        duration1: this.props.duration1
      }).start();

      const changeToRoundEdge = (this.state.endOfFlatBarWidth / this.state.endWidth)
      if (this.props.progress1 >= changeToRoundEdge && this.state.borderBottomRightRadius != 15 ) {
        this.setState({
          borderBottomRightRadius : 15,
          changeToRoundEdge       : changeToRoundEdge,
        });
      }
    }
    // console.log(changeToRoundEdge) .96
    // console.log(this.state.endWidth) 371.42
    // console.log(this.props.progress1) //keeps going
    // if (this.props.progress1 >= 1) {
      //logic for how to stop this.props.progress1 from infinitely growing after anim is done.
    // }
  }

  _setWidth(event) {
    this.setState({
      endWidth          : event.nativeEvent.layout.width,
      endOfFlatBarWidth : event.nativeEvent.layout.width - 15
    });
  }

  render() {
    const widthInterpolated1 = this.animation1.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.state.endWidth],
      extrapolate: "clamp"
    })
    return (
      <View style={styles.viewOne} onLayout={this._setWidth.bind(this)}>
        <Animated.View
          style={[styles.animatedView, { width: widthInterpolated1, borderBottomRightRadius: this.state.borderBottomRightRadius }]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewOne: {
    flex: 1,
    flexDirection: "row",
    height: 15
  },
  animatedView: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'tomato',
    borderColor: "transparent",
    borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
  },
});

export { StatsProgressBar };

