import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import React from 'react'
import ExternalLinkButton from '../../../components/ExternalLinkButton';
import { colors, backgroundColors } from '../../../global';

// constants

export default function EducationAndTrainingScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={{ paddingTop: 20 }}>
        {/* job training */}
        <TouchableOpacity 
          onPress={() => {return Linking.openURL("https://www.google.com/")}}
          style={styles.secondaryButton}
        >
          <Text style={styles.secondaryButtonText}>Job And Workforce Training</Text>
        </TouchableOpacity>

        {/* workshops */}
        <View style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Workshops for Resumes & Interviews</Text>
        </View>

        {/* youtube page */}
        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={() => {
            const channelId = "UCe1REgTuVYQgaXkRzA6BSCg"
            Linking.canOpenURL('vnd.youtube://channel/' + channelId).then(supported => {
              if (supported) {
                return Linking.openURL('vnd.youtube://channel/' + channelId);
              } else {
                return Linking.openURL('https://www.youtube.com/channel/' + channelId);
              }
            });
        }}>
          <Text style={styles.secondaryButtonText}>Thaddeus Youtube Page</Text>
        </TouchableOpacity >

        {/* Forms */}
        <View style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Forms, Handouts, PDFs</Text>
        </View>
      </View>

      <View>

        {/* "Find more education resources" button */}
        <ExternalLinkButton
          text="Find More Education/Training Resources"
          link="https://211la.org/resources/search?keyword=Income%20%26%20Employment%20%3E%20Education%20%26%20Training%20%28464%29&landing=1&keyword_hidden=Income%20%26%20Employment%20%3E%20Education%20%26%20Training%20%28464%29&website_categorization=1"
        />

        {/* "See all income/employment" button */}
        <ExternalLinkButton
          text="See All Income/Employment Resources"
          link="https://211la.org/resources/search?keyword=Income%20%26%20Employment%20%3E%20Education%20%26%20Training%20%28464%29&landing=1&keyword_hidden=Income%20%26%20Employment%20%3E%20Education%20%26%20Training%20%28464%29&website_categorization=1"
        />
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
    backgroundColor: backgroundColors.primary
  },
  text: {
    padding: 10,
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
  },
  button: {
    backgroundColor: "rgb(81, 168, 194)",
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
  secondaryButton: {
    backgroundColor: "white",
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30
  },
  secondaryButtonText: {
    color: colors.primary,
    padding: 10,
    fontWeight: "bold",
    fontSize: 13,
    display: "flex",
    textAlign: "center",
    paddingBottom: 11
  },
  image: {
    height: 20,
    width: 20,
  }
})