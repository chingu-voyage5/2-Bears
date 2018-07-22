
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
        
        
        console.log
     const {title,price,description,image,id } = props.item;
    return (
      <View style={styles.container}>
     <View style={{flexDirection:'row', width:'100%'}}>
      <Image style={styles.image} source={{uri:image}}/>
      <View style={{flexDirection:"column",width:'67%',marginLeft:5}}>
      <View style={{flexDirection:"row",justifyContent:'space-between'}}>
       <Text style={styles.title}>{title}</Text>
       <Text style={styles.price}><Text style={{color:'black'}}></Text>${price.adult}</Text>
       </View>
        <Text style={styles.description}>{shortDescription(30)}</Text>
        </View>
        <TouchableOpacity onPress={()=>props.actions.deleteCartItem(id)} style={styles.button}>
            {/* <Image style={styles.trash} /> */}
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
        maxHeight:50,
        backgroundColor:'#FFFFFF',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignSelf: 'flex-end',
        
    
    }
        ,
    title:{
        fontSize: 17,
        color:'black'
    },
    description:{},
    price:{
        color:'#60BD7A',
        marginTop: 3,
        marginRight:4,
        position:'absolute',
        right:5,
         },
    image:{
        width:'20%',
        height:'100%',
        borderRadius:2
    },
    button:{
    height:27,
    width:30,  
    alignSelf: 'center',
    backgroundColor:'red',
    padding:5,
    borderRadius:3,
    marginRight: 5,
    alignItems: 'center',
    },
    trash:{
    width:'9s0%',
    height:'100%'
    }
})
