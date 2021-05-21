import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from '../components/TopBar';
import AntIcon from 'react-native-vector-icons/AntDesign';

export default function OrdersScreen() {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const deleteCategory = (id) => {
    console.log(id);
    let requestOptions = {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
    };
    fetch('https://northwind.vercel.app/api/orders' + id, requestOptions)
      .then((res) => res.json)
      .then((data) => {
        //To resfresh data list
        getData();
      });
  };

  const getData = () => {
    fetch('https://northwind.vercel.app/api/orders')
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .then((orders) => {
        setorders(orders);
      });
  };

  return (
    <SafeAreaView>
      <Header title="GG Shop" />

      <View>
        {orders.map((eachData) => (
          <View style={styles.itemContainer}>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title style={styles.title}>
                  Customer: {eachData.customerId}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.description}>
                  Order date: {eachData.orderDate}
                </ListItem.Subtitle>
                 <ListItem.Subtitle style={styles.description}>
                  Required date: {eachData.requiredDate}
                </ListItem.Subtitle>
                 <ListItem.Subtitle style={styles.description}>
                  Shipped date: {eachData.shippedDate}
                </ListItem.Subtitle>
                <AntIcon
                  name="delete"
                  style={styles.deleteIcon}
                  onPress={() => deleteCategory(eachData.id)}
                />
              </ListItem.Content>
            </ListItem>
          </View>
        ))}
      </View>
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
});
