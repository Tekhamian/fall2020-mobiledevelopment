//Part1: Create a New React Native project named week11
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
//Part2: Installed React Native Elements for the project
import { Card, Button } from 'react-native-elements';

export default function App() {
  return (

    // Part3: Replace default content withinthe <View> with the folowing...
    <View style={styles.container}>
     
      <Card>
        {/* ...Create a <Card> with a title of your name  */}
        <Card.Title style={{color: 'grey', fontSize: '20px'}}>Robert Thompson</Card.Title>    
        <Card.Title style={{color: 'orange'}}>Favorite Foods :</Card.Title> 
        {/* ...Create 2 <Text> components - favorite food #1 */}
        <Text style={{fontSize: '15px'}}>Vegan Food</Text>
        {/* ...With a card divider between each text component */}
        <Card.Divider />
        <Image source={{
          width: 380,
          height: 250,
          uri:"http://picsum.photos/id/292/380/250"
        }}/>
        <Card.Divider />
        {/* ...Create 2 <Text> components - favorite food #2 */}
        <Text style={{fontSize: '15px'}}>Sea Food</Text>
        <Card.Divider />
        <Image source={{
          width: 380,
          height: 250,
          uri:"https://picsum.photos/id/488/367/267" 
        }}/>

         <p>
           {/* Create a React Native Element <Button> with the Title "SUBMIT" */}
          <Button 
            color="grey"
            title='SUBMIT'           
            onPress={() =>alert('Submit Button Has Been Tested, Thank You')
            }        
          />
        </p>

      </Card>

      <br/>    

      <StatusBar style='auto' />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

