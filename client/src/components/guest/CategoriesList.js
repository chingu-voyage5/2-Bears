import React, { Component } from 'react';
import Interactable from 'react-native-interactable';
import { connect } from 'react-redux';
import {
  Animated,
  Dimensions,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BottomNav, ImageLoader } from '../common'
import CmsPreview from '../admin/CMS/CmsPreview';

const numColumns = 3
const categories = [
  { key: 'Category1' }, { key: 'Category2' }, { key: 'Category3' }, { key: 'Category4' }, { key: 'Category5' }, { key: 'Category6' }, { key: 'Category7' }, { key: 'Category8' }, { key: 'Category9' }, { key: 'Category10' }, { key: 'Category11' }, { key: 'Category12' }, { key: 'category13' },
]

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};

class CategoriesList extends Component {
  constructor(props) {
    super(props);

    this._deltaY = new Animated.Value(0);
  }
  renderItem = ({ item, index }) => {
    console.log(item);
    return (
      <CmsPreview 
      imageUrl={item.image}
      title={item.name}
      description={item.desc}/>
    );
  };

  render() {
  
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={this.props.items}
            keyExtractor={item => item.key}
            renderItem={this.renderItem}
            numColumns={numColumns}
            style={styles.flatlist}
          />
        </View>
        <BottomNav
          topValue={ -140 }
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
  container: {
    flex: 1,
  },
  flatlist: {
    marginBottom: 50
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

export default connect(mapStateToProps)(CategoriesList);