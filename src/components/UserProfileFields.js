import React, { useState, useEffect } from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import { auth } from '../firebase/firebase';

// Create a component ProfileScreenText that will be rendered in UserProfileScreen
const ProfileScreenText = () => {
  // Initialize variables that will useState to change the text fields in the TextInput boxes
  const [name, setName] = useState('Name:   ');
  const [email, setEmail] = useState('Email:   ');
  const [username, setUsername] = useState('Username:   ');
  const [number, setNumber] = useState('Phone:   ');
  const [location, setLocation] = useState('Location:   ');
 
 /*{Tries to retrieve user credentials from firebase}
  useEffect(()=> {
    //Get the current user
    const user = auth().currentUser;

    if (user) {
        // Name and email address
        const name = user.displayName;
        const email = user.email
    }

    // Check if the user's email is verified
    const emailVerified = user.emailVerified;

    // User's unique ID
    const uid = user.uid;

    console.log('User Info:', {
        name,
        email,
        emailVerified,
        uid,
    });
   },
  []);*/ 

  
  return (
    <SafeAreaView>
      {/*Creating text input fields. Name, Username, and Email need to be retrieved from Firebase. Phone number can be configured in registration screen
       as an option to recieve notifications. User location also needs to be implemented.}
       */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={newText => setName(newText)}
        placeholderTextColor={'black'}
      />
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={newText => setUsername(newText)}
        placeholderTextColor={'black'}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholderTextColor={'black'}
        onChangeText={newText => setEmail(newText)}
      />
      <TextInput
        style={styles.input}
        value={number}
        placeholderTextColor={'black'}
        keyboardType='numbers-and-punctuation'
        onChangeText={newText => setNumber(newText)} 
        />

      <TextInput
        style={styles.input}
        value={location}
        placeholderTextColor={'black'}
        onChangeText={newText => setLocation(newText)}
      />
      </SafeAreaView>
  );
}


// Styling the TextInput fields
const styles = StyleSheet.create({
  
  input: {
    height: 50,
    width: 400,
    borderWidth: 1,
    padding: 10,
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: '5',
    borderBottomColor: '#000000',
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    color: '#000000',
    flexDirection: 'column'
  }
});



export default ProfileScreenText;