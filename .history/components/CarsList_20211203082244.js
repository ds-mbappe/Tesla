import React from 'react'
import { StyleSheet, FlatList, View, Dimensions } from 'react-native'
import CarItem from './CarItem'
import cars from './cars'

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                keyExtractor={(item) => item.id}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarsList

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
})
