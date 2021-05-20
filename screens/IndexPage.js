import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,

} from 'react-native';

import ProductsScreen from "../screens/ProductsScreen";

class IndexPage extends Component {
    state = {
        indexItems: [
            { id: "1", title: "Products" },
            { id: "2", title: "Categories" },
            { id: "3", title: "Orders" },
        ]
    }

    renderItemsFunction = (itemData) => {
        return (
            <TouchableOpacity style={styles.item}
                //Index item naavigator
                onPress={
                    () => {
                        console.log("hey");
                        if (itemData.item.id === "1") {
                            this.props.navigation.navigate('ProductsScreen',)
                        }
                        else if (itemData.item.id === "2") {
                            this.props.navigation.navigate('CategoriesScreen',)

                        }
                        else {
                            this.props.navigation.navigate('OrderScreen',)

                        }
                    }
                }>

                <Text style={styles.text} numberOfLines={2}> {itemData.item.title} </Text>

            </TouchableOpacity>

        )
    }

    render() {

        return (

            <View style={styles.main}>
                <FlatList style={{ marginTop: 5 }} data={this.state.indexItems} numColumns={1}
                    renderItem={this.renderItemsFunction} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 5,
        backgroundColor: "white",

    },
    item: {
        flex: 1,
        height: 150,
        width: 300,
        backgroundColor: "#1e3d59",
        borderRadius: 15,
        shadowColor: "gray",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        margin: 5
    },
    text: {
        fontSize: 14,
        color: '#f5f0e1',
        letterSpacing: 2,
        fontWeight: '600',
        fontFamily: "halfmoon_bold",
        alignContent: "flex-end",
        marginVertical: 10

    },

});



export default IndexPage;



