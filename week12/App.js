//Part1:A) Create a New React Native project named week12 &...
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
//B) Installed React Native Elements for the project
import { Card, Button } from 'react-native-elements';

export default function App() {
  
  // Hook for state 
  const [vote, chgVote] = useState('');

  const pressedButtonOne = () => {
    chgVote('Location #1')
  }

  const pressedButtonTwo = () => {
    chgVote('Location #2')
  }

  const pressedButtonThree = () => {
    chgVote('Location #3')
  }

  const pressedButtonFour = () => {
    chgVote('Location #4')
  }
  

  return (

    <View style={styles.container}>

      {/* ...Create a <Card> with 3 buttons (3 options) */}
      <Card>
        <Card.Title style={{color: 'grey', fontSize: '20px'}}>Traveling Vote App</Card.Title>    
        <Card.Title style={{color: 'orange'}}>Click button below to vote for the best location:</Card.Title> 
       
        {/* Voting Option 1 */}
	<Text style={{fontSize: '15px'}}>Location 1 - Big City</Text>
        <Card.Divider />
        <Image source={{
          width: 380,
          height: 250,
          uri:"http://picsum.photos/id/411/1920/1280"
        }}/>
           
        {/* Create a React Native Element <Button> */}
        <View style={styles.buttonContainer}>
          <Button 
            title='VOTE FOR LOCATION #1'           
            onPress={pressedButtonOne}        
          />
        </View>    
        
        {/* Voting Option 2 */}
	<Text style={{fontSize: '15px'}}>Location 2 - Lake/ Wildlife Reserve</Text>
        <Card.Divider />
        <Image source={{
          width: 380,
          height: 250,
          uri:"http://picsum.photos/id/456/3823/2549"
        }}/>
           
        {/* Create a React Native Element <Button> */}
        <View style={styles.buttonContainer}>
          <Button 
              title='VOTE FOR LOCATION #2'           
              onPress={pressedButtonTwo}
          />
        </View>

        {/* Voting Option 3 */}
	<Text style={{fontSize: '15px'}}>Location 3 - Tropical/ Beach </Text>
        <Card.Divider />
       	<Image source={{
        width: 380,
        height: 250,
        uri:"http://picsum.photos/id/372/3264/2448"
        }}/>
          
        {/* Create a React Native Element <Button> */}
        <View style={styles.buttonContainer}>
          <Button 
            title='VOTE FOR LOCATION #3'           
            onPress={pressedButtonThree}  
          />
        </View>

        <Text style={styles.footer}>You Have Voted For {vote}</Text>
              
      </Card>

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
  footer: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginBottom: 30,
  }
});