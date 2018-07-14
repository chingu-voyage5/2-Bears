import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet,Modal,Button} from 'react-native';
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
        console.log(props)
        this.setState({
            modal:true,
            price:props.price,
            title:props.title,
            description:props.description,
            type:props.type,
            image:props.image
        })
        console.log(this.state)

    }
    postModal = ()=>{
        this.setState({
            modal:false
        })
    }
    
  render() {
     
    const itemList = _.map(this.props.items,(item,i)=>{
        return(
            <CmsItem handleModal={this.handleModal} key={i} image={item.image} price={item.price} title={item.name} description={item.desc}/>
        )
    }) 
      const {modal,title,description} = this.state;
    return (

      <View style={styles.container}>
        <Modal onRequestClose={()=>{alert('leave?')}} visible={modal} animationType={'slide'}>
        <View style={{flex:1}}>
                <CmsUpdate title description/>
            <Button title="back" onPress={()=>this.postModal()}/>
        </View>
        </Modal>
    
        <ScrollView contentContainerStyle={{flex:1,flexWrap:'wrap'}}>
        {itemList}
        </ScrollView>

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
    }

})

export default CmsList;