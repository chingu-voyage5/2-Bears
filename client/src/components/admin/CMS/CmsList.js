import React, { Component } from 'react'
import { Text, View, StyleSheet,Modal,Button,FlatList} from 'react-native';
import CmsItem from './CmsItem';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import CmsUpdate from './CmsUpdate';


 class CmsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal:false,
            price:0,
            title:'',
            description:'',
            type:'',
            image:''
        }
        this.handleModal = this.handleModal.bind(this);
    }
    handleModal = (props) =>{
        this.setState({
            modal:true,
            price:props.price,
            title:props.title,
            description:props.description,
            category:props.category,
            image:props.image,
            id:props.id
        })
        console.log(this.state)

    }
    postModal = ()=>{
        this.setState({
            modal:false
        })
    }
    itemList = ({item,index})=>{
        console.log('THIS IS THE ITEMLIST PROPS',item)
        return(
            <CmsItem handleModal={this.handleModal} id={item.id} key={index} image={item.image} price={item.price.adult} title={item.title} description={item.description}/>
        )
    };
  render() {
 
      const {modal,title,description,image,id,price,category} = this.state;
      console.log(this.props)
    return (

      <View style={styles.container}>
        <Modal onRequestClose={()=>{alert('leave?')}} visible={modal} animationType={'slide'}>
        <View style={{flex:1}}>
                <CmsUpdate
                 title={title}
                 description={description}
                 price={price}
                 id={id}
                 category={category}
                 image={image}
                 />
            <Button title="back" onPress={()=>this.postModal()}/>
        </View>
        </Modal>
        <View style={styles.listContainer}>
        <FlatList 
            data={this.props.items}
            renderItem={this.itemList}
        />
        </View>

        {/* <Button
        style={styles.button}
        title='Create New'
        onPress={()=>{ Actions.cmsCreate()}}
        >Create Item</Button> */}
        </View>
      
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth: 0,
        borderColor: '#D3D3D3',
        backgroundColor:'#FFFFFF',
        borderRadius:3
    },
    button:{
        backgroundColor:'#FF0000'
    },
    listContainer:{
        flex:1
    }

})

export default CmsList;