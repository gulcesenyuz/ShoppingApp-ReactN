import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import AntIcon from 'react-native-vector-icons/AntDesign';

function ProductDetailScreen({ route, navigation }) {
  const { itemId } = route.params;

  const [product, setproduct] = useState({});

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/products/' + itemId)
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .then((product) => {
        setproduct(product);
      });
  }, []);


  return (
    <View style={styles.main}>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{product['name']}</Text>
        <View style={styles.line}></View>
        <View >
        <Text style={styles.details}>Quantity Per Unit: <Text style={styles.detailinfo}> {product['quantityPerUnit']}</Text></Text>
 <Text style={styles.details}>Quantity Per Unit: <Text style={styles.detailinfo}> {product['unitPrice']}</Text></Text>         <Text style={styles.details}>Unit In Stock: <Text style={styles.detailinfo}> {product['unitsInStock']}</Text></Text>
 <Text style={styles.details}>Unit On Order: <Text style={styles.detailinfo}> {product['unitsOnOrder']}</Text></Text>         <Text style={styles.details}>Reorder Level: <Text style={styles.detailinfo}> {product['reorderLevel']}</Text></Text>
 <Text style={styles.moredetailtitle}>Supplier Information:</Text>
 
        </View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
    main: {
    flex: 1,
    
  },
  moredetailtitle:{
    fontWeight:'700',
    color:'#4d4d4d',
    padding:5,
    fontSize:16,
    marginTop:15

  },
  line:{
    height:1,
    backgroundColor:'#f07b3f',
    margin:5,
  },
  title: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    color: '#1e3d59',
    fontWeight: '700',
    margin: 5,
    fontSize: 18,
    paddingBottom:5
  },
  details:{
     color: 'grey',
    fontWeight: '600',
padding:5,
marginTop:10
  },
  detailinfo:{
     color: 'grey',
    fontWeight: '400',
    

  },
 
  itemContainer: {
    flex: 1,
    margin: 10,
    padding: 20,
    borderRadius: 30,
    borderColor: '#ffd460',
    elevation: 5,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    backgroundColor:'white',
    shadowRadius: 10,
  },
});
export default ProductDetailScreen;
