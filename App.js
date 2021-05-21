import React from 'react';
import { StyleSheet,Text, View,SafeAreaView,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductsScreen from './screens/ProductsScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import OrdersScreen from './screens/OrdersScreen';

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#ff6e40' : 'grey' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


export default function App() {
  return (
   
       <NavigationContainer>
       <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen style={styles.tabText} name="Products" component={ProductsScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
            <Tab.Screen name="Orders" component={OrdersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  tabText:{
    fontWeight:'800',
    fontSize:'24'

  }
})