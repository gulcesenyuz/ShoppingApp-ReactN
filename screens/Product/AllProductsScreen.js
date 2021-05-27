import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  Alert,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import AntIcon from 'react-native-vector-icons/AntDesign';
import ProductsDetailScreen from './ProductDetailScreen';
import { NavigationContainer } from '@react-navigation/native';

function ProductsScreen({ route, navigation }) {
  const [products, setproducts] = useState([]);


  useEffect(() => {
    getDatafromProducts();
  }, []);

  
  const showConfirmDialog = () => {
    console.log('alert');
    return Alert.alert(
      "Are you sure?",
      "Are you sure you want to remove this beautiful box?",
      [
        {
          text: "Yes",
          onPress: () => {
          },
        },
  
        {
          text: "No",
        },
      ]
    );
  };

  const deleteProduct = (id) => {
    console.log(id);
     showConfirmDialog();
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
      <View style={styles.main}>
        <ScrollView style={{ maxHeight: '90%' }}>
          {products.map((eachData) => (
            <View style={styles.itemContainer}>
              <ListItem>
                <ListItem.Content>
                  <View>
                    <View>
                      <ListItem.Title style={styles.title}>
                        {eachData.name}
                      </ListItem.Title>
                      <ListItem.Subtitle style={styles.price}>
                        Price:{' '}
                        <Text style={styles.moneyText}>
                          {' '}
                          {eachData.unitPrice}$
                        </Text>
                      </ListItem.Subtitle>
                    </View>
                    <View style={styles.row}>
                      <TouchableOpacity
                        style={styles.detailbutton}
                        onPress={() => {
                          navigation.navigate('ProductsDetails', {
                            itemId: eachData.id,
                          });
                        }}>
                        <Text style={styles.detailtext}>Show Details</Text>
                      </TouchableOpacity>
                      <View style={styles.iconPosition}>
                        <AntIcon
                          name="delete"
                          style={styles.deleteIcon}
                          onPress={() => deleteProduct(eachData.id)}
                        />
                      </View>
                    </View>
                  </View>
                </ListItem.Content>
              </ListItem>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
     main: {
    flex: 1,
  },
  deleteIcon: {
    flex: 1,
    color: 'grey',
    fontSize: 20,
    margin: 10,
  },
  iconPosition: {
    paddingTop: 15,
    position: 'relative',
    marginLeft: 120,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  title: {
    color: '#f07b3f',
    fontWeight: '700',
    margin: 5,
    fontSize: 18,
    letterSpacing:0.5,

  },
  price: {
    flex: 1,
    color: 'grey',
    fontWeight: '600',
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
    marginTop: 20,
    height: 30,
    position: 'relative',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffd460',
    backgroundColor: '#ffd460',
    alignItems: 'center',
    alignContent: 'space-around',
  },
  detailtext: {
    flex: 1,
    padding: 10,
    paddingTop: 5,
    alignItems: 'center',
    fontSize: 12,
    fontWeight: '600',
  },
  moneyText: {
    color: 'grey',
    fontWeight: '400',
  },
});
export default ProductsScreen;
