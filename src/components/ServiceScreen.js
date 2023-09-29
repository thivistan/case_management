import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import React from 'react';
import { backgroundColors } from '../global';
import thaddeusLogo from '../assets/images/thaddeus_globe.png';

/**
 * Service Screen component. Displays resources in each category.
 * @param {*} navigation prop needed to navigate to a categoryScreen
 * @param {Object} categoryData JSON object containing category-specific data
 * @returns Service Screen Component
 */
export default function ServiceScreen({ navigation, categoryData }) {
  const handleButtonPress = (category) => {
    if (category.resources) { // If resources are present in categoryData
      navigation.navigate(category.label)
    } else if (category.url) { // If a link is present
      return Linking.openURL(category.url)
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: "space-evenly", flexWrap: "wrap", flexDirection: "row", height: '100%'}}>
      {categoryData.map((category, idx) => (
        <TouchableOpacity
          style={styles.categoryBtn}
          key={idx}
          onPress={() => handleButtonPress(category)}
          >
            {/* Displays the Thaddeus Logo if category image not present */}
            <ImageBackground style={styles.image} source={category.image ? { uri : category.image } : thaddeusLogo}> 
              <View style={styles.textContainer}>
                <Text style={styles.text}>{category.label}</Text>
              </View>
            </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColors.primary,
    height: '100%',
  },
  categoryBtn: {
    width: '40%', 
    height: '20%',
    borderRadius: 10, 
    marginTop: '15%', 
    marginHorizontal: 5,
  },
  textContainer: {
    justifyContent: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '100%',
  },
  image: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    bottom: -30,
  }
});