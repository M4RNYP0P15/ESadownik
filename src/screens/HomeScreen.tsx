// HomeScreen.tsx
import main from '../../styles/main';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {HomeProps} from '../navigation/types';
import {useSelector} from 'react-redux';
import {selectDarkMode} from '../redux-store/reducers';
import FastImage from 'react-native-fast-image';

function HomeScreen({navigation, route}: HomeProps) {
  const darkMode = useSelector(selectDarkMode);
  const backgroundStyle = {
    backgroundColor: darkMode ? main.darker : main.lighter,
    flex: 1,
  };
  const screenWidth = useWindowDimensions().width;
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: darkMode ? main.black : main.white,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <Text
            style={{
              color: darkMode ? main.white : main.black,
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Witaj w ESadownik! 🌱
          </Text>
          <Text style={{color: darkMode ? main.white : main.black}}>
            Kliknij "Przejdź dalej" lub wybierz z szuflady opcję "Kategorie",
            aby wybrać interesującą cie roślinę.
          </Text>
          <FastImage
            style={{width: screenWidth, height: 300}}
            source={{
              uri: 'https://www.sadownictwo.com.pl/edc_media/Manager/News/Emerytury-rolnicze-sadownik-3fb.jpg',
              cache: FastImage.cacheControl.web,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <TouchableOpacity
            style={{
              backgroundColor: darkMode ? '#1E90FF' : '#32CD32',
              padding: 10,
              borderRadius: 8,
              marginTop: 20,
            }}
            onPress={() => navigation.navigate('PlantCategories')}>
            <Text
              style={{
                color: darkMode ? main.white : main.black,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Przejdź dalej
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
