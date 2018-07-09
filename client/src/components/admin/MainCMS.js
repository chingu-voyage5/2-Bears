import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { Button } from '../common/index';
import { connect } from 'react-redux';
import CmsItem from './CmsItem';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';

 class MainCMS extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
  render() {
      console.log(this.props)
      const itemList = _.map(this.props.items,(item=>{
          return(
              <CmsItem key={item.name} image={item.image} price={item.price} title={item.name} description={item.desc}/>
          )
      }))
    return (
      <View style={styles.container}>

        <Text> textInComponent </Text>
        <Button
        title='enter'
        onPress={()=>{ Actions.cmsCreate()}}
        >Create Item</Button>
        <ScrollView style={{flex:1}}>
            {itemList}
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