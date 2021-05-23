import React, { useState, useEffect } from 'react';
import { View,TouchableOpacity, StyleSheet,SafeAreaView, ScrollView,Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from '../components/TopBar'
import AntIcon from "react-native-vector-icons/AntDesign";


function ProductDetailScreen ({ route, navigation }) {

  const { itemId } = route.params;

  const [product, setproduct] = useState([]);
  


  useEffect(() => {
       fetch('https://northwind.vercel.app/api/products/'+ itemId)
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .then((product) => {
        setproduct(product);
      });
  
      

  }, []);



  return (
       <SafeAreaView>

      <ScrollView style={{ maxHeight: '90%' }}>
          <View style={styles.itemContainer}>
           <Text>{product['name']}</Text>
                 

           <Text>{product['quantityPerUnit']}</Text>


          </View>
      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  title: {
    flex: 1,

    color: '#1e3d59',
    fontWeight: '600',
    margin: 5,
    fontSize: 18,
  },
  price: {
    flex: 1,
    color: '#ff6e40',
    fontWeight: '500',
    margin: 5,
    fontSize: 16,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    marginHorizontal:'5%',
    borderRadius: 30,
    elevation: 5,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderColor: '#f5f0e1',
  },
});
export default ProductDetailScreen;
