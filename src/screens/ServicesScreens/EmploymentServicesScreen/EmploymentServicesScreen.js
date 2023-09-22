import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function EmploymentServicesScreen({ navigation }) {
  const links = [
    {
      title: "Job/Employment Search",
      image: "https://211la.org/sites/default/files/styles/subcategory_resource_600_x_351/public/2020-03/three%20job%20seekers%20standing%20on%20a%20balcony.jpg?itok=Brau2Lha",
      link: "https://211la.org/resources/search?keyword=Income%20%26%20Employment%20%3E%20Job/Employment%20Search%20%2849%29&landing=1&keyword_hidden=Income%20%26%20Employment%20%3E%20Job/Employment%20Search%20%2849%29&website_categorization=1"
    },
    {
      title: "Employment Supports",
      image: "https://211la.org/sites/default/files/styles/subcategory_resource_600_x_351/public/2020-02/LA%20Skyline%20Sunset%2057927400_m.jpg?itok=xHz_6_gE",
      link: "https://211la.org/resources/search?keyword=Income%20%26%20Employment%20%3E%20Employment%20Supports%20%2849%29&landing=1&keyword_hidden=Income%20%26%20Employment%20%3E%20Employment%20Supports%20%2849%29&website_categorization=1"
    },
    {
      title: "Benefits & Public Assistance",
      image: "https://211la.org/sites/default/files/styles/subcategory_resource_600_x_351/public/2020-02/Food%20benefit%20programs_0.jpg?itok=8aeVvzSJ",
      link: "https://211la.org/resources/search?keyword=Income%20%26%20Employment%20%3E%20Benefits%20%26%20Public%20Assistance%20%2867%29&landing=1&keyword_hidden=Income%20%26%20Employment%20%3E%20Benefits%20%26%20Public%20Assistance%20%2867%29&website_categorization=1"
    },
    {
      title: "Income Assistance/Discount Programs",
      image: "https://211la.org/sites/default/files/styles/subcategory_resource_600_x_351/public/2020-03/electrical%20guage%20kilowatt.jpg?itok=FQYLET8L",
      link: "https://211la.org/resources/search?keyword=Income%20%26%20Employment%20%3E%20Income%20Assistance/Discount%20Programs%20%2856%29&landing=1&keyword_hidden=Income%20%26%20Employment%20%3E%20Income%20Assistance/Discount%20Programs%20%2856%29&website_categorization=1"
    },
    {
      title: "Financial Health",
      image: "https://211la.org/sites/default/files/styles/subcategory_resource_600_x_351/public/2020-02/Health%20care%20insurance%20options%2081895941_s.jpg?itok=mCuuRLKF",
      link: "https://211la.org/resources/search?keyword=Income%20%26%20Employment%20%3E%20Financial%20Health%20%2856%29&landing=1&keyword_hidden=Income%20%26%20Employment%20%3E%20Financial%20Health%20%2856%29&website_categorization=1"
    },
    {
      title: "Education & Training",
      image: "https://211la.org/sites/default/files/styles/subcategory_resource_600_x_351/public/2020-02/Education%20-%20Alternative%20education%20-%20technology%20computer%20adult%20woman%2050076647_s.jpg?itok=o6RH3kO5",
    },
  ]

  return (
    <ScrollView style={styles.outsideContainer}>
      <View style={styles.mainContainer}>
        {links.map(item => (
          <TouchableOpacity
            style={{ width: '50%' }}
            onPress={() => {
              if (item.link) {
                return Linking.openURL(item.link)
              } else {
                navigation.navigate("Education And Training Screen")
              }
            }}>
            <View style={styles.itemContainer}>
              <View style={styles.imageMask}>
                <Image
                  style={styles.image}
                  source={{ uri: item.image }}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  outsideContainer: {
    backgroundColor: "rgba(106, 207, 238, 0.4)"
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20
  },
  textContainer: {
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 140,
    borderRadius: 10,
    opacity: 1
  },
  imageMask: {
    width: 150,
    height: 140,
    borderRadius: 10,
    opacity: 0.67,
    backgroundColor: "black",
  },
  textContainer: {
    bottom: 50
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    bottom: 15,
    width: 140
  }
});