import React from 'react'
import ServiceScreen from '../../../components/ServiceScreen';
import categoryData from '../../../data/categories/employment.json';

export default function EmploymentServicesScreen({ navigation }) {
  return <ServiceScreen navigation={navigation} categoryData={categoryData} />
}