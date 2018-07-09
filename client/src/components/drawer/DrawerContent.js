import React, { Component } from 'react';
import {  View, Text,StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class DrawerContent extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.item} onPress={()=> Actions.stats()}>Stats</Text>
          <Text style={styles.item} onPress={()=> Actions.scan()}>Scan</Text>
          <Text style={styles.item} onPress={()=> Actions.drinks()}>Drinks</Text>
          <Text style={styles.item} onPress={()=> Actions.kitchen()}>Kitchen</Text>
          <Text style={styles.item} onPress={()=> Actions.settings()}>Settings</Text>
          <Text style={styles.item} onPress={()=> Actions.cms()}>Content Management</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // marginLeft: 20
    },
    item:{
      marginLeft: 20,
      marginTop: 20
    }
});