import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import IndexPage from "../screens/IndexPage";
import OrderScreen from "../screens/OrderScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import { ProductsScreen } from "../screens/ProductsScreen.js"

const defaultOptionsForStack = {
    defaultOptionsForStack: {

        headerStyle: {
            backgroundColor: '#FF543C',
            elevation: 0,
            shadowOpacity: 0
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#FFFFFF',
            fontSize: 18
        }
    }

};

const IndexPageStack = createStackNavigator({
    IndexPage: {
        screen: IndexPage,
        navigationOptions: {
            headerTitle: " Index Fields"
        }, defaultOptionsForStack
        /*
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: {
                headerTitle: " Categories"
            }
        },
        CategoriesProducts: {
            screen: CategoriesProductsScreen,
    
        },
        ProductDetails: {
            screen: ProductsDetailScreen,
    
        },
        Order: {
            screen: OrderScreen
        }*/

    },


});




const TabNavigator = createBottomTabNavigator({
    IndexPageStack: {
        screen: IndexPage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <FontAwesome name="th" size={20} color={tintColor} />
            }

        },


    },

}, {
    tabBarOptions: {
        showLabel: false,
        activeTintColor: "#FF543C",
        inactiveTintColor: "black",
        tabStyle: { height: 50, zIndex: 99, borderColor: "red", borderTopWidth: 0 },
        labelStyle: { fontSize: 12, paddingTop: 2, paddingBottom: 3, fontFamily: "halfmoon_bold", },
    }
}


);



const NavBar = createAppContainer(TabNavigator)

export default NavBar;


