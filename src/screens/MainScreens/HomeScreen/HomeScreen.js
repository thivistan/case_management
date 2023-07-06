import React from 'react';

import { StylesSheet, Text, View, Image } from 'react-native';




export default function HomeScreen() {

  return (

    <View

      style={{

        flex: 1,

        alignItems: 'center',

        //justifyContent: 'center',

        backgroundColor: 'lightblue',

      }}

    >

      <Image

        source={require('../../../assets/images/thaddeus_logo.jpg')}

        style={{ width: 200, height: 100, resizeMode: 'contain' }}

      />




      <Text style={{ fontSize: 12, fontWeight: 'bold' }}>

        RESTORE HOPE, INSPIRE GROWTH, and EMPOWER GIRLS & WOMEN

      </Text>

    </View>

  );

}

//     const [appointments, setAppointments] = useState([
//         { date: '10/06/2022', time: '10:30 AM', location: 'Thaddeus Resource Center', key: '1' },
//         { date: '10/06/2022', time: '10:30 AM', location: 'Thaddeus Resource Center', key: '2' },
//         { date: '10/06/2022', time: '10:30 AM', location: 'Thaddeus Resource Center', key: '3' }
//     ]);
//     const [fontsLoaded] = useFonts({
//         'Montserrat-Black': require('../../../assets/fonts/Montserrat-Black.ttf'),
//     });

//     if (!fontsLoaded) {
//         return null
//     };

//     return (
//         <SafeAreaView style={{ flex: 1, paddingHorizontal: 25, backgroundColor: 'white', flexDirection: 'column' }}>
//             <View style={{
//                 flex: 1,
//                 justifyContent: 'center',
//                 top: 0,
//                 position: 'absolute',
//                 paddingHorizontal: 18
//             }}>
//                 <Text
//                     style={{
//                         fontFamily: 'Montserrat-Black',
//                         fontSize: 16,
//                     }}>
//                     Upcoming Appointments...
//                 </Text>

//                 <View style={{
//                     flex: 1,
//                     backgroundColor: '#00BFFF',
//                     marginTop: 20,
//                     width: '135%',
//                     borderRadius: 25,
//                 }}>
//                     <ScrollView>
//                         {appointments.map(item => (
//                             <View style={{ marginTop: 10, marginBottom: 10, alignItems: 'center' }} key={item.key}>
//                                 <Text style={{
//                                     fontSize: 10,
//                                     fontWeight: '600',
//                                     color: 'white',
//                                     fontFamily: 'Montserrat-Black',
//                                 }}>{item.date} - {item.time} - {item.location}</Text>
//                             </View>
//                         ))}
//                     </ScrollView>
//                 </View>
//             </View>

//         </SafeAreaView >
//     )
// }

// const styles = StyleSheet.create({
//     card: {
//         flex: 1,
//         backgroundColor: '#00BFFF',
//         marginTop: 20,
//         width: '163%',
//         borderRadius: 35,
//     },
//     shadowProp: {
//         shadowColor: 'black',
//         shadowOpacity: 1,
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 5,
//         elevation: 50,
//     },
// });