import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CategoryProductsScreen from './Category/CategoryProductsScreen';

import AllProductsScreen from './Product/AllProductsScreen';
import TopBar from '../components/TopBar'

export default function IndexPage ({ route, navigation })  {


    return (
      <View style={styles.main}>
       <TopBar /> 
      <View style={styles.sizedBox}/>
      <TouchableOpacity
        style={styles.item}
           onPress={() => {
                          navigation.navigate('Products');
                        }}
        >
        
        <Text style={styles.text}>All Products</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => {
                          navigation.navigate('Categories');
                        }}
        style={styles.item}>
        <Text style={styles.text}>Categories</Text>
      
      </TouchableOpacity>
           <TouchableOpacity
             onPress={() => {
                          navigation.navigate('Orders');
                        }}
        style={styles.item}>
        <Text style={styles.text}>Orders</Text>
      
      </TouchableOpacity>
      </View>
    );
 


}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  item: {
    flex: 1,
    height: 200,
    width: 300,
    backgroundColor: '#083358',
    borderRadius: 15,
    shadowColor: 'gray',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
   padding: 30,
    marginHorizontal: '5%',
    marginBottom:30
    
  },
  text: {
    fontSize: 14,
    color: '#f5f0e1',
    letterSpacing: 2,
    fontWeight: '600',
    fontFamily: 'halfmoon_bold',
    alignContent: 'flex-end',
    marginVertical: 10,
  },
  sizedBox:{
    flex:1,
    height:30,
  }
});

