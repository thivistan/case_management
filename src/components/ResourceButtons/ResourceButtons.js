import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

// Not on 211LA.org
const AppointmentsServicesButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => {
          setIsFavorited(!isFavorited);
          console.log(isFavorited);
        }}
      />

      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => {
          navigation.navigate('Appointment Services');
        }}
      >
        <Text>Appointment Services</Text>
      </TouchableOpacity>
    </View>
  );
};

// Not on 211LA.org
const ChurchServicesButton = () => {
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
          navigation.navigate('Church Services');
        }}
      >
        <Text>Church Services</Text>
      </TouchableOpacity>
    </View>
  );
};

const CovidServicesButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => {
          setIsFavorited(!isFavorited);
          console.log(isFavorited);
        }}
      />

      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => {
          navigation.navigate('Covid-19 Info & Supports');
        }}
      >
        <Text>Covid-19 Info & Supports</Text>
      </TouchableOpacity>
    </View>
  );
};

const CrisisServicesButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => {
          setIsFavorited(!isFavorited);
          console.log(isFavorited);
        }}
      />

      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => {
          navigation.navigate('Crisis Services');
        }}
      >
        <Text>Crisis Services</Text>
      </TouchableOpacity>
    </View>
  );
};

const DisabilityServicesButton = () => {
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
          navigation.navigate('Disability Services');
        }}
      >
        <Text>Disability Services</Text>
      </TouchableOpacity>
    </View>
  );
};

// Not on 211LA.org
const DonationCenterButton = () => {
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
          navigation.navigate('Donation Center');
        }}
      >
        <Text>Donation Center</Text>
      </TouchableOpacity>
    </View>
  );
};

const EducationServicesButton = () => {
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
          navigation.navigate('Education Services');
        }}
      >
        <Text>Education Services</Text>
      </TouchableOpacity>
    </View>
  );
};

const EmploymentServicesButton = () => {
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
          navigation.navigate('Income & Employment Services');
        }}
      >
        <Text>Income & Employment</Text>
      </TouchableOpacity>
    </View>
  );
};

const FamilyServicesButton = () => {
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
          navigation.navigate('Family & Children Services');
        }}
      >
        <Text>Family & Children</Text>
      </TouchableOpacity>
    </View>
  );
};

const FoodServicesButton = () => {
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
          navigation.navigate('Food Services');
        }}
      >
        <Text>Food Services</Text>
      </TouchableOpacity>
    </View>
  );
};

// Not on 211LA.org
const FormsServicesButton = () => {
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
          navigation.navigate('Forms');
        }}
      >
        <Text>Forms</Text>
      </TouchableOpacity>
    </View>
  );
};

// Not on 211LA.org
const GovernmentServicesButton = () => {
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
          navigation.navigate('Government Services');
        }}
      >
        <Text>Government Services</Text>
      </TouchableOpacity>
    </View>
  );
};

const HealthServicesButton = () => {
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
          navigation.navigate('Health Services');
        }}
      >
        <Text>Health Services</Text>
      </TouchableOpacity>
    </View>
  );
};

const HousingServicesButton = () => {
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
          navigation.navigate('Housing Services');
        }}
      >
        <Text>Housing Services</Text>
      </TouchableOpacity>
    </View>
  );
};

const ImmigrationServicesButton = () => {
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
          navigation.navigate('Immigration Services');
        }}
      >
        <Text>Immigration</Text>
      </TouchableOpacity>
    </View>
  );
};

const LegalServicesButton = () => {
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
          navigation.navigate('Legal Services');
        }}
      >
        <Text>Legal Services</Text>
      </TouchableOpacity>
    </View>
  );
};

const LGBTQServicesButton = () => {
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
          navigation.navigate('LGBTQ+ Services');
        }}
      >
        <Text>LGBTQ+</Text>
      </TouchableOpacity>
    </View>
  );
};

const MentalHealthServicesButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => {
          setIsFavorited(!isFavorited);
          console.log(isFavorited);
        }}
      />

      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => {
          navigation.navigate('Mental Health Services');
        }}
      >
        <Text>Mental Health Services</Text>
      </TouchableOpacity>
    </View>
  );
};

// Not on 211LA.org
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
          navigation.navigate('Parenting Services');
        }}
      >
        <Text>Parenting</Text>
      </TouchableOpacity>
    </View>
  );
};

const ReEntryServicesButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => {
          setIsFavorited(!isFavorited);
          console.log(isFavorited);
        }}
      />

      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => {
          navigation.navigate('Re-Entry Services');
        }}
      >
        <Text>Re-Entry Services</Text>
      </TouchableOpacity>
    </View>
  );
};

const SeniorServicesButton = () => {
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
          navigation.navigate('Seniors Services');
        }}
      >
        <Text>Seniors + Older Adults</Text>
      </TouchableOpacity>
    </View>
  );
};

const TransporationServicesButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => {
          setIsFavorited(!isFavorited);
          console.log(isFavorited);
        }}
      />

      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => {
          navigation.navigate('Transportation Services');
        }}
      >
        <Text>Transportation Services</Text>
      </TouchableOpacity>
    </View>
  );
};

const UtilitiesServicesButton = () => {
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
          navigation.navigate('Utilities Services');
        }}
      >
        <Text>Utilities</Text>
      </TouchableOpacity>
    </View>
  );
};

const VeteranServicesButton = () => {
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
          navigation.navigate('Veteran Services');
        }}
      >
        <Text>Veteran Services</Text>
      </TouchableOpacity>
    </View>
  );
};

const YouthServicesButton = () => {
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
          navigation.navigate('Youth Services');
        }}
      >
        <Text>Youth Services</Text>
      </TouchableOpacity>
    </View>
  );
};

export {
  AppointmentsServicesButton,
  ChurchServicesButton,
  CovidServicesButton,
  CrisisServicesButton,
  DisabilityServicesButton,
  DonationCenterButton,
  EducationServicesButton,
  EmploymentServicesButton,
  FamilyServicesButton,
  FoodServicesButton,
  FormsServicesButton,
  GovernmentServicesButton,
  HealthServicesButton,
  HousingServicesButton,
  ImmigrationServicesButton,
  LegalServicesButton,
  LGBTQServicesButton,
  MentalHealthServicesButton,
  ParentingServicesButton,
  ReEntryServicesButton,
  SeniorServicesButton,
  TransporationServicesButton,
  UtilitiesServicesButton,
  VeteranServicesButton,
  YouthServicesButton,
};
