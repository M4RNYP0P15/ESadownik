import {StyleSheet} from 'react-native';

export const createMyPlantsStyles = (darkMode: boolean) =>
  StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: darkMode ? '#000' : '#fff',
    // },
    // item: {
    //   padding: 20,
    //   borderBottomWidth: 1,
    //   borderBottomColor: darkMode ? '#444' : '#ccc',
    // },
    // itemText: {
    //   fontSize: 16,
    //   color: darkMode ? '#fff' : '#000',
    // },
    // noResultsText: {
    //   color: darkMode ? '#fff' : '#000',
    //   fontSize: 16,
    //   marginTop: 16,
    // },
    container: {
      flex: 1,
      backgroundColor: darkMode ? '#1e1e1e' : '#f4f4f4',
    },
    noResultsText: {
      textAlign: 'center',
      fontSize: 18,
      marginVertical: 20,
      color: darkMode ? 'white' : 'black',
    },
    containerStyle: {
      paddingVertical: 20,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: darkMode ? '#444' : '#ddd',
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    item: {
      flex: 1,
    },
    itemText: {
      fontSize: 16,
      color: darkMode ? 'white' : 'black',
    },
    removeButton: {
      marginLeft: 10,
      padding: 8,
      backgroundColor: 'red',
      borderRadius: 5,
    },
    removeButtonText: {
      color: 'white',
    },
  });
