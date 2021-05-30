import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Input } from 'react-native-elements';

function UpdateCategory({ route, navigation:{goBack} }) {
  const itemid = route.params['itemId'];
  const name = route.params['itemName'];
  const description = route.params['itemDesc'];

  const [categoryName, setcategoryName] = useState(name);
  const [categoryDescription, setcategoryDescription] = useState(description);

  const updateData = () => {

       if (categoryName.length <= 2 || categoryDescription<=0) {
      alert('The Fields can not be empty!');
    } else if (categoryName[0] == ' ') {
      alert('Category name can not start with space !');
    } else {
          fetch(`https://northwind.vercel.app/api/categories/${itemid}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: itemid,
        name: categoryName,
        description: categoryDescription,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        //Obje return empty
      })
      .catch((error) => {
        console.error(error);
      });
      alert(` ${categoryName} Updated`);

   }
         goBack();



  };
 

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={{ alignItems: 'center', marginTop: '30%' }}>
          <Text style={styles.formText}>
            Please fill the form to edit category
          </Text>
        </View>
        <Input
          style={styles.input}
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
          defaultValue={name}
          onChangeText={(value) => setcategoryName(value)}
        />

        <Input
          style={styles.input}
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
          defaultValue={description}
          
          onChangeText={(value) => setcategoryDescription(value)}
        />

        <TouchableOpacity style={styles.button} onPress={updateData}>
          <Text style={styles.sharetext}> Update </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
   formText: {
    flex: 1,
    color: 'black',
    textShadowColor: 5,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: '20%',
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 15,
    marginLeft: '30%',
    width: '40%',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd460',
    margin: '10%',
  },
  sharetext: {
    flex: 1,

    alignItems: 'center',
    fontSize: 12,
    fontWeight: '600',
  },
   input: {
    flex: 1,
    marginHorizontal: '5%',
    margin: 5,
    height: 40,
    borderColor: 'transparent',
    borderWidth: 0.5,
  fontSize:14
  },
  inputs: {
    backgroundColor: 'white',
    height: 50,
    width: 300,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
  },
});

export default UpdateCategory;
