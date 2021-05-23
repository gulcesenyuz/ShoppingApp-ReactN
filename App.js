import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AllProductsScreen from './screens/AllProductsScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CategoryProductsScreen from './screens/CategoryProductsScreen';
import TopBar from './components/TopBar';
import IndexPage from './screens/IndexPage';
import AddCategory from './screens/AddCategory';

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
            style={{ flex: 1 }}>
            <Text style={{ color: isFocused ? '#ff6e40' : 'grey' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
              <Stack.Screen name="IndexPage" component={IndexPage} options={{ headerTitle: props => <TopBar {...props} /> }} />

        <Stack.Screen name="Categories" component={CategoriesScreen} 
        />

        <Stack.Screen
          name="CategoryProduct"
          component={CategoryProductsScreen}
        />
        <Stack.Screen name="Products" component={AllProductsScreen} />
        <Stack.Screen name="ProductsDetails" component={ProductDetailScreen} />
                <Stack.Screen name="Orders" component={OrdersScreen} />
                                <Stack.Screen name="AddCategory" component={AddCategory} />

                

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabText: {
    fontWeight: '800',
    fontSize: '24',
  },
});
