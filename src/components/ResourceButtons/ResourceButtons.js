import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useState } from 'react'
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";


const AppointmentsServicesButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => {
                    setIsFavorited(!isFavorited)
                    console.log(isFavorited)
                }}
            />

            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    navigation.navigate("AppointmentsScreen")
                }}>
                <Text>Appointment Services</Text>
            </TouchableOpacity>
        </View>
    )
}

const ChurchServicesButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const navigation = useNavigation();

    return (
        <View>
            {/* favorite button section */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => {
                    setIsFavorited(!isFavorited)
                    console.log(isFavorited)
                }}
            />

            {/* resource button section */}
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    navigation.navigate("ChurchScreen")
                }}
            >
                <Text>Church Services</Text>
            </TouchableOpacity>
        </View>
    )
}

const DonationCenterButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const navigation = useNavigation();

    return (
        <View>
            {/* favorite button section */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => {
                    setIsFavorited(!isFavorited)
                    console.log(isFavorited)
                }}
            />

            {/* resource button section */}
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    navigation.navigate("DonationScreen")
                }}
            >
                <Text>Donation Center</Text>
            </TouchableOpacity>
        </View>
    )
}

const EducationServicesButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const navigation = useNavigation();

    return (
        <View>
            {/* favorite button section */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => {
                    setIsFavorited(!isFavorited)
                    console.log(isFavorited)
                }}
            />

            {/* resource button section */}
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    navigation.navigate("EducationServicesScreen")
                }}
            >
                <Text>Education Services</Text>
            </TouchableOpacity>
        </View>
    )
}

const EmploymentServicesButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const navigation = useNavigation();

    return (
        <View>
            {/* favorite button section */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => {
                    setIsFavorited(!isFavorited)
                    console.log(isFavorited)
                }}
            />

            {/* resource button section */}
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    navigation.navigate("Income & Employment Services")
                }}
            >
                <Text>Income & Employment</Text>
            </TouchableOpacity>
        </View>
    )
}

const FoodServicesButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const navigation = useNavigation();

    return (
        <View>
            {/* favorite button section */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => {
                    setIsFavorited(!isFavorited)
                    console.log(isFavorited)
                }}
            />

            {/* resource button section */}
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    navigation.navigate("Food Services")
                }}
            >
                <Text>Food Services</Text>
            </TouchableOpacity>
        </View>
    )
}

const FormsServicesButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const navigation = useNavigation();

    return (
        <View>
            {/* favorite button section */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => {
                    setIsFavorited(!isFavorited)
                    console.log(isFavorited)
                }}
            />

            {/* resource button section */}
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    navigation.navigate("FormsServicesScreen")
                }}
            >
                <Text>Forms</Text>
            </TouchableOpacity>
        </View>
    )
}

const GovernmentServicesButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const navigation = useNavigation();

    return (
        <View>
            {/* favorite button section */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => {
                    setIsFavorited(!isFavorited)
                    console.log(isFavorited)
                }}
            />

            {/* resource button section */}
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    navigation.navigate("GovernmentServicesScreen")
                }}
            >
                <Text>Government Services</Text>
            </TouchableOpacity>
        </View>
    )
}

const HealthServicesButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const navigation = useNavigation();

    return (
        <View>
            {/* favorite button section */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => {
                    setIsFavorited(!isFavorited)
                    console.log(isFavorited)
                }}
            />

            {/* resource button section */}
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    navigation.navigate("Health Services")
                }}
            >
                <Text>Health Services</Text>
            </TouchableOpacity>
        </View>
    )
}

const HousingServicesButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const navigation = useNavigation();

    return (
        <View>
            {/* favorite button section */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => {
                    setIsFavorited(!isFavorited)
                    console.log(isFavorited)
                }}
            />

            {/* resource button section */}
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    navigation.navigate("HousingServicesScreen")
                }}
            >
                <Text>Housing Services</Text>
            </TouchableOpacity>
        </View>
    )
}

const LegalServicesButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const navigation = useNavigation();

    return (
        <View>
            {/* favorite button section */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => {
                    setIsFavorited(!isFavorited)
                    console.log(isFavorited)
                }}
            />

            {/* resource button section */}
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    navigation.navigate("LegalServicesScreen")
                }}
            >
                <Text>Legal Services</Text>
            </TouchableOpacity>
        </View>
    )
}

const LGBTQServicesButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const navigation = useNavigation();

    return (
        <View>
            {/* favorite button section */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => {
                    setIsFavorited(!isFavorited)
                    console.log(isFavorited)
                }}
            />

            {/* resource button section */}
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    navigation.navigate("LGBTQServicesScreen")
                }}
            >
                <Text>LGBTQ+</Text>
            </TouchableOpacity>
        </View>
    )
}

const ParentingServicesButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const navigation = useNavigation();

    return (
        <View>
            {/* favorite button section */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => {
                    setIsFavorited(!isFavorited);
                    console.log(isFavorited);
                }}
            />

            {/* resource button section */}
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    navigation.navigate("ParentingServicesScreen")
                }}
            >
                <Text>Parenting</Text>
            </TouchableOpacity>
        </View>
    )
}

const UtilitiesServicesButton = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const navigation = useNavigation();

    return (
        <View>
            {/* favorite button section */}
            <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => {
                    setIsFavorited(!isFavorited)
                    console.log(isFavorited)
                }}
            />

            {/* resource button section */}
            <TouchableOpacity
                style={styles.categoryButton}
                onPress={() => {
                    navigation.navigate("UtilitiesServicesScreen")
                }}
            >
                <Text>Utilities</Text>
            </TouchableOpacity>
        </View>
    )
}

export {
    AppointmentsServicesButton, ChurchServicesButton, DonationCenterButton,
    EducationServicesButton, EmploymentServicesButton, FoodServicesButton, FormsServicesButton,
    GovernmentServicesButton, HealthServicesButton, HousingServicesButton, LegalServicesButton,
    LGBTQServicesButton, ParentingServicesButton, UtilitiesServicesButton
};
