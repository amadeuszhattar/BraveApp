import React from 'react';
import { View, StyleSheet } from 'react-native';
import colours from '../config/colours';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItemViewProfile(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="account" size={35}
            color={colours.background}/>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colours.elements,
        width:70,
        justifyContent:'center',
        alignItems:'center'


    }
})
export default ListItemViewProfile;