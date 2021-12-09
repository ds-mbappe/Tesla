import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CarItem from './components/CarItem';
import Cars from './components/Cars';

export default function App() {

  return (
    <View style={styles.container}>
      
      <FlatList
        data={Cars}
        renderItem={() => {
          <CarItem
            name={Cars.name}
            tagline={Cars.tagline}
            taglineCTA={Cars.taglineCTA}
            image={Cars.image}
          />
        }}
      />

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
