// import React, { Component } from 'react';
// import Interactable from 'react-native-interactable';
// import {
//   Animated,
//   Button,
//   Dimensions,
//   Platform,
//   StyleSheet,
//   Text,
//   TouchableWithoutFeedback,
//   View,
// } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import { BottomNav } from './common'

// class Cart extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text >8:00AM to 22:00AM</Text>
//         <BottomNav />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
// });

// export default(Cart);
import React, { Component } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import Interactable from 'react-native-interactable';

export default class CollapsingHeader extends Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(0);
  }
  render() {
    return (
      <View style={styles.container}>

          <View style={{backgroundColor: '#c1c1c1', height: 475, alignItems: 'center'}}>
            <Animated.View style={{
              transform: [
                {
                  translateY: this._deltaY.interpolate({
                    inputRange: [-150, -150, 0, 0],
                    outputRange: [-58, -58, 0, 0]
                  })
                },
                {
                  scale: this._deltaY.interpolate({
                    inputRange: [-150, -150, 0, 0],
                    outputRange: [0.35, 0.35, 1, 1]
                  })
                }
              ]
            }}>
            <FlatList
              data={formatData(categories, numColumns)}
              keyExtractor={item => item.key}
              style={styles.container}
              renderItem={this.renderItem}
              numColumns={numColumns}
            />
            </Animated.View>
          </View>

          <Interactable.View
            verticalOnly={true}
            snapPoints={[{y: 0}, {y: -150}]}
            boundaries={{bottom:0, top: -150}}
            animatedValueY={this._deltaY}>
            <View style={{left: 0, right: 0, height: 350, backgroundColor: 'orange'}} />
          </Interactable.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});