import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import StyledButton from './StyledButton'

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
            source={require('../assets/images/ModelX.jpeg')}
            style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>

            <StyledButton />
        </View>
    )
}

export default CarItem

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
      },
      titles: {
        width: '100%',
        marginTop: '30%',
        alignItems: 'center',
      },
      title: {
        fontSize: 35,
        fontWeight: 'bold'
      },
      subtitle: {
        fontSize: 16,
        color: '#5c5e62',
      },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        position: 'absolute',
    },
})
