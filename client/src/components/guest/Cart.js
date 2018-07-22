import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import CartItem from './CartItem';

class Cart extends Component {

  renderItem = ({ item, index }) => {
    console.log(item.category)
    return (
      <CartItem item={item} key={item.id}category={item.category} actions={this.props.actions}/>
    );
  };
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerText}>CART</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.backButton} onPress={()=>this.props.actions.toggleCart()}>
      <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      </View>
      </View>
        <View style={{flex:1,width:'100%',alignItems:'center'}}>
     <View style={styles.listContainer}>
     
          <FlatList
            inverted
            style={{flex:1 }}
            data={  this.props.cart}
            renderItem={this.renderItem}
          />
        </View>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  backButton:{
    backgroundColor:'#5A66D1',
    width:60,
    height:35,
    borderRadius: 3,
    justifyContent:'center',
    alignItems: 'center',
    left:15,
    top:13
  },
  backButtonText:{
    color:'white',
    textAlign:'center',
    fontSize: 18,

  },
  header:{
    width:'100%',
    height:50,
    flexDirection: 'row',
    position:'relative',
    marginBottom: 40,
},
  headerText:{
    position:'absolute',
    left:'41%',
    top:10,
    fontSize:25
  },

  listContainer:{
    width:'95%',
    height:'50%',
    borderWidth: 1,
    borderColor: '#DEDEDE',
  
  }

})


export default (Cart);