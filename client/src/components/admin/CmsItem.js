import React, { Component } from 'react';
import {  View, Text, StyleSheet,Image,Button, Modal } from 'react-native';



export default CmsItem = (props)=>{
   
        var modalVisibility = false;
        
     const {title,price,description,type,image } = props;
     console.log('THIS IS ITEM PROPS',props);
    return (
        
      <View style={styles.container}>
     <View style={{flexDirection:'row'}}>
      <Image style={styles.image} source={{uri:props.image}}/>
      <View style={{flexDirection:"column"}}>
      <View style={{flexDirection:"row"}}>
       <Text style={styles.title}>{props.title}</Text>
       <Text style={styles.price}>${props.price}</Text>
       </View>
        <Text style={styles.description}>{props.description}</Text>
        </View>
        </View>
        <View style={styles.button}>
        <Button  onPress={()=>props.handleModal(props)} title='Update'/>
        </View>
      </View>
    );

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderColor: '#777',
        borderBottomWidth:1,
        borderRadius:2 ,
        flexDirection: 'row',
        width:'100%',
        marginTop: 3,
        justifyContent:'space-between'
    
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
    height:'100%',
    width:'20%',
    marginRight:5
    }
})
