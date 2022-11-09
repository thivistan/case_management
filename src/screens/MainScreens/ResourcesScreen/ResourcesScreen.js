import React, { useState } from "react";
import { styles } from "./styles";
import {
    AppointmentsServicesButton, ChurchServicesButton, DonationCenterButton,
    EducationServicesButton, EmploymentServicesButton, FoodServicesButton, FormsServicesButton,
    GovernmentServicesButton, HealthServicesButton, HousingServicesButton, LegalServicesButton,
    LGBTQServicesButton, ParentingServicesButton, UtilitiesServicesButton
} from "../../../components/ResourceButtons/ResourceButtons";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { FlatList, Keyboard, KeyboardAvoidingView, Text, Touchable, View } from "react-native";
import { color } from "react-native-reanimated";
import { useFonts } from 'expo-font';

export default function ResourcesScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [fontsLoaded] = useFonts({
        'Montserrat-Black': require('../../../assets/fonts/Montserrat-Black.ttf'),
    });

    if (!fontsLoaded) {
        return null
    };

    // const resourceButtonRenderItem = ({ item }) => {
    //     if (item.favorited) {
    //         <TouchableOpacity style={styles.categoryButton}>
    //             <Text>{item.buttonName}</Text>
    //         </TouchableOpacity>
    //     }
    //     else {
    //         <></>
    //     }
    // }

    const searchForUserQuery = () => {
        /** TO-DO
         * search for pages
         * search for resources/programs
         * search for employers
         */
        console.log(searchQuery);
    }

    return (
        <KeyboardAvoidingView style={styles.mainContainer}>
            <View style={styles.elementContainer}>
                <View style={styles.searchBarContainer}>
                    <TextInput
                        style={styles.searchBar}
                        placeholder='   Search...'
                        font
                    >
                    </TextInput>
                </View>

                <View style={styles.favoritesContainer}>
                    <Text style={{
                        color: '#00BFFF',
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingBottom: 10,
                        fontFamily: 'Montserrat-Black',
                    }}>Favorites</Text>
                    <View style={styles.favoriteCategoriesContainer}>
                        <FlatList
                            horizontal={true}
                        //data={ }
                        //renderItem={( {item, index}) => {}}
                        >
                        </FlatList>
                    </View>
                </View>

                {/* categories section */}
                <View style={styles.categoriesContainer}>
                    <Text style={{
                        color: '#00BFFF',
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingBottom: 10,
                        fontFamily: 'Montserrat-Black',
                    }}>All Categories</Text>

                    <ScrollView style={styles.categoriesScrollView}>
                        <View style={styles.categoriesColContainer}>
                            {/* col 1 */}
                            <View style={styles.categoryButtonCol}>
                                <AppointmentsServicesButton />
                                <EducationServicesButton />
                                <FormsServicesButton />
                                <HousingServicesButton />
                                <ParentingServicesButton />
                            </View>
                            {/* col 2 */}
                            <View style={styles.categoryButtonCol}>
                                <ChurchServicesButton />
                                <EmploymentServicesButton />
                                <GovernmentServicesButton />
                                <LegalServicesButton />
                                <UtilitiesServicesButton />
                            </View>
                            {/* col 3 */}
                            <View style={styles.categoryButtonCol}>
                                <DonationCenterButton />
                                <FoodServicesButton />
                                <HealthServicesButton />
                                <LGBTQServicesButton />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
