import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState(25)
  const [highrate, setHighrate] = useState('')
  const [lowrate, setLowrate] = useState('') 

function calculate() {
  setLowrate( (220-age) *0.65 ) ;
  setHighrate( (220-age) *0.85 );
}

  return (
    <View style={styles.container}>
      <Text style={styles.container}>Age</Text>
      <TextInput style={styles.field} value={age} onChangeText={text => setAge(text)} keyboardType='decimal-pad'/>
      <Text>heartrate limits</Text>
      <Text style={styles.field}>{lowrate.toFixed(0)} - {highrate.toFixed(0)}</Text>
      <Button onPress={calculate} title="Calcultate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft: 10,
    backgroundColor: 'lightblue',
  },
  field: {
    marginBottom: 10,
    backgroundColor: 'white',
  }
});
