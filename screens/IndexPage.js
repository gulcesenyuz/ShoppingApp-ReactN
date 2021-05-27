import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CategoryProductsScreen from './Category/CategoryProductsScreen';

import AllProductsScreen from './Product/AllProductsScreen';
import TopBar from '../components/TopBar';

export default function IndexPage({ route, navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <TopBar />
        <View style={styles.body}>
          <View style={styles.sizedBox} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Products');
            }}
            style={styles.item}>
            <View style={styles.row}>
            <View style={styles.imgcontainer}>
              <Image
                style={styles.img}
                source={require('../assets/img/order.jpg')}
              />
              </View>
              <Text style={styles.text}>Products</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Categories');
            }}
            style={styles.item}>
            <View style={styles.row}>
            <View style={styles.imgcontainer}>
              <Image
                style={styles.img}
                source={require('../assets/img/cate.png')}
              />
              </View>
              <Text style={styles.text}>Categories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Orders');
            }}
            style={styles.item}>
            <View style={styles.row}>
            <View style={styles.imgcontainer}>
              <Image
                style={styles.imghand}
                source={require('../assets/img/hand.png')}
              />
              </View>
              <Text style={styles.text}>Orders</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {
    marginVertical: '10%',
    marginHorizontal: '1%',
  },
  img: {
    width: 160,
    height: 120,
    position: 'absolute',

  },
    imghand: {
    width: 220,
    height: 120,
    position: 'absolute',

  },
  imgcontainer:{
    paddingBottom:100,
    alignContent:'center',


  },

  item: {
    flex: 1,

    backgroundColor: '#083358',
    borderRadius: 5,
    shadowColor: 'gray',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
    paddingHorizontal:0,
    paddingVertical:0,
    paddingBottom:20,
    alignItems: 'flex-start',
    marginHorizontal: '5%',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: 'white',
    letterSpacing: 2,
    fontWeight: '600',
    fontFamily: 'halfmoon_bold',
    marginVertical: 50,
    marginLeft:180,
    position: 'absolute',
  },
  sizedBox: {
    flex: 1,
    margin: 10,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignContent: 'space-between',
    alignItems: 'flex-start',
  },
});
