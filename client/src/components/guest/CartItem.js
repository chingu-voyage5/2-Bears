
import React, { Component } from 'react';
import {  View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';


export default CartItem = (props)=>{
    const shortDescription = (num)=>{
        console.log(props)
        var a = props.item.description.split('');
        if(a.length > num){
            a.splice(num);
        var b = a.join('') + '...';
            return b
        }
        return props.item.description
    }

    const {title,price,description,image,id,quantity,category } = props.item;
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', width:'100%'}}>
          <Image style={styles.image} source={{uri:image}}/>
          <View style={{flexDirection:"column",width:'60%',marginLeft:5,marginRight:5, justifyContent:'space-between'}}>
            <View style={{flexDirection:"row",justifyContent:'space-between'}}>
              <Text>x {quantity}</Text>
              <Text style={styles.price}><Text style={{color:'black'}}></Text>${(price.adult * quantity).toFixed(2)}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
            {/*<Text style={styles.description}>{shortDescription(30)}</Text>*/}
          </View>

          <TouchableOpacity onPress={()=>props.actions.deleteCartItem(id)} style={styles.button}>
              <Text style={styles.trash}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>props.actions.addToCart(title,description,image,price,category,id)} style={styles.button}>
              <Text style={styles.trash}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderColor: '#D3D3D3',
        borderBottomWidth:1,
        borderRadius:2 ,
        flexDirection: 'row',
        width:'100%',
        height:70,
        backgroundColor:'#FFFFFF',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignSelf: 'flex-end',

    }
        ,
    title:{
        fontSize: 20,
        color:'black'
    },
    // description:{
    //     fontSize: 15,
    // },
    price:{
      color:'#60BD7A',
      // marginTop: 3,
      // marginRight:4,
      // position:'absolute',
      // right:5,
    },
    image:{
        width:'20%',
        height:'100%',
        borderRadius:2
    },
    button:{
    position:'relative',
    height:27,
    width:30,
    borderColor:'red',
    borderWidth:1,
    alignSelf: 'center',
    backgroundColor:'white',
    padding:5,
    borderRadius:3,
    marginRight: 0,
    alignItems: 'center',
    },
    trash:{
    position:'absolute',
    bottom:1,
    color:'black',
    fontSize:20,

    }
})
