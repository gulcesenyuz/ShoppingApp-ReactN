import * as React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function TopBar() {
  return (
    <View style={{    
            flexDirection: "row",
          padding:10,
          backgroundColor:'#fff',
            alignContent: "space-between",
          }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../assets/img/dish.png')}
      />
      <View style={styles.nameContainer}>
      <Text style={styles.brandname}>GG Food Shop</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  nameContainer: {
    flex: 1,
    paddingHorizontal:20,
    paddingVertical:15,
    alignContent:'flex-start',
    alignItems:'flex-start',
    
  },
  brandname: {
    color:'#4d4d4d',
    fontSize:18,
    fontWeight:'800'


  }

});

export default TopBar;
