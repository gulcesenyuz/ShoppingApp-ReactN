import React, { useState, useEffect } from 'react';
import { View,TouchableOpacity, StyleSheet,SafeAreaView, ScrollView,Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from '../components/TopBar'
import AntIcon from "react-native-vector-icons/AntDesign";
import ProductsDetailScreen from './ProductDetailScreen'
import { NavigationContainer } from '@react-navigation/native';


function ProductsScreen ({navigation}) {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const deleteCategory = (id) => {
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
    fetch('https://northwind.vercel.app/api/products')
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .then((categories) => {
        setcategories(categories);
      });
  };
  
  const nav =(id)=>{
    console.log(id);
    //navigation.navigate('ProductsScreen', {id:id})

  };


  return (
    <SafeAreaView>
         <Header title='GG Shop'/>

    <ScrollView style={{maxHeight:"90%"}}>
      {categories.map((eachData) => (
        <View style={styles.itemContainer}>
                      <TouchableOpacity onPress={()=>nav(eachData.id)}>

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
                <View>
                                                        <AntIcon name="delete" style={styles.deleteIcon} onPress={() => deleteCategory(eachData.id)} />

                </View>
              </View>
            </ListItem.Content>
          </ListItem>
                                </TouchableOpacity>

        </View>

      ))}
    </ScrollView>
    </SafeAreaView>
  )


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
export default ProductsScreen;
