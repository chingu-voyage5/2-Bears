import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import CartItem from './CartItem';

class Cart extends Component {

  renderItem = ({ item, index }) => {
    console.log(item.category)
    return (
      <CartItem item={item} key={item.id}category={item.category}/>
    );
  };
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <Text>CART</Text>
      <TouchableOpacity style={styles.backButton} onPress={()=>this.props.actions.toggleCart()}>
      <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      </View>
  
     <View style={styles.listContainer}>
     
          <FlatList
            data={  this.props.cart}
            renderItem={this.renderItem}
          />
        </View>
     
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  backButton:{
    backgroundColor:'#5A66D1',
    width:'15%',
    height:25,
    borderRadius: 3,
  },
  backButtonText:{
    color:'white',
    textAlign:'center',
    fontSize: 16,

  },
  listContainer:{

  }

})


export default (Cart);