import React from 'react';




//import { IMAGENAME } from './assets/images/thaddeus_logo.jpg';

import { StylesSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';




export default function HomeScreen() {

  const handleButtonClick1 = () => {
    // Navigate to a different link
    Linking.openURL('https://www.linkedin.com/company/the-thaddeus-foundation/');
  };

  const handleButtonClick2 = () => {
    // Navigate to a different link
    Linking.openURL('https://www.facebook.com/thaddeusresoursecenter');
  };

  const handleButtonClick3 = () => {
    // Navigate to a different link
    Linking.openURL('https://www.instagram.com/thaddeusresourcecenter/');
  };


  return (

    <View style={{ flex: 1, marginTop: -5, backgroundColor: 'lightblue' }}>

      <ScrollView>

        <Image

          style={{ width: 200, height: 100, resizeMode: 'contain', alignSelf: 'center' }}

          source={require('../../../assets/images/thaddeus_logo.jpg')}

        />




        <Text style={{ fontSize: 10, fontWeight: 'bold', alignSelf: 'center' }}>

          RESTORE HOPE, INSPIRE GROWTH, and EMPOWER GIRLS & WOMEN

        </Text>




        <View></View>

      </ScrollView>




      <View

        style={{

          backgroundColor: 'white',

          flexDirection: 'row',

          justifyContent: 'space-between',

          alignItems: 'flex-end',

        }}

      >

        <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>

          <TouchableOpacity onPress={handleButtonClick2} style={{ width: 30, height: 30 }}>

            <Image

              source={require('../../../assets/images/facebookicon.png')}

              style={{ width: 30, height: 30 }}

            />

          </TouchableOpacity>

          <TouchableOpacity onPress={handleButtonClick1} style={{ width: 30, height: 30 }}>
         
            <Image

              source={require('../../../assets/images/linkdinicon.png')}

              style={{ width: 30, height: 30 }}

            />
          
          </TouchableOpacity>

          <TouchableOpacity onPress={handleButtonClick3} style={{ width: 30, height: 30 }}>

            <Image

              source={require('../../../assets/images/instagramicon.png')}

              style={{ width: 30, height: 30 }}

            />

          </TouchableOpacity>

        </View>




        <View style={{ flex: 1,  
        flexDirection: 'column',
        alignitems: 'flex-end', 
        marginLeft: 100 }}>

          <Text>(909) 599-2111</Text>

          <Text>info@thaddeus.org</Text>

        </View>

      </View>

    </View>

  );

}


