import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import React from 'react'

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

      {/* "more" button */}
      <TouchableOpacity onPress={() => {
        return Linking.openURL("https://211la.org/resources/search?keyword=Income%20%26%20Employment%20%3E%20Education%20%26%20Training%20%28464%29&landing=1&keyword_hidden=Income%20%26%20Employment%20%3E%20Education%20%26%20Training%20%28464%29&website_categorization=1")
      }}>
        <Text style={styles.text}>More</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    padding: 10,
    paddingTop: 100,
    paddingBottom: 150,
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  text: {
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    color: "blue",
    fontSize: 20,
  }
})