import React, { Component } from 'react';
import {  View, Text, StyleSheet,Image,Button, Modal,TouchableOpacity } from 'react-native';



export default CmsItem = (props)=>{
    
        const shortDescription = (num)=>{
            console.log(props)
            var a = props.description.split('');
            if(a.length > num){
                a.splice(num);
            var b = a.join('') + '...';
                return b
            }
            return props.description
        }
        
        

     const {title,price,description,type,image } = props;
    return (
      <View style={styles.container}>
     <View style={{flexDirection:'row', width:'75%'}}>
      <Image style={styles.image} source={{uri:props.image}}/>
      <View style={{flexDirection:"column",width:'80%',marginLeft:5}}>
      <View style={{flexDirection:"row",justifyContent:'space-between'}}>
       <Text style={styles.title}>{props.title}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.price}><Text style={{color:'black'}}></Text>${props.price}</Text> 
       </View>
       </View>
        <Text style={styles.description}>{shortDescription(30)}</Text>
        </View>
        </View>
        
        <TouchableOpacity
         style={styles.button}
         onPress={()=>props.handleModal(props)}
       >
         <Text style={{color:'white'}}> update </Text>
       </TouchableOpacity>
    
      </View>
    );

};

const styles = StyleSheet.create({
    container:{
        flex:2,
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
