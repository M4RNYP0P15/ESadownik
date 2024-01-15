// HomeScreen.tsx
import main from '../../styles/main';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
// import FastImage from 'react-native-fast-image';
// import { useColorScheme } from "react-native/Libraries/Utilities/Appearance";
import {HomeProps} from '../navigation/types';
// import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {selectDarkMode} from '../redux-store/reducers';

function HomeScreen({navigation, route}: HomeProps) {
  // const isDarkMode = useColorScheme() === 'dark';
  const darkMode = useSelector(selectDarkMode);
  const backgroundStyle = {
    backgroundColor: darkMode ? main.darker : main.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* {loading ?(
            <Text>Pobieranie danych.</Text>
          ):(
            <FlatList 
              data={data}
            />
          )} */}
        <View
          style={{
            backgroundColor: darkMode ? main.black : main.white,
          }}>
          <Text>
            Najbliższe opryski i działania związane z roślinami
            TO;DO:notifications; this screen; calendar
          </Text>
          {/* <FastImage
            style={{width: 200, height: 200}}
            source={{
              uri: 'https://fastly.picsum.photos/id/1/400/400.jpg?hmac=lOytrN6lDOH_Yx7NwwGIaCtxp6pyuH2V4hD6Eac-VI0',
              cache: FastImage.cacheControl.web,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
