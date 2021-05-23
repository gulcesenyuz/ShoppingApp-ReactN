import React, { useState, useEffect } from 'react';
import { View, StyleSheet,TouchableOpacity,Text,SafeAreaView,ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from '../components/TopBar'
import AntIcon from "react-native-vector-icons/AntDesign";
import FloatingButton from '../components/FloatingButton';
import { useNavigation } from '@react-navigation/native';
import CategoryProductsScreen from './CategoryProductsScreen';


export default function CategoriesScreen({ route, navigation }) {
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
    fetch('https://northwind.vercel.app/api/categories/' + id, requestOptions)
      .then((res) => res.json)
      .then((data) => {
        //To resfresh data list
        getData();
      });
  };

  const getData = () => {
    fetch('https://northwind.vercel.app/api/categories')
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .then((categories) => {
        setcategories(categories);
      });
  };

  return (
    <SafeAreaView style={{height:'100%'}}>
     
    <ScrollView style={{maxHeight:"99%"}}>
      {categories.map((eachData) => (
        <View style={styles.itemContainer}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>
                {eachData.name}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.description}>
                {eachData.description}
              </ListItem.Subtitle>
                <TouchableOpacity
                        style={styles.detailbutton}
                         onPress={() => {
                          navigation.navigate('CategoryProduct', {
                            itemId: eachData.id,
                          });
                        }}>
                        <Text style={styles.detailtext}>Products</Text>
                      </TouchableOpacity>
                                              <AntIcon name="delete" style={styles.deleteIcon} onPress={() => deleteCategory(eachData.id)} />

            </ListItem.Content>
          </ListItem>
        </View>
      ))}
    </ScrollView>
              <FloatingButton style={{bottom:80}}  navigation={navigation}/>
            
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
  description: {
    flex: 1,
    color: '#1a1a1a',
    fontWeight: '400',
    margin: 5,
    fontSize: 16,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
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