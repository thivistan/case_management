import React from 'react';
import ServiceScreen from '../../../components/ServiceScreen';
import categories from '../../../data/categories/healthcare.json'

export default function HealthServicesScreen({ route, navigation }) {
  return <ServiceScreen route={route} navigation={navigation} categories={categories} />
}