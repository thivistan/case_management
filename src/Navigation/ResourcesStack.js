import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppointmentsScreen from '../screens/ServicesScreens/AppointmentsScreen/AppointmentsScreen.js';
import ChurchServicesScreen from '../screens/ServicesScreens/ChurchServicesScreen/ChurchServicesScreen.js';
import CovidServicesScreen from '../screens/ServicesScreens/CovidServicesScreen/CovidServicesScreen.js';
import CrisisServicesScreen from '../screens/ServicesScreens/CrisisServicesScreen/CrisisServicesScreen.js';
import DisabilityServicesScreen from '../screens/ServicesScreens/DisabilityServicesScreen/DisabilityServicesScreen.js';
import DonationScreen from '../screens/ServicesScreens/DonationScreen/DonationScreen';
import EducationServicesScreen from '../screens/ServicesScreens/EducationServicesScreen/EducationServicesScreen';
import EmploymentServicesScreen from '../screens/ServicesScreens/EmploymentServicesScreen/EmploymentServicesScreen';
import FamilyServicesScreen from '../screens/ServicesScreens/FamilyServicesScreen/FamilyServicesScreen.js';
import FoodServicesScreen from '../screens/ServicesScreens/FoodServicesScreen/FoodServicesScreen';
import FormsServicesScreen from '../screens/ServicesScreens/FormsServicesScreen/FormsServicesScreen.js';
import GovernmentServicesScreen from '../screens/ServicesScreens/GovernmentServicesScreen/GovernmentServicesScreen';
import HealthServicesScreen from '../screens/ServicesScreens/HealthServicesScreen/HealthServicesScreen';
import HousingServicesScreen from '../screens/ServicesScreens/HousingServicesScreen/HousingServicesScreen';
import ImmigrationServicesScreen from '../screens/ServicesScreens/ImmigrationServicesScreen/ImmigrationServicesScreen.js';
import LegalServicesScreen from '../screens/ServicesScreens/LegalServicesScreen/LegalServicesScreen';
import LGBTQServicesScreen from '../screens/ServicesScreens/LGBTQServicesScreen/LGBTQServicesScreen';
import MentalHealthServicesScreen from '../screens/ServicesScreens/MentalHealthServicesScreen/MentalHealthServicesScreen.js';
import ParentingServicesScreen from '../screens/ServicesScreens/ParentingServicesScreen/ParentingServicesScreen';
import ReEntryServicesScreen from '../screens/ServicesScreens/ReEntryServicesScreen/ReEntryServicesScreen.js';
import SeniorServicesScreen from '../screens/ServicesScreens/SeniorServicesScreen/SeniorServicesScreen.js';
import TransportationServicesScreen from '../screens/ServicesScreens/TransportationServicesScreen/TransportationServicesScreen.js';
import UtilitiesServicesScreen from '../screens/ServicesScreens/UtilitiesServicesScreen/UtilitiesServicesScreen';
import VeteranServicesScreen from '../screens/ServicesScreens/VeteranServicesScreen/VeteranServicesScreen.js';
import YouthServicesScreen from '../screens/ServicesScreens/YouthServicesScreen/YouthServicesScreen.js';

import ResourcesScreen from '../screens/MainScreens/ResourcesScreen/ResourcesScreen.js';
import MainStack from './MainStack.js';

import EducationAndTrainingScreen from '../screens/ServicesScreens/EmploymentServicesScreen/EducationAndTrainingScreen.js';

const Stack = createNativeStackNavigator();

export default function ResourcesStack() {
  return (
    <Stack.Navigator id="ResourcesStack" initialRouteName="Resources">
      <Stack.Screen name="Resources" component={ResourcesScreen} />

      <Stack.Screen name="Appointment Services" component={HousingServicesScreen}></Stack.Screen>
      <Stack.Screen name="Church Services" component={ChurchServicesScreen}></Stack.Screen>
      <Stack.Screen name="Covid-19 Info & Supports" component={CovidServicesScreen}></Stack.Screen>
      <Stack.Screen name="Crisis Services" component={CrisisServicesScreen}></Stack.Screen>
      <Stack.Screen name="Disability Services" component={DisabilityServicesScreen}></Stack.Screen>
      <Stack.Screen name="Donation Center" component={DonationScreen}></Stack.Screen>
      <Stack.Screen name="Education Services" component={EducationServicesScreen}></Stack.Screen>
      <Stack.Screen name="Family Services" component={FamilyServicesScreen}></Stack.Screen>
      <Stack.Screen name="Food Services" component={FoodServicesScreen}></Stack.Screen>
      <Stack.Screen name="Forms" component={FormsServicesScreen}></Stack.Screen>
      <Stack.Screen name="Government Services" component={GovernmentServicesScreen}></Stack.Screen>
      <Stack.Screen name="Health Services" component={HealthServicesScreen}></Stack.Screen>
      <Stack.Screen name="Housing Services" component={AppointmentsScreen}></Stack.Screen>
      <Stack.Screen
        name="Immigration Services"
        component={ImmigrationServicesScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="Income & Employment Services"
        component={EmploymentServicesScreen}
      ></Stack.Screen>
      <Stack.Screen name="Legal Services" component={LegalServicesScreen}></Stack.Screen>
      <Stack.Screen name="LGBTQ+ Services" component={LGBTQServicesScreen}></Stack.Screen>
      <Stack.Screen
        name="Mental Health Services"
        component={MentalHealthServicesScreen}
      ></Stack.Screen>
      <Stack.Screen name="Parenting Services" component={ParentingServicesScreen}></Stack.Screen>
      <Stack.Screen name="Re-entry Services" component={ReEntryServicesScreen}></Stack.Screen>
      <Stack.Screen name="Senior Services" component={SeniorServicesScreen}></Stack.Screen>
      <Stack.Screen
        name="Transportation Services"
        component={TransportationServicesScreen}
      ></Stack.Screen>
      <Stack.Screen name="Utilities Services" component={UtilitiesServicesScreen}></Stack.Screen>
      <Stack.Screen name="Veteran Services" component={VeteranServicesScreen}></Stack.Screen>
      <Stack.Screen name="Youth Services" component={YouthServicesScreen}></Stack.Screen>

      <Stack.Screen name="Home" component={MainStack}></Stack.Screen>

      <Stack.Screen name="Education & Training" component={EducationAndTrainingScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
