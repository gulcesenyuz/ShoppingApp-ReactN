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

function OrderDetailScreen({ route, navigation }) {
  const { itemId } = route.params;

  const [order, setorder] = useState({});
  const [details, setdetails] = useState({});
  const [shipAddress, setshipAddress] = useState({});

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/orders/' + itemId)
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .then((order) => {
        setorder(order);
        if(order['details'] != null){
          setdetails(order['details']);
          }
     
        setshipAddress(order['shipAddress']);
      
      });""
  },[shipAddress]);

  return (
    <View style={styles.main}>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{order['customerId']} Order</Text>

        <View style={styles.line}></View>
        <View>
          <Text style={styles.details}>
            Customer:{' '}
            <Text style={styles.detailinfo}> {order['customerId']}</Text>
          </Text>
          <Text style={styles.details}>
            Order Date:{' '}
            <Text style={styles.detailinfo}> {order['orderDate']}</Text>
          </Text>
          <Text style={styles.details}>
            Required Date:{' '}
            <Text style={styles.detailinfo}> {order['requiredDate']}</Text>
          </Text>
          <Text style={styles.details}>
            Shipped Date:{' '}
            <Text style={styles.detailinfo}> {order['shippedDate']}</Text>
          </Text>
          <Text style={styles.details}>
            Ship Via:{' '}
            <Text style={styles.detailinfo}> {order['shipVia']}</Text>
          </Text>
          <Text style={styles.moredetailtitle}>Supplier Information:</Text>
          <Text style={styles.details}>
            Freight:{' '}
            <Text style={styles.detailinfo}> {order['freight']}</Text>
          </Text>
          <Text style={styles.details}>
            Ship Name:{' '}
            <Text style={styles.detailinfo}> {order['shipName']}</Text>
          </Text>    
          
            <Text style={styles.details}>
            Ship Address:{' '}
            <Text style={styles.detailinfo}> {shipAddress['street']}/</Text> 
            <Text style={styles.detailinfo}> {shipAddress['city']}/</Text>
            <Text style={styles.detailinfo}> {shipAddress['region']}/</Text>
            <Text style={styles.detailinfo}> {shipAddress['postalCode']}/</Text>
            <Text style={styles.detailinfo}> {shipAddress['country']}</Text>
          </Text>    
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  moredetailtitle: {
    fontWeight: '700',
    color: '#4d4d4d',
    padding: 5,
    fontSize: 16,
    marginTop: 15,
  },
  line: {
    height: 1,
    backgroundColor: '#f07b3f',
    margin: 5,
  },
  title: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    color: '#1e3d59',
    fontWeight: '700',
    margin: 5,
    fontSize: 18,
    paddingBottom: 5,
  },
  details: {
    color: 'grey',
    fontWeight: '600',
    padding: 5,
    marginTop: 10,
  },
  detailinfo: {
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
    backgroundColor: 'white',
    shadowRadius: 10,
  },
});
export default OrderDetailScreen;
