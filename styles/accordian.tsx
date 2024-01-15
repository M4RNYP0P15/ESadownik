import {StyleSheet} from 'react-native';

export const createAccordionStyles = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: darkMode ? '#1c1c1c' : '#fff',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 56,
      paddingLeft: 25,
      paddingRight: 18,
      backgroundColor: darkMode ? '#2c2c2c' : '#eee',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: darkMode ? '#fff' : '#000',
    },
    font: {
      fontSize: 12,
    },
    icon: {
      color: darkMode ? '#fff' : '#000',
    },
    parentHr: {
      height: 1,
      color: '#fff', // Lub inny kolor
      width: '100%',
    },
    child: {
      backgroundColor: darkMode ? '#424242' : '#f0f0f0',
      padding: 16,
    },
    childText: {
      color: darkMode ? '#fff' : '#000',
      fontSize: 15,
    },
  });
