import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import StatsCard from './StatsCard';
import { BottomNav } from '../common'
import customers from '../../SeedData/ordersSeed'

const bottomNavHeight = 50
const androidTopNavHeight = 80
const iosTopNavHeight = 60
class StatsList extends Component {
  constructor (props) {
    super (props);

    this.state = {
      customers : customers,
      deletedCardKey: null,
    }
  }

  componentWillMount(nextProps, nextState){
    console.log('statslist mounted');
  }
  componentWillUpdate(nextProps, nextState){
    console.log('statslist updated');
  }

  refreshFlatlist = (deletedKey) => {
    this.setState({
      deletedCardKey : deletedKey,
    })
  }

  renderItem = ({ item, index }) => {
    return (
      <StatsCard
        customerList={this.state.customers}
        item={item}
        id={item.id}
        index={index}
        customer={item.name}
        scanTime={item.scanTime}
        menuOne={item.menuOne}
        menuTwo={item.menuTwo}
        orderDate={item.orderDate}
        tableNo={item.tableNo}
        action={item.action}
        parentFlatlist={this}
      />
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.fakeNav}/>
        <View>
          <FlatList
            extraData={this.state}
            data={this.state.customers}
            showsVerticalScrollIndicator={false}
            style={styles.flatlist}
            renderItem={this.renderItem}
            keyExtractor= {(item, index) => `${index}`}
          />
        </View>
        <BottomNav
          topValue={ 0 }
          openTimes={<Text style={styles.openTimes} >8:00AM to 22:00AM</Text>}
          linkOneElement={<Text style={[styles.slideupText, {paddingTop: 0}]} >Cart</Text>}
          linkTwoElement={<Text style={styles.slideupText} >Food Categories</Text>}
          linkThreeElement={<Text style={styles.slideupText} >Login</Text>}
          linkOneScene={Actions.cart}
          linkTwoScene={Actions.main}
          linkThreeScene={Actions.auth}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  flatlist: {
    // flex: 1,
    ...Platform.select({
      android: {
        height: ((Dimensions.get('window').height) - androidTopNavHeight) - bottomNavHeight,
      },
      ios: {
        height: ((Dimensions.get('window').height) - iosTopNavHeight) - bottomNavHeight,
      }
    }),
  },
  openTimes: {
    paddingTop: 15,
    paddingBottom: 25,
    fontSize: 20,
    // left: (Dimensions.get('window').width / 2) - 125,
  },
  slideupText: {
    paddingTop: 20,
    fontSize: 20,
  }
});

export default(StatsList);