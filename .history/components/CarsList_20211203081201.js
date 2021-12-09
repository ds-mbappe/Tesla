import React from 'react'
import { StyleSheet, FlatList, View, Dimensions } from 'react-native'
import CarItem from './CarItem'
import Cars from './Cars'

const CarsList = () => {
    return (
        <View>
            <FlatList
                data={Cars}
                renderItem={({item}) => {<CarItem car={item} />}}
                keyExtractor={(item) => item.id}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarsList

const styles = StyleSheet.create({})
