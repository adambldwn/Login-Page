import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';

const MyButton = ({mytitle}) => {
    return(
        <View>
            <TouchableOpacity style={styles.container}>
                <Text>{mytitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

export {MyButton};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#673ab7',
        borderRadius: 20,
        margin:20,
        padding:10,
        width: Dimensions.get('window').width * 0.5,
        alignItems: 'center'

    }
})