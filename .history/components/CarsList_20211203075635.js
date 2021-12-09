import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
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
      />
    )
}

export default CarsList

const styles = StyleSheet.create({})
