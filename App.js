import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';

const App = () => {
  const [greeting, setGreeting] = useState('');

  const getGreeting = () => {
    const todaysDate = new Date();
    const currentHour = todaysDate.getHours();

    if (currentHour > 18) {
      setGreeting('Good evening!');
    } else if (currentHour > 12) {
      setGreeting('Good afternoon!');
    } else {
      setGreeting('Welcome!');
    }

    return greeting;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{greeting}</Text>
      <Button
        title={'Say Hello'}
        onPress={getGreeting}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default App
