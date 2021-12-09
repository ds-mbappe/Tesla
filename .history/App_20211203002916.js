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
        renderItem={({item}) => {
          <CarItem
            name={item.name}
            tagline={item.tagline}
            taglineCTA={item.taglineCTA}
            image={item.image}
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
