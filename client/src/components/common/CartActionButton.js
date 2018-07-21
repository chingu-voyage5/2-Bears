import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartAct from '../../actions/cartActions';
class CartActionButton extends Component {
  render() {
    return (
       
       <TouchableOpacity style={styles.cartButton} onPress={()=> this.props.cartActions.toggleCart()}>
        <Text style={styles.cartText}>Cart</Text>
        {this.props.cart.length != 0?
        <View style={styles.counterContainer}><Text style={styles.counterText}>{this.props.cart.length}</Text></View>:
        <Text></Text>}
        
        </TouchableOpacity>

    )
  }

}
const styles = StyleSheet.create({
    cartButton:{
        width:50,
        height:50,
        borderRadius:1000,
        backgroundColor:'#f55',
        position:'absolute',
        right:15,
        top:15,
        zIndex: 1000,
        alignItems: 'center',
        
    },
    cartText:{
        color:'white',
        flex:1,
        textAlign:'center',
        
    },
    counterContainer:{
     height:20,
     width:20,
     borderRadius:100,
     backgroundColor:'white'
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