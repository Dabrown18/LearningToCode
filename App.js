import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';

const App = () => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setFirstName(text)}
        value={firstName}
        placeholder="Enter firstname"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setLastName(text)}
        value={lastName}
        placeholder="Enter lastname"
        keyboardType="numeric"
      />
      <Button
        title={'Submit name'}
        onPress={() => alert(`User: ${firstName} ${lastName} has been saved`)}
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
