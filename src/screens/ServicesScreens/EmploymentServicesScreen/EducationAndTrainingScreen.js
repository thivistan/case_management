import { View, Text, TouchableOpacity, Linking, StyleSheet, Image } from 'react-native'
import React from 'react'
import ExternalLink from "../../../assets/images/externalLink.png";

// constants
const colorPrimary = "rgb(106, 207, 238)"

export default function EducationAndTrainingScreen() {
  return (
    <View style={styles.mainContainer}>
      <View>

        {/* job training */}
        <TouchableOpacity onPress={() => {
          return Linking.openURL("https://www.google.com/")
        }}>
          <Text style={styles.text}>Job And Workforce Training</Text>
        </TouchableOpacity>

        {/* workshops */}
        <Text style={styles.text}>Workshops for Resumes & Interviews</Text>

        {/* youtube page */}
        <TouchableOpacity onPress={() => {
          const channelId = "UCe1REgTuVYQgaXkRzA6BSCg"
          Linking.canOpenURL('vnd.youtube://channel/' + channelId).then(supported => {
            if (supported) {
              return Linking.openURL('vnd.youtube://channel/' + channelId);
            } else {
              return Linking.openURL('https://www.youtube.com/channel/' + channelId);
            }
          });
        }}>
          <Text style={styles.text}>Thaddeus Youtube Page</Text>
        </TouchableOpacity>

        {/* Forms */}
        <Text style={styles.text}>Forms, Handouts, PDFs</Text>
      </View>

      <View>

        {/* "Find more education resources" button */}
        <TouchableOpacity onPress={() => {
          return Linking.openURL("https://211la.org/resources/search?keyword=Income%20%26%20Employment%20%3E%20Education%20%26%20Training%20%28464%29&landing=1&keyword_hidden=Income%20%26%20Employment%20%3E%20Education%20%26%20Training%20%28464%29&website_categorization=1")
        }} style={styles.button}>
          <Text style={styles.buttonText}>Find More Education/Training Resources {" "}
            <Image
              style={styles.image}
              source={ExternalLink}
            />
          </Text>
        </TouchableOpacity>

        {/* "See all income/employment" button */}
        <TouchableOpacity onPress={() => {
          return Linking.openURL("https://211la.org/resources/search?keyword=Income%20%26%20Employment%20%3E%20Education%20%26%20Training%20%28464%29&landing=1&keyword_hidden=Income%20%26%20Employment%20%3E%20Education%20%26%20Training%20%28464%29&website_categorization=1")
        }} style={styles.button}>
          <Text style={styles.buttonText}>See All Income/Employment Resources {" "}
            <Image
              style={styles.image}
              source={ExternalLink}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    padding: 10,
    paddingHorizontal: 30,
    justifyContent: "space-between",
    height: "100%",
  },
  text: {
    padding: 10,
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
  },
  button: {
    backgroundColor: colorPrimary,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30
  },
  buttonText: {
    color: "white",
    padding: 10,
    fontWeight: "bold",
    fontSize: 13,
    display: "flex",
    textAlign: "center",
    paddingBottom: 15
  },
  image: {
    height: 20,
    width: 20,
  }
})