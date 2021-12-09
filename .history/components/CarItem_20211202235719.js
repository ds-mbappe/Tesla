import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import StyledButton from './StyledButton'

const CarItem = ({ name, tagline, image }) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
            source={image}
            style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton
                    type="primary"
                    content={"Custom order"}
                    onPress={() => {
                        alert('Custom order Pressed.')
                    }}
                />

                <StyledButton
                    type="secondary"
                    content={"Inventory"}
                    onPress={() => {
                        alert('Inventory Pressed.')
                    }}
                />
            </View>
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
    buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },
})
