import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
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
//<Image styles={styles.image} source={require('../assets/images/thaddeus_logo.jpg')} />
export default function ContactPersonListItem() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <FontAwesome name="user-circle" size={50} color="black" borderRadius={25} />
      </View>

      <View>
        <Text style={styles.headingText}>Contact Name</Text>

        <View>
          <Text style={styles.secondaryText}>Extra line of text</Text>
        </View>
      </View>

      <View style={styles.container}>
        <AntDesign name="message1" style={styles.icons} />
        <AntDesign name="phone" style={styles.icons} />
        <MaterialCommunityIcons name="pencil" style={styles.icons} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 10, backgroundColor: 'white' },
  headingText: { fontSize: 25, color: '#00BFFF' },
  secondaryText: { fontSize: 15, color: '#333' },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  icons: { fontSize: 30, color: 'black', paddingLeft: 20, color: '#00BFFF' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
});
