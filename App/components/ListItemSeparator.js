import React from 'react';
import { StyleSheet, View } from 'react-native';
import colours from '../config/colours';
function ListItemSeparator() {
    return (
        <View style={styles.separator}/>
    );
}
const styles = StyleSheet.create({
    separator:{
        width:'100%',
        height:1.5,
        backgroundColor:colours.background
    }
})
export default ListItemSeparator;