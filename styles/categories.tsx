import {StyleSheet} from 'react-native';

export const styles = (darkMode: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkMode ? '#1c1c1c' : '#fff',
    },
    sectionitem: {
      backgroundColor: darkMode ? '#333' : '#f0f0f0',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: darkMode ? '#555' : '#ccc',
    },
    section_title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: darkMode ? '#fff' : '#333',
    },
    item: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: darkMode ? '#444' : '#eee',
    },
    itemFirst: {
      borderTopWidth: 1,
      borderTopColor: darkMode ? '#444' : '#eee',
    },
    itemLast: {
      borderBottomWidth: 0,
    },
    item_title: {
      fontSize: 16,
      color: darkMode ? '#BB86FC' : '#007BFF',
    },
  });
