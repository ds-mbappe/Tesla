import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import cars from './Cars'

const CarsList = () => {
    return (
        <View style={styles.container}>
        <FlatList
          data={cars}
          renderItem={({item}) => <CarItem car={item} />}
          showsVerticalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
        />
      </View>
    )
}

export default CarsList

const styles = StyleSheet.create({})
