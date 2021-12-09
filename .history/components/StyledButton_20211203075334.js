import React from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const StyledButton = ({ type, content }) => {

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: backgroundColor }]}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StyledButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
    },
    button: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
})
