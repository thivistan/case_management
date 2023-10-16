import donationData from './categories/donation.json';
import employmentData from './categories/employment.json';
import healthData from './categories/healthcare.json';
import legalData from './categories/legal.json';
import housingData from './categories/housing.json'

/**
 *  An object containing metadata for the resources.
 *  
 *  `"resourceName": { data, url, iconName }`
 */
export default {
    "Appointment Services": {

        iconName: "calendar-outline"
    },
    "Church Services": {

        iconName: "book-outline"
    },
    "Covid-19 Info & Supports": {

        iconName: "medkit-outline"
    },
    "Crisis Services": {

        iconName: "warning-outline"
    },
    "Disability Services": {

        iconName: ""
    },
    "Donation Center": {
        data: donationData,
        iconName: "heart-outline"
    },
    "Education Services": {

        iconName: "school-outline"
    },
    "Family Services": {

        iconName: "home-outline"
    },
    "Food Services": {

        iconName: "restaurant-outline"
    },
    "Forms": {

        iconName: "clipboard-outline"
    },
    "Government Services": {

        iconName: "globe-outline"
    },
    "Health Services": {
        data: healthData,
        url: "https://211la.org/resources/subcategory/healthcare",
        iconName: "pulse-outline"
    },
    "Housing Services": {
        data: housingData, 
        url:"https://211la.org/resources/subcategory/housing", 
        iconName: "home-outline"
    },
    "Immigration Services": {

        iconName: "airplane-outline"
    },
    "Income & Employment Services": {
        data: employmentData,
        iconName: "cash-outline"
    },
    "Legal Services": {
        data: legalData,
        url: "https://211la.org/resources/subcategory/legal-services",
        iconName: "briefcase-outline"
    },
    "LGBTQ+ Services": {

        iconName: ""
    },
    "Mental Health Services": {

        iconName: "people-outline"
    },
    "Parenting Services": {

        iconName: "person-add-outline"
    },
    "Re-entry Services": {

        iconName: "enter-outline"
    },
    "Senior Services": {

        iconName: "person-outline"
    },
    "Transportation Services": {

        iconName: "car-outline"
    },
    "Utilities Services": {

        iconName: "flash-outline"
    },
    "Veteran Services": {

        iconName: "ribbon-outline"
    },
    "Youth Services": {

        iconName: "happy-outline"
    },

    // Healthcare services
    "Resource List": {

        iconName: "school-outline"
    },

    // Income & Employment services
    "Education & Training": {

        iconName: "school-outline"
    }
};