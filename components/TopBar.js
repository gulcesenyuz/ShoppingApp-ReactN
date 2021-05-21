import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = props => {

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
            <View>
                <Text style={styles.exit}>Log out</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row', // row
        backgroundColor: '#1e3d59',
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around
        paddingLeft: 10,
        paddingRight: 10
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
    exit: {
        color: '#f5f5f5',
        fontSize: 16,
        fontWeight: '400',

    }
});

export default Header;