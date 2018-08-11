import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatsProgressBar } from './index'

  constructor(props) {
    super(props);
class ProgressBarContainer extends Component {

    this.state = {
      progress1: 0,
    };
  }

  render() {
    const { step } = this.props;
    return (
      <View style={styles.container}>
        <StatsProgressBar step={step} />
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