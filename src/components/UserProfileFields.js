import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

// Create a component ProfileScreenText that will be rendered in UserProfileScreen
const ProfileScreenText = () => {
  // Initialize variables that will useState to change the text fields in the TextInput boxes
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('')

  return (
    <SafeAreaView>
      {/*Creating text input fields that contain a placeholder and allow user to type inside TextInput boxes. */}
      <TextInput
        style={styles.input}
        setName={setName}
        value={name}
        placeholder="Name: "
      />
      <TextInput
        style={styles.input}
        setUsername={setUsername}
        value={username}
        placeholder="Username: "
      />
      <TextInput
        style={styles.input}
        setEmail={setEmail}
        value={email}
        placeholder="Email: "
      />
      <TextInput
        style={styles.input}
        setNumber={setNumber}
        value={number}
        placeholder="Phone: "
      />
      <TextInput
        style={styles.input}
        setLocation={setLocation}
        value={location}
        placeholder="Location: "
      />
      </SafeAreaView>
  );
};

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
    color: '#000000'
    
  },
});

export default ProfileScreenText;