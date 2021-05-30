import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AllProductsScreen from './screens/Product/AllProductsScreen';
import CategoriesScreen from './screens/Category/CategoriesScreen';
import OrdersScreen from './screens/Order/OrdersScreen';
import ProductDetailScreen from './screens/Product/ProductDetailScreen';
import CategoryProductsScreen from './screens/Category/CategoryProductsScreen';
import TopBar from './components/TopBar';
import IndexPage from './screens/IndexPage';
import AddCategory from './screens/Category/AddCategory';
import OrderDetailScreen from './screens/Order/OrderDetailScreen';
import UpdateCategory from './screens/Category/UpdateCategory'

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
            <Text style={{ color: isFocused ? '#f07b3f' : 'grey' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Stack = createStackNavigator();

function ProductStack(){
  return(
          <Stack.Navigator>
 
        <Stack.Screen
          name="Products"
          component={AllProductsScreen}
          options={{
            title: 'Products',
            headerStyle: {
              backgroundColor: '#fff',
              
            },
            headerTintColor: '#4d4d4d',
            headerTitleStyle: {
              fontWeight: '800',
            },
          }}
        />
        <Stack.Screen
          name="ProductsDetails"
          component={ProductDetailScreen}
          options={{
            title: 'Product Details',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#4d4d4d',
            headerTitleStyle: {
              fontWeight: '800',
            },
          }}
        />
      </Stack.Navigator>
  );
}


function CategoryStack(){
  return(
          <Stack.Navigator>
 
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'Categories',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#4d4d4d',
            headerTitleStyle: {
              fontWeight: '800',
            },
          }}
        />
        <Stack.Screen
          name="CategoryProducts"
          component={CategoryProductsScreen}
          options={{
            title: 'Category Products',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#4d4d4d',
            headerTitleStyle: {
              fontWeight: '800',
            },
          }}
        />
                <Stack.Screen
          name="AddCategory"
          component={AddCategory}
          options={{
            title: 'Add Category',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#4d4d4d',
            headerTitleStyle: {
              fontWeight: '800',
            },
          }}
        />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={{
            title: 'Product Detail',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#4d4d4d',
            headerTitleStyle: {
              fontWeight: '800',
            },
          }}
        />
                <Stack.Screen
          name="UpdateCategory"
          component={UpdateCategory}
          options={{
            title: 'Category Edit',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#4d4d4d',
            headerTitleStyle: {
              fontWeight: '800',
            },
          }}
        />
      </Stack.Navigator>
  );
}

function OrderStack(){
  return(
          <Stack.Navigator>
 
        <Stack.Screen
          name="OrdersScreen"
          component={OrdersScreen}
          options={{
            title: 'Orders',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#4d4d4d',
            headerTitleStyle: {
              fontWeight: '800',
            },
          }}
        />
                <Stack.Screen
          name="OrderDetailScreen"
          component={OrderDetailScreen}
          options={{
            title: 'Order Detail',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#4d4d4d',
            headerTitleStyle: {
              fontWeight: '800',
            },
          }}
        />
      </Stack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
 <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home'
                      : 'ios-home-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Products') {
              return (
                <Ionicons
                  name={focused ? 'pricetag' : 'pricetag-outline'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Categories') {
              return (
                <Ionicons
                  name={focused ? 'apps' : 'apps-outline'}
                  size={size}
                  color={color}
                />
              );
            }
                  else if (route.name === 'Orders') {
              return (
                <Ionicons
                  name={focused ? 'cart' : 'cart-outline'}
                  size={size}
                  color={color}
                />
              );
            }
                        else  {
              return (
                <Ionicons
                  name={focused ? 'add-circle' : 'add-circle-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
             tabBarOptions={{
          activeTintColor: '#ea5455',
          inactiveTintColor: 'gray',
        }}
 
 >
  <Tab.Screen
          style={styles.tabText}
          name="Home"
          component={IndexPage}
          
        />
        <Tab.Screen
          style={styles.tabText}
          name="Products"
          component={ProductStack}
        />
        <Tab.Screen name="Categories" component={CategoryStack} />
        <Tab.Screen name="Orders" component={OrderStack} />
      </Tab.Navigator>
      
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  tabText: {
    fontWeight: '800',
    fontSize: '24',
  },
});