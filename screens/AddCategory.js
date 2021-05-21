import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import { Input } from 'react-native-elements';
import Header from '../components/TopBar';

const AddCategory = () => {
  const [categoryName, setcategoryName] = useState('');
  const [description, setdescription] = useState('');

  const send = () => {
    let requestOptions = {
      method: 'POST',
      body: JSON.stringify({ name: categoryName, description: description }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };
    fetch('https://northwind.vercel.app/api/categories', requestOptions)
      .then((res) => res.json())
      .then((data) => {
alert(`New Category ${categoryName} Added`)      });
  };

  return (
    <SafeAreaView>
      <Header title="GG Shop" />

      <ScrollView>
        <Input
          placeholder="Category Name"
          onChangeText={(value) => setcategoryName(value)}
        />

        <Input
          placeholder="Description"
          onChangeText={(value) => setdescription(value)}
        />
        <Button onPress={() => send()} title="Post" />
      </ScrollView>
    </SafeAreaView>
  );
};
export default AddCategory;
