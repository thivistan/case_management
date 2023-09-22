import { Text, TouchableOpacity, Image, Linking, StyleSheet } from 'react-native';
import React from 'react';
import ExternalLink from '../assets/images/externalLink.png';

export default function ExternalLinkButton({ text, link }) {
  return (
    <TouchableOpacity
      onPress={() => {
        return Linking.openURL(link);
      }}
      style={styles.button}
    >
      <Text style={styles.buttonText}>
        {text + ' '} <Image style={styles.image} source={ExternalLink} />
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(81, 168, 194)',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 13,
    display: 'flex',
    textAlign: 'center',
    paddingBottom: 15,
  },
  image: {
    height: 20,
    width: 20,
  },
});
