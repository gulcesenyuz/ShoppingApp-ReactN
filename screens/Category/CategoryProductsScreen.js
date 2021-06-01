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
import AntIcon from 'react-native-vector-icons/AntDesign';
import ProductsDetailScreen from '../Product/ProductDetailScreen';
import { NavigationContainer } from '@react-navigation/native';

function CategoryProductsScreen({ route, navigation }) {
  const itemid = route.params['itemId'];

  const [products, setproducts] = useState([]);

  useEffect(() => {
    getData();
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
        getData();
      });
  };

  const getData = () => {
    console.log(itemid);
    fetch('https://northwind.vercel.app/api/products?categoryId=' + itemid)
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .then((products) => {
        setproducts(products);
      });
  };

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <ScrollView style={{ maxHeight: '99%' }}>
        {products.map((eachData) => (
          <View style={styles.itemContainer}>
            <ListItem>
              <ListItem.Content>
                <View flexDirection="column">
                  <View flexDirection="column">
                    <View flexDirection="row">
                      <ListItem.Title style={styles.title}>
                        {eachData.name}
                      </ListItem.Title>
                    </View>
                    <View flexDirection="row">
                      <ListItem.Subtitle style={styles.price}>
                        Price: {eachData.unitPrice}$
                      </ListItem.Subtitle>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <TouchableOpacity
                      style={styles.detailbutton}
                      onPress={() => {
                        navigation.navigate('ProductDetailScreen', {
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
  iconPosition: {
    paddingTop: 15,
    position: 'relative',
    marginLeft: 100,
  },
  title: {
    color: '#f07b3f',
    fontWeight: '700',
    margin: 5,
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
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
});
export default CategoryProductsScreen;
