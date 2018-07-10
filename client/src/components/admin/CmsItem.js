import React, { Component } from 'react';
import {  View, Text, StyleSheet,Image,Button, Modal } from 'react-native';



export default CmsItem = (props)=>{
   
        var modalVisibility = false;
        
     const {title,price,description,type,image } = props;
     console.log(props.handleModal);
    return (
        
      <View style={styles.container}>
      <Image style={styles.image} source={{uri:props.image}}/>
      <View style={{flexDirection:"column"}}>
      <View style={{flexDirection:"row"}}>
       <Text style={styles.title}>{props.title}</Text>
       <Text style={styles.price}>${props.price}</Text>
       </View>
        <Text style={styles.description}>{props.description}</Text>
        </View>
        <Button style={styles.button} onPress={props.handleModal(price,title,description,image,type)} title='Update'/>
       
      </View>
    );

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderColor: '#777',
        borderWidth: 1,
        flexDirection: 'row',
        position:'relative',
        width:'100%'
    
    }
        ,
    title:{
        fontSize: 18,
        color:'black'
    },
    description:{},
    price:{},
    image:{
        width:'30%',
        height:50
    },
    button:{
    position:'absolute',
    right:0,
    height:'100%',
    width:'13%'
    }
})
