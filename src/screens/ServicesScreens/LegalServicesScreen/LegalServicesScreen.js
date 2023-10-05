import React, { useState } from 'react';
import ServiceScreen from '../../../components/ServiceScreen';
import categoryData from '../../../data/categories/legal.json'

export default function LegalServicesScreen({ navigation }) {
  return <ServiceScreen navigation={navigation} categoryData={categoryData}/>
}