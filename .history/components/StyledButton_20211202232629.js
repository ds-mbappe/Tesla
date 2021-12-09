import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const StyledButton = (props) => {

    const type = props.type;
    const backgroundColor = type === 'primary' ? 'black' : 'white';

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => {
                alert('hey')
                }}>
                <Text style={styles.text}>Order</Text>
            </Pressable>
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
