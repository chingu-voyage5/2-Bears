import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { StatsProgressBar } from './index'

class ProgressBarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress1: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        progress1: this.state.progress1 + 0.1,
        duration1: 1, //was 300 but values don't seem to get any smaller
      });
    }, 1000); // dones't work with a value less than 1000 for some reason.
  }

  render() {
    return (
      <View style={styles.container}>
        <StatsProgressBar
          row
          progress1={this.state.progress1}
          duration1={100} //was 500 was 500 but values don't seem to get any smaller
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: "flex-end",
    flexDirection: "row"
  },
});

export { ProgressBarContainer };