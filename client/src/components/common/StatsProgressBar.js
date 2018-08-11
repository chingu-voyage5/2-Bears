import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class StatsProgressBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { step } = this.props;
    return (
      <View style={styles.viewOne}>
        { step === 'Serve drinks' ? <View style={[styles.progress, styles.progressOne]} /> : null}
        { step === 'Serve firstCourse' ? <View style={[styles.progress, styles.progressTwo]} /> : null}
        { step === 'Serve secondCourse' ? <View style={[styles.progress, styles.progressThree]} /> : null}
        { step === 'Close out' ? <View style={[styles.progress, styles.progressFour]} /> : null}
        {/* step === 'Finish' ? <View style={[styles.progress, styles.progressFive]} /> : null */}
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
  progress: {
    position: "absolute",
    left: '0%',
    top: 0,
    bottom: 0,
    backgroundColor: 'tomato',
    borderColor: "transparent",
    borderBottomLeftRadius: 15,
  },
  progressOne: {
    width: '20%',
  },
  progressTwo: {
    width: '40%',
  },
  progressThree: {
    width: '60%',
  },
  progressFour: {
    width: '80%',
  },
  progressFive: {
    width: '100%',
    borderBottomRightRadius: 15,
  },
});

export { StatsProgressBar };

