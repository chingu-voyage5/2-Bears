import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet,Modal,FlatList,Button } from 'react-native'
import { connect } from 'react-redux';
import CmsItem from './CmsItem';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';

 class MainCMS extends Component {
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
    itemList = ({item,index})=>{
        return(
            <CmsItem handleModal={this.handleModal}key={index} image={item.image} price={item.price} title={item.name} description={item.desc}/>
        )
    }
  render() {
      console.log(this.props)
      const {modal} = this.state;
    return (
      <View style={styles.container}>
        <Modal onRequestClose={()=>{alert('leave?')}} visible={modal} animationType={'slide'}>
        <View style={{flex:1}}>
            <Text>this is modal of {this.state.title}</Text>
            <Button title="back" onPress={()=>this.postModal()}/>
        </View>
        </Modal>
        <Text> textInComponent </Text>
        <Button
        title='enter'
        onPress={()=>{ Actions.cmsCreate()}}
        >Create Item</Button>
        <ScrollView style={{flex:1}}>
        <FlatList
            data={this.props.items}
            renderItem={this.itemList}
            keyExtractor={item => item.key}
          />
        </ScrollView>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }

})
const mapStateToProps = state => state;

export default connect(mapStateToProps)(MainCMS);