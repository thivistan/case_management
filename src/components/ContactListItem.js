import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; //message1 and phone icon
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//You can find the icon catalog at: https://icons.expo.fyi/

//TODO: find out where the photo is coming from
//TODO: find out about the availability - where does the data come from, how to show on app

/**
 * 
 * @returns 
 */
//<Image styles={{resizeMode: 'contain', height: 100, width:100}} source={require('../assets/images/thaddeus_logo.jpg')} />
export default function ContactPersonListItem() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FontAwesome name="user-circle" size={24} color="black" />
      <Text>Contact Name</Text>
      <Text>Extra line of text</Text>
      <AntDesign name="message1" size={24} color="black" />
      <AntDesign name="phone" size={24} color="black" />
      <MaterialCommunityIcons name="pencil" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {},
  image: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
});
