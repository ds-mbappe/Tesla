import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CarItem from './components/CarItem';
import Cars from './components/Cars';

export default function App() {

  return (
    <View style={styles.container}>
      <CarItem
        name="Model S"
        tagline="Starting at $69,420"
        image={require('./assets/images/ModelS.jpeg')}
      />
      {/* <FlatList
        data={Cars}
        renderItem={({item}) => {
          <CarItem
            name={item.name}
            tagline={item.tagline}
            taglineCTA={item.taglineCTA}
            image={item.image}
          />
        }}
      /> */}

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
