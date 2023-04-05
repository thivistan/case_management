import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ResourcePage from '../../../components/ResourcePage';
import { db } from '../../../firebase/firebase.js';

export default function HomeScreen() {
  const [inspirationalQuote, setInspirationalQuote] = useState('');

  function updateQuote(updatedQuote) {
    setInspirationalQuote(updatedQuote);
  }

  const getInspirationalQuote = () => {
    // get a random number
    // add 1 because of the way the quotes are represented in realtime db -- should change that
    // to start from 0
    const randomNumber = Math.floor(Math.random() * 2) + 1; // replace 2 w total number of quotes

    // read database inspirational quote
    var quoteDbRef = db.ref('inspirational_quotes/' + randomNumber);

    // extract data from db reference and update the current quote
    quoteDbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      updateQuote(data);
    });
  };

  // the empty array means the function will only be called once
  useEffect(() => {
    getInspirationalQuote()
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Home Screen</Text>
      <Text>{inspirationalQuote}</Text>
    </View>
  );
}
