import React, { Component } from 'react';
import {  View, Text,StyleSheet, Modal,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Cart from '../guest/Cart';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/cartActions';


 class DrawerContent extends Component {
  constructor(props){
    super(props);
    this.state={
  
    }
    this.closeModal = this.closeModal.bind(this);
  }
 
  closeModal(){
    this.props.cartActions.closeCart();
  }
  render() {
    // console.log(this.props)
    return (
      <View style={styles.container}>
          <Text style={styles.item} onPress={()=>Actions.cart()}>Cart</Text>
          <Text style={styles.item} onPress={()=> Actions.stats()}>Stats</Text>
          <Text style={styles.item} onPress={()=> Actions.scan()}>Scan</Text>
          <Text style={styles.item} onPress={()=> Actions.drinks()}>Drinks</Text>
          <Text style={styles.item} onPress={()=> Actions.kitchen()}>Kitchen</Text>
          <Text style={styles.item} onPress={()=> Actions.main()}>Guests</Text>
          <Text style={styles.item} onPress={()=> Actions.cmsCreate()}>Create Item</Text>
          <Text style={styles.item} onPress={()=> Actions.cms()}>Content Management</Text>
          <Text style={styles.item} onPress={()=> Actions.categoryXList()}>categoryXItem</Text>
          <Text style={styles.item} onPress={()=> Actions.settings()}>Settings</Text>
          <Modal onRequestClose={()=> console.log('close modal')} visible={this.props.cartModal} animationType={'slide'}>
            <View style={{flex:1}}>
              <Cart actions={this.props.cartActions} cart={this.props.cart} />
            </View>
          </Modal>
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
const mapDispatchToProps = dispatch =>{
  return{ cartActions:bindActionCreators(actions,dispatch)}
}
const mapStateToProps = state => state;

export default connect(mapStateToProps,mapDispatchToProps)(DrawerContent)