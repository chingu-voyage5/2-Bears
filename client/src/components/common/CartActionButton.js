import React, { Component } from 'react'
import { Text, Platform, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Actions} from 'react-native-router-flux';
import * as cartAct from '../../actions/cartActions';
class CartActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isThereACount: false,
    }
  }

  render() {
      const cartCount = this.props.cart.reduce((accumulator,currentVal)=>{
          return currentVal.quantity + accumulator
      },0)
    return (
        <View style={styles.cartWrapper}>
          <TouchableOpacity style={styles.cartButton} onPress={()=>Actions.push('cart', {hideNavBar: true})}>
            <View style={{flex:1,width:'100%',height:'100%',position:'relative' }}>
              <Image source={require('../../assets/images/cartInverted2.png')} style={styles.cartImage} />
            </View>
          </TouchableOpacity>
          {
            this.props.cart.length !== 0
            ? <View style={[styles.counterContainer, styles.counterContainerBehind]} />
            : <Text></Text>
          }
          {
            this.props.cart.length != 0
          ? <View style={[styles.counterContainer, styles.counterContainerFront]}>
              <Text style={styles.counterText}>{cartCount}</Text>
            </View>
          : <Text></Text>
          }
        </View>
    )
  }

}
const styles = StyleSheet.create({
  cartWrapper:{
    position: 'absolute',
    top:-55,
    right: 0,
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
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
  cartButton: {
    position:'absolute',
    width:35,
    height:35,
    borderRadius:1000,
    backgroundColor:'#f55',
    alignItems: 'center',
    justifyContent: 'center',

  },
  cartImage:{
    width:20,
    height:20,
    position:'absolute',
    right:8,
    bottom:8

  },
  counterContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    height:20,
    width:20,
    borderRadius:100,
    position:'absolute',
    top: 6,
    right:8,
  },
  counterContainerFront:{
    zIndex: 1000,
  },
  counterContainerBehind:{
    backgroundColor: '#f55',
    zIndex: -1,
  },
  counterText:{
    color: 'white',
    textAlign:'center'
  }
})

const mapDispatchToProps = dispatch =>{
  return {cartActions: bindActionCreators(cartAct,dispatch)}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,mapDispatchToProps)(CartActionButton);