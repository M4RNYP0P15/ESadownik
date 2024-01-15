import {StyleSheet} from 'react-native';

export const createPlantScreenStyles = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkMode ? '#1c1c1c' : '#fff',
      padding: 16,
    },
    heading: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 8,
      color: darkMode ? '#fff' : '#000',
    },
    addPlantButton: {
      fontSize: 16,
      marginBottom: 8,
      color: '#3498db', // Dodaj dowolny kolor
    },
    infoText: {
      fontSize: 24,
      marginBottom: 8,
      color: darkMode ? '#fff' : '#000',
    },
    accordionTitle: {
      fontSize: 16,
      marginBottom: 8,
      color: darkMode ? '#fff' : '#000',
    },
    galleryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    galleryImage: {
      width: 100,
      height: 100,
      marginBottom: 8,
    },
    noResultsText: {
      color: darkMode ? '#fff' : '#000',
      fontSize: 16,
      marginTop: 16,
    },
  });
