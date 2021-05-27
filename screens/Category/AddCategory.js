import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import { Input } from 'react-native-elements';



export default function AddCategory ({ route, navigation }) {
  const [categoryName, setcategoryName] = useState('');
  const [description, setdescription] = useState('');

  const send = () => {
    if (categoryName.length <= 2) {
      alert('Category name can not be shorter then 2 characters !');
    } else if (categoryName[0] == ' ') {
      alert('Category name can not start with space !');
    } else {
      let requestOptions = {
        method: 'POST',
        body: JSON.stringify({ name: categoryName, description: description }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      fetch('https://northwind.vercel.app/api/categories', requestOptions)
        .then((res) => res.json())
        .then((data) => {
          alert(`New Category ${categoryName} Added`);

        });

    }

  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={{ alignItems: 'center', marginTop: '30%' }}>
          <Text style={styles.formText}>
            Please fill the form to add a new category
          </Text>
        </View>
        <Input
          style={styles.input}
          autoCapitalize="true"
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
          placeholder="Category Name"
          onChangeText={(value) => setcategoryName(value)}
        />

        <Input
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="grey"
          placeholder="Description"
          
          onChangeText={(value) => setdescription(value)}
        />
        <TouchableOpacity style={styles.button} onPress={send}>
          <Text style={styles.sharetext}>Share</Text>
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
  input: {
    flex: 1,
    marginHorizontal: '5%',
    margin: 5,
    height: 40,
    borderColor: 'transparent',
    borderWidth: 0.5,
  fontSize:14
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
});

