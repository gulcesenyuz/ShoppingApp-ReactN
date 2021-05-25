import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text,TouchableOpacity,SafeAreaView,ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from '../../components/TopBar';
import AntIcon from 'react-native-vector-icons/AntDesign';

function OrdersScreen({ route, navigation }) {
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
    <SafeAreaView style={{height:'100%'}}>
    <ScrollView style={{maxHeight:"99%"}}>

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
            <View style={styles.row}>
                  <TouchableOpacity
                        style={styles.detailbutton}
                        onPress={() => {
                          navigation.navigate('OrderDetailScreen', {
                            itemId: eachData.id,
                          });
                        }}>
                        <Text style={styles.detailtext}>More</Text>
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
      </View>
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
letterSpacing:0.5,
    color: '#1e3d59',
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
   iconPosition: {
    paddingTop: 15,
    position: 'relative',
    marginLeft: 150,
  },
    row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  itemContainer: {
    flex: 1,
margin: 10,
    marginHorizontal: '5%',    borderRadius: 30,
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
export default OrdersScreen;