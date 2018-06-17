import React, { Component } from 'react';
import {  View, Text,StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class DrawerContent extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.item} onPress={()=> Actions.auth()}>login</Text>
          <Text style={styles.item} onPress={()=> Actions.main()}>main</Text>
          <Text style={styles.item} onPress={()=> Actions.categoriesList()}>categoriesList</Text>
          <Text style={styles.item} onPress={()=> Actions.categoryXList()}>categoryXList</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft: 20
    },
    item:{
      marginLeft: 20,
      marginTop: 20
    }
});