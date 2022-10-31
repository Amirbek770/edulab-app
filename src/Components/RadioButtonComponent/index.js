import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const RadioButtonComponent = ({ onPress, selected, children, style }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.radioButtonContainer, style]}>
            <TouchableOpacity onPress={onPress} style={styles.radioButton}>
                {selected ? <View style={styles.radioButtonIcon} /> : null}
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.radioButtonText}>{children}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default RadioButtonComponent

const styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    radioButton: {
        height: 20,
        width: 20,
        marginVertical: 3,
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: '#41ae8d',
    },
    radioButtonText: {
        fontSize: 16,
        marginLeft: 16,
        color: "#000"
    },
})