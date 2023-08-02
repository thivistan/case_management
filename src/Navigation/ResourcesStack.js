import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppointmentsScreen from '../screens/ServicesScreens/AppointmentsScreen/AppointmentsScreen';
import EducationServicesScreen from '../screens/ServicesScreens/EducationServicesScreen/EducationServicesScreen';
import FormsServicesScreen from '../screens/ServicesScreens/FormsServicesScreen/FormsServicesScreen';
import HousingServicesScreen from '../screens/ServicesScreens/HousingServicesScreen/HousingServicesScreen';
import ParentingServicesScreen from '../screens/ServicesScreens/ParentingServicesScreen/ParentingServicesScreen';
import ChurchServicesScreen from '../screens/ServicesScreens/ChurchServicesScreen/ChurchServicesScreen';
import EmploymeentServicesScreen from '../screens/ServicesScreens/EmploymentServicesScreen/EmploymentServicesScreen';
import GovernmentServicesScreen from '../screens/ServicesScreens/GovernmentServicesScreen/GovernmentServicesScreen';
import LegalServicesScreen from '../screens/ServicesScreens/LegalServicesScreen/LegalServicesScreen';
import UtilitiesServicesScreen from '../screens/ServicesScreens/UtilitiesServicesScreen/UtilitiesServicesScreen';
import DonationScreen from '../screens/ServicesScreens/DonationScreen/DonationScreen';
import FoodServicesScreen from '../screens/ServicesScreens/FormsServicesScreen/FormsServicesScreen';
import HealthServicesScreen from '../screens/ServicesScreens/HealthServicesScreen/HealthServicesScreen';
import LGBTQServicesScreen from '../screens/ServicesScreens/LGBTQServicesScreen/LGBTQServicesScreen';

const Stack = createNativeStackNavigator();

export default function ResourcesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Housing Services" component={AppointmentsScreen}></Stack.Screen>
      <Stack.Screen name="Appointment Services" component={HousingServicesScreen}></Stack.Screen>
      <Stack.Screen name="Education Services" component={EducationServicesScreen}></Stack.Screen>
      <Stack.Screen name="Forms" component={FormsServicesScreen}></Stack.Screen>
      <Stack.Screen name="Parenting Services" component={ParentingServicesScreen}></Stack.Screen>
      <Stack.Screen name="Church Services" component={ChurchServicesScreen}></Stack.Screen>
      <Stack.Screen name="Employment Services" component={EmploymeentServicesScreen}></Stack.Screen>
      <Stack.Screen name="Government Services" component={GovernmentServicesScreen}></Stack.Screen>
      <Stack.Screen name="Legal Services" component={LegalServicesScreen}></Stack.Screen>
      <Stack.Screen name="Utilities Services" component={UtilitiesServicesScreen}></Stack.Screen>
      <Stack.Screen name="Donation Center" component={DonationScreen}></Stack.Screen>
      <Stack.Screen name="Food Services" component={FoodServicesScreen}></Stack.Screen>
      <Stack.Screen name="Health Services" component={HealthServicesScreen}></Stack.Screen>
      <Stack.Screen name="LGBTQ+ Services" component={LGBTQServicesScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
