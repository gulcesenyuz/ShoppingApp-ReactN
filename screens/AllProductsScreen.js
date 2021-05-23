import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from '../components/TopBar';
import AntIcon from 'react-native-vector-icons/AntDesign';
import ProductsDetailScreen from './ProductDetailScreen';
import { NavigationContainer } from '@react-navigation/native';

function ProductsScreen({ route, navigation }) {

  
  
    const [products, setproducts] = useState([]);


  useEffect(() => {
    getDatafromProducts();
   
  }, []);

  const deleteProduct = (id) => {
    console.log(id);
    let requestOptions = {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
    };
    fetch('https://northwind.vercel.app/api/products/' + id, requestOptions)
      .then((res) => res.json)
      .then((data) => {
        //To resfresh data list
        getDatafromProducts();
      });
  };

  const getDatafromProducts = () => {
    fetch('https://northwind.vercel.app/api/products')
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .then((products) => {
        setproducts(products);
      });

  };


  return (
    <SafeAreaView>

      <ScrollView style={{ maxHeight: '90%' }}>
        {products.map((eachData) => (
          <View style={styles.itemContainer}>
           
              <ListItem>
                <ListItem.Content>
                  <View flexDirection="row">
                  
                    <View flexDirection="column">
                      <ListItem.Title style={styles.title}>
                        {eachData.name}
                      </ListItem.Title>
                      <ListItem.Subtitle style={styles.price}>
                        Price: {eachData.unitPrice}$
                      </ListItem.Subtitle>
                    </View>
                    <TouchableOpacity
                        style={styles.detailbutton}
                        onPress={() => {
                          navigation.navigate('ProductsDetails', {
                            itemId: eachData.id,
                          });
                        }}>
                        <Text style={styles.detailtext}>Show Details</Text>
                      </TouchableOpacity>
                    <View>
                      <AntIcon
                        name="delete"
                        style={styles.deleteIcon}
                        onPress={() => deleteProduct(eachData.id)}
                      />
                      
                    </View>
                  </View>
                </ListItem.Content>
              </ListItem>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  deleteIcon: {
    flex: 1,
    color: 'grey',
    fontSize: 20,

    margin: 10,
  },
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
    marginHorizontal: '5%',
    borderRadius: 30,
    elevation: 5,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderColor: '#f5f0e1',
  },
  detailbutton: {
        flex: 1,

    marginLeft: '60%',
    paddingBottom: '10%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#99b898',
    backgroundColor:'#99b898',
    alignContent:"center",
    alignItems:"center",
  },
  detailtext:{
        flex: 1,
    alignItems:"center",
paddingHorizontal:1,
paddingVertical:5,
paddingTop:15,
    fontSize:14,
    fontWeight:'600'
  }
});
export default ProductsScreen;
