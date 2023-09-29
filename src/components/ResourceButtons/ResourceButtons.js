import { Text, View } from 'react-native'
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
                    navigation.navigate("Appointment Services")
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
                    navigation.navigate("Church Services")
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
                    navigation.navigate("Donation Center")
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
                    navigation.navigate("Education Services")
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
                    navigation.navigate("Forms")
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
                    navigation.navigate("Government Services")
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
                    navigation.navigate("Housing Services")
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
                    navigation.navigate("Legal Services")
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
                    navigation.navigate("LGBTQ+ Services")
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
                    navigation.navigate("Parenting Services")
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
                    navigation.navigate("Utilities Services")
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
