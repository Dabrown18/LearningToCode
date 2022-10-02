import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const App = () => {

  const driversLicense = {
    image: 'https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/06/what-is-a-professional-headshot-example-header.jpg',
    name: 'Samantha Johnson',
    height: "5'8",
    weight: '140 lbs',
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.driverLicense}>
        <Image style={styles.driverLicenseImage} source={{uri: driversLicense.image}} />
        <Text>Name: {driversLicense.name}</Text>
        <Text>Height: {driversLicense.height}</Text>
        <Text>Weight: {driversLicense.weight}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  driverLicense: {
    borderRadius: 5,
    borderWidth: 2,
    width: '100%',
    padding: 15
  },
  driverLicenseImage: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2
  }
})

export default App
