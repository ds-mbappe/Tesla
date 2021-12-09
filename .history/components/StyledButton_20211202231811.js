import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const StyledButton = (props) => {
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

    },
    button: {

    },
    text: {

    },
})
