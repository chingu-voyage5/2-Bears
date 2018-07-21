
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
        
        

     const {title,price,description,image } = props.item;
    return (
      <View style={styles.container}>
     <View style={{flexDirection:'row', width:'75%'}}>
      <Image style={styles.image} source={{uri:image}}/>
      <View style={{flexDirection:"column",width:'80%',marginLeft:5}}>
      <View style={{flexDirection:"row",justifyContent:'space-between'}}>
       <Text style={styles.title}>{title}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.price}><Text style={{color:'black'}}>Adult </Text>${price.adult}</Text>
        <Text style={styles.price}><Text style={{color:'black'}}>kid </Text>${price.kid}</Text> 
       </View>
       </View>
        <Text style={styles.description}>{shortDescription(30)}</Text>
        </View>
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
        
    
    }
        ,
    title:{
        fontSize: 18,
        color:'black'
    },
    description:{},
    price:{
        color:'#60BD7A',
        marginTop: 3,
        marginRight:4},
    image:{
        width:'25%',
        height:'100%',
        borderRadius:2
    },
    button:{  
    width:'15%',  
    alignSelf: 'center',
    backgroundColor:'red',
    padding:5,
    borderRadius:3,
    backgroundColor:'#5A66D1',
    marginRight: 5,
    }
})
