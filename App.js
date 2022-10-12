import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';

const App = () => {
  // Variables
  const fullname = 'Darron Brown';
  let firstname = 'Darron';
  var lastname = 'Brown';

  // Data Types
  let number = 7;
  let boolean = false;
  let string = 'String';

  //Quotations
  const quote1 = 'Hello There';
  const quote2 = "Hello There Again";
  const stringWithQuote = "I love hanging out on Friday's";

  // Shorthand variables
  let lion = 'lion', tiger = 'tiger';

  // Arrays
  let animals = ['pig', 'chicken', 'sheep'];
  animals[2] = 'horse';
  animals[3] = 'hawk';

  // Expressions
  const expression = 'const expression = \'This is an expression\';';
  const thirtySix = 9 * 4;
  const teacherNames = 'Darron ' + 'Brown';

  // Operators
  const isCorrect = 9 > 5 ? 'This is correct' : 'This is incorrect';
  const subtraction = 5 - 1;
  const multiplication = 10 * 4;
  const division = 30 / 3;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Text style={styles.header}>Variables</Text>
        <Text>{fullname}</Text>
        <Text>{firstname} {lastname} {'\n'}</Text>
        <Text style={styles.header}>Data Types</Text>
        <Text>{number}</Text>
        <Text>Boolean: {boolean}</Text>
        <Text>{string} {'\n'}</Text>
        <Text style={styles.header}>Quotations</Text>
        <Text>{quote1}</Text>
        <Text>{quote2}</Text>
        <Text>{stringWithQuote} {'\n'}</Text>
        <Text style={styles.header}>Short hand variables</Text>
        <Text>{lion}</Text>
        <Text>{tiger} {'\n'}</Text>
        <Text style={styles.header}>Array</Text>
        {animals.map((animal, index) => <Text key={index}>{animal}</Text>)}
        <Text>{animals[0]}</Text>
        <Text>{animals[1]}</Text>
        <Text>{animals[2]}</Text>
        <Text>{animals[3]} {'\n'}</Text>
        <Text style={styles.header}>Expressions</Text>
        <Text>{expression}</Text>
        <Text>9 * 4 = {thirtySix}</Text>
        <Text> const teacherNames = {teacherNames} {'\n'}</Text>
        <Text style={styles.header}>Operators</Text>
        <Text>{isCorrect}</Text>
        <Text>{subtraction}</Text>
        <Text>{multiplication}</Text>
        <Text>{division}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default App;
