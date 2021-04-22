import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colours from '../config/colours';
import Screen from './Screen';
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({icon, placeholder, items, onSelectItem, selectedItem}) {

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && 
                    <MaterialCommunityIcons 
                        name={icon} 
                        size={25} 
                        color={colours.background} 
                        style={styles.icon}/>}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons 
                        name='chevron-down'
                        size={25} 
                        color={colours.background} />
                </View>
            </TouchableWithoutFeedback>
        <Modal visible={modalVisible}animationType="slide">
            <Screen>
                <Button title="Close" onPress={() => setModalVisible(false)}/>
                <FlatList 
                data={items}
                keyExtractor={item =>item.value.toString()}
                renderItem={({item}) => 
                <PickerItem
                    label={item.label}
                    onPress ={() => {
                        setModalVisible(false);
                        onSelectItem(item);
                    }}/>}/>
            </Screen>
        </Modal>
        </React.Fragment>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colours.secondary,
        borderRadius:25,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:10,
    },
    icon:{
        marginRight:10
    },
    text:{
        flex:1,
        color:colours.background,
        fontSize:20,
    }
})
export default AppPicker;