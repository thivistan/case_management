import { StyleSheet } from 'react-native';

const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccf3fb',
    flexDirection: 'column',
  },
  // MostCommonView: {
  //   marginTop: 10,
  //   padding: 15,
  //   paddingStart: 15,
  //   paddingEnd: 15,
  // },
  // SupportGroupView: {
  //   padding: 15,
  //   paddingStart: 15,
  //   paddingEnd: 15,
  // },
  // DonationCenterView: {
  //   padding: 15,
  //   paddingStart: 15,
  //   paddingEnd: 15,
  // },
  // CreateNewFormsView: {
  //   padding: 15,
  //   paddingStart: 15,
  //   paddingEnd: 15,
  // },
});

const textStyles = StyleSheet.create({
  headerText: {
    color: '#00caee',
    fontSize: 20,
    padding: 12,
  },
});

export { viewStyles, textStyles };
