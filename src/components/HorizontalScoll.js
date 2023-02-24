import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import Card from './ResourceCard'

//This component will act has the horizontal scroll list and within this component we are
//using another component "Card" to account for each of the resource links 
const HorizontalSrcoll = (props) => {
  return (
  <View testID="resources" style={styles.scrollContainer}>
    <Text style={styles.resourceText}>{props.header}</Text>
    <ScrollView horizontal={true}>
    {/* .map() will loop through each object within resources and we're keeping an index for good practice */}
      {props.resources.map((resources, index) => (
        <Card key={index} image={resources.image} title={resources.title} url={resources.url} />
      ))}
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
    resourceText: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    scrollContainer: {
      height: 200,
      paddingHorizontal: 20
    },
    hr: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      marginVertical: 10
    }
  });

export default HorizontalScroll