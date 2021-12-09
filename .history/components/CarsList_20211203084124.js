import React from 'react'
import { StyleSheet, View, FlatList, Dimensions } from 'react-native'
import CarItem from './CarItem'
import cars from './Cars'

const CarsList = () => {
    return (
        <View style={styles.container}>
        <FlatList
          data={cars}
          renderItem={({item}) => <CarItem car={item} />}
          showsVerticalScrollIndicator={false}
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
