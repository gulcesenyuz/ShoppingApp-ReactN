import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import FloatingButton from '../../components/FloatingButton';
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
    <SafeAreaView style={{ height: '100%' }}>
      <ScrollView style={{ maxHeight: '99%' }}>
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
                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.detailbutton}
                    onPress={() => {
                      navigation.navigate('CategoryProducts', {
                        itemId: eachData.id,
                      });
                    }}>
                    <Text style={styles.detailtext}>Products</Text>
                  </TouchableOpacity>
                  <View style={styles.iconPosition}>
                    <AntIcon
                      name="delete"
                      style={styles.deleteIcon}
                      onPress={() => deleteCategory(eachData.id)}
                    />
                  </View>
                </View>
              </ListItem.Content>
            </ListItem>
          </View>
        ))}
      </ScrollView>
      <FloatingButton style={{ bottom: 80 }} navigation={navigation} />
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
    padding: 15,
    paddingTop: 5,
    alignItems: 'center',
    fontSize: 12,
    fontWeight: '600',
  },
});
