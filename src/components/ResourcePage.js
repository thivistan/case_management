import { View, Text, Image, SafeAreaView, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import HorizontalScoll from './HorizontalScoll';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './Header'
import { useNavigation } from '@react-navigation/native';
import UserLocation from './UserLocation';
//Test data, will be replaced with data from either database or csv file
const resources = [
  {
    title: 'Resource 1',
    image: 'https://source.unsplash.com/random/150x150',
    url: 'https://www.example.com/card1',
  },
  {
    title: 'Resource 2',
    image: 'https://source.unsplash.com/random/150x150',
    url: 'https://www.example.com/card2',
  },
  {
    title: 'Resource 3',
    image: 'https://source.unsplash.com/random/150x150',
    url: 'https://www.example.com/card3',
  },
  {
    title: 'Resource 4',
    image: 'https://source.unsplash.com/random/150x150',
    url: 'https://www.example.com/card3',
  }
];


const ResourcePage = (props) => {
  const navigation = useNavigation();
  return (
      <SafeAreaView style={{ flex: 1 , backgroundColor: '#fff'}}>
        <ScrollView >
        <Header
          navigation={navigation} 
          resourceName='Title'
          leftComponent={<Ionicons name="menu-outline" size={24} color="white" onPress={() => navigation.openDrawer()} />}
          centerComponent={{ text: 'Resource Page', style: { color: '#fff' } }}
        />
          <View style={styles.hr}/>
        <HorizontalScoll resources={resources} header="Nearest"/>
        <View style={styles.hr}/>
        <HorizontalScoll resources={resources} header="Recommended"/>
        <View style={styles.hr}/>
        
      </ScrollView>
      <View style={styles.logo}>
          <Image source={require('../assets/images/thaddeus_logo.jpg')} style={{ width:'100%', height:100, backgroundColor:"white"}} />
      </View>
      </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  
  },
  logo : {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-end'
  }
});
export default ResourcePage