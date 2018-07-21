import React, { Component } from 'react'
import { Text, View, StyleSheet, Button,TextInput} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { FloatingInput } from '../../common'
import CmsPreview from './CmsPreview';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import * as itemActions from '../../../actions/itemActions';
import { bindActionCreators} from 'redux';


 class CmsUpdate extends Component {
    constructor(props){
        super(props);

        this.state ={
            title:this.props.title,
            description:this.props.description,
            image:this.props.image,
            price:this.props.price,
            type:this.props.type,
            id:this.props.id,
            numberInput:''
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
    onNumberChange(value){
        console.log(value);
        this.setState({numberInput:value})
    }
  render() {
      console.log('THIS IS THE UPDATE CMS CONSTOLE>LOG',this.props,this.state);
      const previewImage =  this.state.image === '' ?soupImage:this.state.image;
      const {title, description,image,price,category} = this.state;
      const {id} = this.props;
    return (
      <View>
        <Text style={styles.title}>Component Preview</Text>
         <CmsPreview
           imageUrl={previewImage}
            title={this.state.title === ''?this.props.title:this.state.title}
            description={this.state.description === ''?this.props.description:this.state.description}
         />
    
          <View style={styles.card}>
          <View style={styles.cardSection}>
        <FloatingInput
            update={true}
            label={'Title'}
            value={this.state.title}
            name='title'
            ChangeText={this.updateInput}
            
        />
            
        </View>
        <View style={styles.cardSection}>
        <FloatingInput
            update={true}
            label={'Description'}
            value={this.state.description}
            name='description'
            ChangeText={this.updateInput}
            
        />
        <TextInput 
            style={styles.numberInput}
            keyboardType = 'numeric'
            placeholder='price'
            onChangeText = {(text)=> this.onNumberChange(text)}
            value = {this.state.myNumber}
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
                this.props.itemActions.updateItem(title,description,previewImage,price,category,id)
                return this.setState({title:'',description:'',image:'',price:0,category:''})
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
      },
      numberInput:{
        flex:1
      }
})
const mapStateToProps = (state)=>{
return {state}
}

const mapDispatchToProps= dispatch =>({
    itemActions: bindActionCreators(itemActions, dispatch),
  
   })

export default connect(mapStateToProps,mapDispatchToProps)(CmsUpdate);