import {StyleSheet} from 'react-native';

export const createSettingsStyles = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkMode ? 'black' : 'white',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: darkMode ? 'white' : 'black',
      marginVertical: 16,
      paddingLeft: 5,
    },
    setting: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: darkMode ? 'black' : 'gray',
    },
    text: {
      fontSize: 16,
      color: darkMode ? 'white' : 'black',
    },
    button: {
      backgroundColor: darkMode ? 'red' : 'blue',
      padding: 16,
      alignItems: 'center',
      borderRadius: 8,
      margin: 16,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
  });
