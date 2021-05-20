import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IndexPage from "./screens/IndexPage"
import NavBar from "./navigation/Navigation"
import FetchSample from './fetchsample/fetchsample';
import Categories from './screens/CategoriesScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Categories />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
