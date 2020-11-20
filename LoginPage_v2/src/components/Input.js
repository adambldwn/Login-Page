import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';

const Input = ({holder}) => {

    

    return(
        <View style={styles.container}>
            <TextInput
                placeholder = {holder}
            />
        </View>
    )
}

export {Input};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4caf50',
        width: Dimensions.get('window').width * 0.75,
        borderRadius: 10,
        margin: 10,
        marginVertical: 20   
    }
})