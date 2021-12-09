import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import CarItem from './CarItem'
import Cars from './Cars'

const CarsList = () => {
    return (
      <FlatList
        data={Cars}
        renderItem={({item}) => {<CarItem car={item} />}}
        keyExtractor={(item) => item.id}
      />
    )
}

export default CarsList

const styles = StyleSheet.create({})
