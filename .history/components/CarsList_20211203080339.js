import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import CarItem from './CarItem'
import Cars from './Cars'

const CarsList = () => {
    return (
      <FlatList
        data={Cars}
        renderItem={({item}) => {
          <CarItem
            name={item.name}
            tagline={item.tagline}
            taglineCTA={item.taglineCTA}
            image={item.image}
          />
            }}
        keyExtractor={(item) => item.id}
      />
    )
}

export default CarsList

const styles = StyleSheet.create({})
