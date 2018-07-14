import React, { Component } from 'react'
import { Text, View,StyleSheet,TextInput } from 'react-native'
import { connect } from 'react-redux';
import CmsList from './CmsList';

class MainCms extends Component {
    constructor(props){
        super(props);
        this.state={
            search:''
        }
    }
    handleSearch=(val)=>{
        this.setState({search:val})
    }
  render() {
      const SearchInput = this.props.items.filter(item => item.name.toUpperCase().indexOf(this.state.search.toUpperCase())> -1)
    return (
      <View style={{flex:1}}>
        <TextInput
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
    cmsList:{ flex:1}
})

const mapStateToProps= (state) => state;
export default connect(mapStateToProps)(MainCms)