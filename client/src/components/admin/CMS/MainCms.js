import React, { Component } from 'react'
import { Text, View, Platform, StyleSheet,TextInput } from 'react-native'
import { connect } from 'react-redux';
import CmsList from './CmsList';

class MainCms extends Component {
    constructor(props){
        super(props);
        this.state={
            search:''
        }
    }
    handleSearch=(search)=>{
        this.setState({search})
    }
  render() {
      console.log(this.props)
      const SearchInput = 
      this.props.cms.filter(item => item.title.toUpperCase().indexOf(this.state.search.toUpperCase()) > -1 
      || item.category.toUpperCase().indexOf(this.state.search.toUpperCase())> -1)
    return (
      <View style={styles.container}>
        <View style={styles.fakeNav}/>
        <TextInput
        placeholder='Search'
        style={styles.input}
        onChangeText={this.handleSearch}
        value={this.state.search}
        />
        <View style={styles.cmsList}>
            <CmsList items={SearchInput} />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      // backgroundColor:'#F8F8F8',
      // paddingHorizontal: 4,
      // borderWidth: 1,
      // borderColor: '#D3D3D3',
  },
  fakeNav: {
    position: 'absolute',
    top: -56,
    width: '100%',
    height: 55,
    backgroundColor: 'white',
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowOffset:{  width: -1,  height: 5,  },
        shadowColor: '#000',
        shadowOpacity: .05,
      }
    })
  },
    cmsList:{ 
            flex:1,
            borderWidth:1, 
            borderColor:'#D3D3D3',
            borderRadius:2
        },
    input:{
        borderWidth: 1,
        borderColor: '#D3D3D3',
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        marginHorizontal: 20,
        marginVertical: 12,
        fontSize:15
        
    }
})

const mapStateToProps= (state) => state;
export default connect(mapStateToProps)(MainCms)