import {StyleSheet} from 'react-native';

export const createPlantTypeStyles = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: darkMode ? '#1c1c1c' : '#fff',
      flex: 1,
      padding: 16,
    },
    itemStyle: {
      padding: 16,
      backgroundColor: darkMode ? '#333' : '#eee',
      marginVertical: 8,
      borderRadius: 8,
      color: darkMode ? '#fff' : '#000',
    },
    textInputStyle: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: darkMode ? '#fff' : '#009688',
      backgroundColor: darkMode ? '#333' : '#fff',
      color: darkMode ? '#fff' : '#000',
    },
    noResultsText: {
      color: darkMode ? '#fff' : '#000',
      fontSize: 16,
      marginTop: 16,
    },
    text: {
      color: darkMode ? '#fff' : '#000',
      fontSize: 16,
    },
  });
