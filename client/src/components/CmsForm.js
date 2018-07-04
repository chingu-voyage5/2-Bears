import React, { Component } from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { FloatingInput } from './common'
import CmsPreview from './admin/CmsPreview';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import * as itemActions from '../actions/itemActions';
import { bindActionCreators} from 'redux';

 class CmsForm extends Component {
    constructor(props){
        super(props);

        this.state ={
            Name:'',
            Description:'',
            image:'',
            price:2.45,
            type:'food'
        }
        this.updateInput = this.updateInput.bind(this);
    }
   
    addImage = () =>{
        ImagePicker.showImagePicker({},response =>{
            this.setState({
                image:response.uri
            })
        })
    }
    updateInput = (value,name) =>{
        this.setState({
            [name]:value
        })
    }
  render() {
      console.log(this.props);
      const previewImage =  this.state.image === '' ?soupImage:this.state.image;
      const {Name, Description,image,price,type} = this.state;
    return (
      <View>
        <Text style={styles.title}>Component Preview</Text>
         <CmsPreview
           imageUrl={previewImage}
            title={this.state.Name}
            description={this.state.Description}
         />
    
          <View style={styles.card}>
          <View style={styles.cardSection}>
        <FloatingInput
            label={'Name'}
            value={this.state.Name}
            name='Name'
            ChangeText={this.updateInput}
            
        />
            
        </View>
        <View style={styles.cardSection}>
        <FloatingInput
            label={'Description'}
            value={this.state.Description}
            name='Description'
            ChangeText={this.updateInput}
            
        />
         
        </View>
        <Button
            style={styles.button}
            title="Add image"
            onPress={()=>this.addImage()}
         />
         <Button
            style={styles.button}
            title="Post"
            color="#841584"
            onPress={()=> {
                this.props.itemActions.createItem(Name,Description,previewImage,price,type)
                return this.setState({Name:'',Description:'',image:'',price:0,type:''})
            } }
         />
        </View>
      </View>
    )
  }
}
const soupImage = 'https://img.taste.com.au/9W7uMD8-/w720-h480-cfill-q80/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg';
const styles = StyleSheet.create({
    container:{},
    NameInput:{
        width:'100%',
        backgroundColor:'#f2f2f2f2'
    },
    button:{
        marginTop: 50,
    },
    cardSection: {
        borderBottomWidth: 1,
        padding: 5,
        // backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: 'transparent',
        position: 'relative'
      },
      card: {
        borderColor: 'transparent',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 50,
      },
      title: {
        paddingLeft: 15,
        fontSize: 18,
        color: '#000',
        fontWeight: '800',
        marginBottom: 10,
        alignSelf: 'center',
        // paddingTop: 15,
      }
})
const mapStateToProps = (state)=>{
return {state}
}

const mapDispatchToProps= dispatch =>({
    itemActions: bindActionCreators(itemActions, dispatch),
  
   })

export default connect(mapStateToProps,mapDispatchToProps)(CmsForm);