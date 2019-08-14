import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

function InputBar(props) {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                value={props.todoInput}
                onChangeText= {(todoInput) => props.textChange(todoInput)}
            />
            <TouchableOpacity style={styles.addButton} onPress={props.addNewToDo}>
                <Text style={styles.addButtonText}>Add to list!</Text>
            </TouchableOpacity>
        </View>
    );
}

export default InputBar;


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        shadowOffset: {width: 0, height: 3},
        shadowColor: '#171717',
        shadowOpacity: 0.1
    },
    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 18,
        height: 35
    },
    addButton: {
        width: 100,
        backgroundColor: '#FFCE00',
        alignItems: 'center',
        justifyContent: 'center',

    },
    addButtonText: {
        color: '#171717',
        fontSize: 18,
        fontWeight: '700',
    }


})




