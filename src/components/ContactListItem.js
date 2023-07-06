import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { AntDesign } from '@expo/vector-icons'; //message1 and phone icon
//import { Entypo } from '@expo/vector-icons'; //edit pencil icon

//TODO: find out where the photo is coming from
//TODO: find out about the availability - where does the data come from, how to show on app

export default function ContactPersonListItem() {
  return (
    <View>
      <Image style={styles.image} source={{ uri: 'srcassetsimages\thaddeus_globe_only.svg' }} />

      <View>
        <Text>Contact Name</Text>
        <Text>Extra line of text</Text>
      </View>

      <View>
        
      </View>
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
