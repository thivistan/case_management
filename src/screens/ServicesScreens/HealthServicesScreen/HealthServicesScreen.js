import React, { useState } from 'react';
import ServiceScreen from '../../../components/ServiceScreen';
import categoryData from '../../../data/categories/healthcare.json'

export default function HealthServicesScreen({ navigation }) {
  return <ServiceScreen navigation={navigation} categoryData={categoryData}/>
}