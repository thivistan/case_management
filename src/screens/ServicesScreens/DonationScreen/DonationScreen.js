import React, { useState } from 'react';
import ServiceScreen from '../../../components/ServiceScreen';
import categoryData from '../../../data/categories/donation.json'

export default function DonationScreen({ navigation }) {
  return <ServiceScreen navigation={navigation} categoryData={categoryData}/>
}