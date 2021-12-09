import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import CarItem from './CarItem'
import Cars from './Cars'

const CarsList = () => {
    return (
        <View>
            <FlatList
                data={Cars}
                renderItem={({item}) => {<CarItem car={item} />}}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default CarsList

const styles = StyleSheet.create({})
