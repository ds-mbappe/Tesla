import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CarItem from './components/CarItem';
import cars from './components/cars';

export default function App() {

  return (
    <View style={styles.container}>
      
      <FlatList
        data={cars}
        renderItem={() => {
          <CarItem
            name={cars.name}
            tagline={cars.tagline}
            taglineCTA={cars.taglineCTA}
            image={cars.image}
          />
        }}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
