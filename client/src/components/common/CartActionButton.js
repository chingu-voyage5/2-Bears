import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartAct from '../../actions/cartActions';
class CartActionButton extends Component {
  render() {
    return (
       
       <TouchableOpacity style={styles.cartButton} onPress={()=> this.props.cartActions.openCart()}>
        <Text style={styles.cartText}>Cart</Text>
        </TouchableOpacity>

    )
  }

}
const styles = StyleSheet.create({
    cartButton:{
        width:'15%',
        height:'10%',
        borderRadius:1000,
        backgroundColor:'#f55',
        position:'absolute',
        right:25,
        bottom:45,
        zIndex: 1000,
        alignItems: 'center',
        
    },
    cartText:{
        color:'white',
        flex:1,
        textAlign:'center',
        alignItems:'center',
        alignContent: 'center',
    }
})

const mapDispatchToProps = dispatch =>{
  return {cartActions: bindActionCreators(cartAct,dispatch)}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,mapDispatchToProps)(CartActionButton);