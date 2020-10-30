import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Alert, Text, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={{color: 'black', fontSize: '20px'}}>Name: Robert Thompson</Text>
      <Text style={{fontSize: '15px'}}>Favorite Foods : Caribbean Cuisines & Sea Food</Text>
      <p>
        <Button 
          title='Click Here To Test Button'
          color='green' 
          onPress={() =>alert("Thank You, Button Has Been Tested")
          }        
        />
      </p>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
