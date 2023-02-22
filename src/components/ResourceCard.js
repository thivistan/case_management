import {Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

//This component represents each resource
const ResourceCard = ({ image, title, url }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => Linking.openURL(url)}>
        <Image source={{ uri: image }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    
    cardContainer: {
      marginHorizontal: 10,
    },
    cardImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    cardTitle: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default ResourceCard