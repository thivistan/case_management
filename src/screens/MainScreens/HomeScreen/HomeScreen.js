import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ResourcePage from '../../../components/ResourcePage';
import { auth, db } from '../../../firebase/firebase.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const [inspirationalQuote, setInspirationalQuote] = useState('');
  const [dbData, setDBData] = useState('hola');

  function updateQuote(updatedQuote) {
    setInspirationalQuote(updatedQuote);
  }

  const getInspirationalQuote = () => {
    // get a random number
    // add 1 because of the way the quotes are represented in realtime db -- should change that
    // to start from 0
    const randomNumber = Math.floor(Math.random() * 3); // replace 2 w total number of quotes

    // read database inspirational quote
    var quoteDbRef = db.ref('inspirational_quotes/' + randomNumber);
    // db.ref('users/' + '1').set(auth.currentUser.uid);  // sets the value of user 1 to the user's UID

    // extract data from db reference and update the current quote
    quoteDbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      updateQuote(data);
    });
  };

  const getUserID = () => {
    return auth.currentUser.uid;
  };

  // use this to practice stuff with the database
  const dbPractice = () => {
    console.log('DB Practice Button Clicked\n');
    db.ref('users/' + getUserID()).set('last_name/');
    db.ref('users/' + getUserID() + '/last_name').set('Goshay');
    var practiceRef = db.ref('users/' + getUserID() + 'last_name');
    practiceRef.on('value', (snapshot) => {
      const data = snapshot.val();
      setDBData(data);
    });
  };

  // the empty array means at the end of the
  // function will only be called once
  useEffect(() => {
    getInspirationalQuote();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Home Screen</Text>
      <Text>{inspirationalQuote}</Text>
      <Text>{getUserID()}</Text>
      <TouchableOpacity
        onClick={() => {
          dbPractice();
        }}
      >
        <Text>{dbData}</Text>
      </TouchableOpacity>
    </View>
  );
}
