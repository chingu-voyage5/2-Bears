import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatsProgressBar } from './index'

class ProgressBarContainer extends Component {
  constructor(props) {
    super(props);

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