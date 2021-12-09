import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const StyledButton = (props) => {
    return (
        <View>
            <Pressable
                style={styles.button}
                onPress={() => {
                alert('hey')
                }}>
                <Text>Order</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton

const styles = StyleSheet.create({

})
