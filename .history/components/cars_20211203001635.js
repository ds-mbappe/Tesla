import React from 'react'

const cars = () => {
  return (
    {
      name: 'Model S',
      tagline: 'Starting at $69,420',
      image: require('../assets/images/ModelS.jpeg'),
    },
    {
      name: 'Model 3',
      tagline: 'Order Online for ',
      taglineCTA: 'Touchless Delivery',
      image: require('../assets/images/Model3.jpeg'),
    },
    {
      name: 'Model X',
      tagline: 'Order Online for ',
      taglineCTA: 'Touchless Delivery',
      image: require('../assets/images/ModelX.jpeg'),
    },
    {
      name: 'Model Y',
      tagline: 'Order Online for ',
      taglineCTA: 'Touchless Delivery',
      image: require('../assets/images/ModelY.jpeg'),
    },
  )
}

export default cars

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});