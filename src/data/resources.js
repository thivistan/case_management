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
import EducationAndTrainingScreen from '../screens/ServicesScreens/EmploymentServicesScreen/EducationAndTrainingScreen.js';

import ResourcesListScreen from '../components/ResourcesListScreen.js';

const resources = {
    "Appointment Services": {
        component: AppointmentsScreen,
        iconName: "calendar-outline"
    },
    "Church Services": {
        component: ChurchServicesScreen,
        iconName: "book-outline"
    },
    "Covid-19 Info & Supports": {
        component: CovidServicesScreen,
        iconName: "medkit-outline"
    },
    "Crisis Services": {
        component: CrisisServicesScreen,
        iconName: "warning-outline"
    },
    "Disability Services": {
        component: DisabilityServicesScreen,
        iconName: ""
    },
    "Donation Center": {
        component: DonationScreen,
        iconName: "heart-outline"
    },
    "Education Services": {
        component: EducationServicesScreen,
        iconName: "school-outline"
    },
    "Family Services": {
        component: FamilyServicesScreen,
        iconName: "home-outline"
    },
    "Food Services": {
        component: FoodServicesScreen,
        iconName: "restaurant-outline"
    },
    "Forms": {
        component: FormsServicesScreen,
        iconName: "clipboard-outline"
    },
    "Government Services": {
        component: GovernmentServicesScreen,
        iconName: "globe-outline"
    },
    "Health Services": {
        component: HealthServicesScreen,
        url: "https://211la.org/resources/subcategory/healthcare",
        iconName: "pulse-outline"
    },
    "Housing Services": {
        component: HousingServicesScreen,
        iconName: "home-outline"
    },
    "Immigration Services": {
        component: ImmigrationServicesScreen,
        iconName: "airplane-outline"
    },
    "Income & Employment Services": {
        component: EmploymentServicesScreen,
        iconName: "cash-outline"
    },
    "Legal Services": {
        component: LegalServicesScreen,
        url: "https://211la.org/resources/subcategory/legal-services",
        iconName: "briefcase-outline"
    },
    "LGBTQ+ Services": {
        component: LGBTQServicesScreen,
        iconName: ""
    },
    "Mental Health Services": {
        component: MentalHealthServicesScreen,
        iconName: "people-outline"
    },
    "Parenting Services": {
        component: ParentingServicesScreen,
        iconName: "person-add-outline"
    },
    "Re-entry Services": {
        component: ReEntryServicesScreen,
        iconName: "enter-outline"
    },
    "Senior Services": {
        component: SeniorServicesScreen,
        iconName: "person-outline"
    },
    "Transportation Services": {
        component: TransportationServicesScreen,
        iconName: "car-outline"
    },
    "Utilities Services": {
        component: UtilitiesServicesScreen,
        iconName: "flash-outline"
    },
    "Veteran Services": {
        component: VeteranServicesScreen,
        iconName: "ribbon-outline"
    },
    "Youth Services": {
        component: YouthServicesScreen,
        iconName: "happy-outline"
    },

    // Healthcare services
    "Resource List": {
        component: ResourcesListScreen,
        iconName: "school-outline"
    },

    // Income & Employment services
    "Education & Training": {
        component: EducationAndTrainingScreen,
        iconName: "school-outline"
    }
};


export default resources;