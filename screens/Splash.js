import React, { Component, useRef, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Animated,
  Easing,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import img from '../assets/img/dish.png';
import LottieView from 'lottie-react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
    setTimeout(() => {
      this.props.navigation.navigate('IndexPage');
    }, 3000);
  }


  render() {
    return (
          <Text>GG Food Shop</Text>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    marginTop: '30%',

    alignContent: 'center',
    alignItems: 'center',
  },
  brandname: {
    marginTop: 10,
    color: '#4d4d4d',
    fontSize: 24,
    fontWeight: '800',
  },
});
