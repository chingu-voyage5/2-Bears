import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
	View,
	Text
} from 'react-native';

class StarRating extends Component {
	render() {
		let ratings = this.props.ratings;
		let stars = [];
		for (var i = 1; i <= 5; i++) {
			let path = require('../../assets/images/star-filled.png');
			if (i > ratings) {
				path = require('../../assets/images/star-unfilled.png');
			}
			stars.push((<Image style={styles.image} source={path} key={i} />));
		}

		return (
			<View style={ styles.container }>
				{ stars }
        <Text style={styles.text}>
        </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    paddingBottom: 15,
    top: 5,
    backgroundColor: "#FFF",
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 15,
    height: 15,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
  }
});

export { StarRating };