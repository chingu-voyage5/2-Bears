import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BottomNav } from '../common';
import CategoryX from './CategoryX';
const data = [
  { key: 'Meal1' }, { key: 'Meal2' }, { key: 'Meal3' }, { key: 'Meal4' }, { key: 'Meal5' }, { key: 'Meal6' }, { key: 'Meal7' }, { key: 'Meal8' }, { key: 'Meal9' }, { key: 'Meal10' }, { key: 'Meal11' }, { key: 'Meal12' }, { key: 'Meal13' },
]
import { connect} from 'react-redux';
import CmsPreview from '../admin/CmsPreview';
class CategoryXList extends Component {
  renderItem = ({ item, index }) => {
    return (
      <View>
       <CmsPreview 
      imageUrl={item.image}
         title={item.name}
         description={item.desc}
     />
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <FlatList
            data={data}
            style={styles.container}
            renderItem={this.renderItem}
            keyExtractor={item => item.key}
          />
        </View>
        <BottomNav
          topValue={ -140 }
          openTimes={<Text style={styles.openTimes} >8:00AM to 22:00AM</Text>}
          linkOneElement={<Text style={[styles.slideupText, {paddingTop: 0}]} >Cart</Text>}
          linkTwoElement={<Text style={styles.slideupText} >Food Categories</Text>}
          linkThreeElement={<Text style={styles.slideupText} >Login</Text>}
          linkOneScene={Actions.cart}
          linkTwoScene={Actions.categoriesList}
          linkThreeScene={Actions.auth}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 20,
  },
  openTimes: {
    paddingTop: 15,
    paddingBottom: 25,
    fontSize: 20,
    left: (Dimensions.get('window').width / 2) - 125,
  },
  slideupText: {
    paddingTop: 20,
    fontSize: 20,
  }
});
const mapStateToProps = state => state;


export default connect(mapStateToProps)(CategoryXList);