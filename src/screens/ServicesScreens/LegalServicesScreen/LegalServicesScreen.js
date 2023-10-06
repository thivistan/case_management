import React from 'react';
import ServiceScreen from '../../../components/ServiceScreen';
import categories from '../../../data/categories/legal.json'

export default function LegalServicesScreen({ route, navigation }) {
  return <ServiceScreen route={route} navigation={navigation} categories={categories} />
}