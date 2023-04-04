import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ResourcePage from '../../../components/ResourcePage';
import { db } from '../../../firebase/firebase.js';
export default function HomeScreen() {
  var starCountRef = db.ref('inspirational_quotes/1');
  starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Home Screen</Text>
    </View>
  );
}
