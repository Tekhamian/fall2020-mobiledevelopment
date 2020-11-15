import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';



export default function App() {

  const [choice, chgChoice] = useState('myChoice');

  const button1 = () => {
    chgChoice('Button #1')
  }

  const button2 = () => {
    chgChoice('Button #2')
  }

  const button3 = () => {
    chgChoice('Button #3')
  }

  const button4 = () => {
    chgChoice('Button #4')
  }

  return (

    <View style={styles.container}>

      <Text style={styles.header}>Buttons & State</Text>
      <View style={styles.buttonz}>

        <View style={styles.buttonz}>
        <Button 
          title="Button #1" 
          onPress={button1}
          />;
        </View>

        <View style={styles.buttonz}>
        <Button 
          title="Button #2" 
          onPress={button2}
          />;
        </View>        

        <View style={styles.buttonz}>
        <Button 
          title="Button #3" 
          onPress={button3}
          />;
        </View>

        <View style={styles.buttonz}>
        <Button 
          title="Button #4" 
          onPress={button4}
          />;
        </View>

  <Text style={styles.header}>I vote for {choice}</Text>

      </View> 
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
  header: {
    fontSize: 18,
    // color: 'orange',
    fontWeight: 'bold',
  },
  buttonz: {
    padding: 10
  }
});

