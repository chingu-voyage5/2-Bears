import React, { Component } from 'react'
import { Text, Platform, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Actions} from 'react-native-router-flux';
import * as cartAct from '../../actions/cartActions';
class CartActionButton extends Component {
  render() {
      const cartCount = this.props.cart.reduce((accumulator,currentVal)=>{
          return currentVal.quantity + accumulator
      },0)
    return (
        <TouchableOpacity style={styles.cartButton} onPress={()=>Actions.push('cart', {hideNavBar: true})}>
        <View style={{flex:1,width:'100%',height:'100%',position:'relative' }}>
        <Image source={require('../../assets/images/cartInverted2.png')} style={styles.cartImage} />
        {this.props.cart.length != 0?
        <View style={styles.counterContainer}><Text style={styles.counterText}>{cartCount}</Text></View>:
        <Text ></Text>}
        </View>
        </TouchableOpacity>
    )
  }

}
const styles = StyleSheet.create({
  cartButton:{
    position:'absolute',
    width:35,
    height:35,
    borderRadius:1000,
    backgroundColor:'#f55',
    right:8,
    top:-46,
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowOffset:{  width: -1,  height: 5,  },
        shadowColor: '#000',
        shadowOpacity: .05,
      }
    })
  },
  cartImage:{
    width:20,
    height:20,
    position:'absolute',
    right:8,
    bottom:8

  },
  counterContainer:{
    height:20,
    width:20,
    borderRadius:100,
    backgroundColor:'white',
    position:'absolute',
    left:1,
  },
  counterText:{
      textAlign:'center'
  }
})

const mapDispatchToProps = dispatch =>{
  return {cartActions: bindActionCreators(cartAct,dispatch)}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,mapDispatchToProps)(CartActionButton);