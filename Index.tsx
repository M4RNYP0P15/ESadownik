import 'react-native-gesture-handler';
import React, {useState, useEffect, useCallback} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import {RootStackParamList} from './src/navigation/types';
import SettingsScreen from './src/screens/SettingsScreen';
import PlantCategoriesScreen from './src/screens/PlantsCategoriesScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useWindowDimensions} from 'react-native';
import {MMKV} from 'react-native-mmkv';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';
import {useDispatch, useSelector} from 'react-redux';
// import store from './src/redux-store/store';
import {selectDarkMode} from './src/redux-store/reducers';
// import {loadThemeFromStorage} from './src/utils/settingsHelpers';
// import { selectJsonData, setJsonData } from './src/redux-store/jsonSlice';
import fetchDataAndUpdateState from './src/utils/dataService';
import {createStackNavigator} from '@react-navigation/stack';
import PlantTypeScreen from './src/screens/PlantTypeScreen';
import PlantScreen from './src/screens/PlantInfoScreen';
import MyTimetableScreen from './src/screens/MyTimetableScreen';
import MyPlantsScreen from './src/screens/MyPlantsScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';

export const local_storage: MMKV = new MMKV();

const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

interface DrawerIconProps {
  focused: boolean;
  size: number;
}

function Index(): JSX.Element {
  // const [loading, setLoading] = useState<boolean>(true);
  const dimensions = useWindowDimensions();
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  // const jsonData = useSelector(selectJsonData);
  // const [notificationsEnabled, setNotificationsEnabled] =
  //   useState<boolean>(false);

  const HomeDrawerIcon = useCallback(
    ({focused, size}: DrawerIconProps) => (
      <Icon
        name="home"
        size={size}
        color={focused ? 'red' : darkMode ? 'white' : 'black'}
      />
    ),
    [darkMode],
  );

  const CategoriesDrawerIcon = useCallback(
    ({focused, size}: DrawerIconProps) => (
      <Icon
        name="seedling"
        size={size}
        color={focused ? 'red' : darkMode ? 'white' : 'black'}
      />
    ),
    [darkMode],
  );

  const TimetableDrawerIcon = useCallback(
    ({focused, size}: DrawerIconProps) => (
      <Icon
        name="table"
        size={size}
        color={focused ? 'red' : darkMode ? 'white' : 'black'}
      />
    ),
    [darkMode],
  );

  const SettingsDrawerIcon = useCallback(
    ({focused, size}: DrawerIconProps) => (
      <Icon
        name="wrench"
        size={size}
        color={focused ? 'red' : darkMode ? 'white' : 'black'}
      />
    ),
    [darkMode],
  );

  const MyPlantsDrawerIcon = useCallback(
    ({focused, size}: DrawerIconProps) => (
      <Icon
        name="th-list"
        size={size}
        color={focused ? 'red' : darkMode ? 'white' : 'black'}
      />
    ),
    [darkMode],
  );

  const NotificationsDrawerIcon = useCallback(
    ({focused, size}: DrawerIconProps) => (
      <Icon
        name="bell"
        size={size}
        color={focused ? 'red' : darkMode ? 'white' : 'black'}
      />
    ),
    [darkMode],
  );

  // if (local_storage.contains('notificationsEnabled')) {
  //   const enabled = local_storage.getBoolean('notificationsEnabled');
  //   if (enabled !== undefined) {
  //     setNotificationsEnabled(enabled);
  //   }
  // }
  fetchDataAndUpdateState(dispatch, local_storage).catch(error => {
    console.error('Błąd podczas wczytywania danych:', error);
  });
  // useEffect(() => {
  //   // loadThemeFromStorage(dispatch, local_storage).catch(error => {
  //   //   console.error('Błąd podczas wczytywania motywu:', error);
  //   // });
  // }, []);

  return (
    <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: darkMode ? 'white' : 'black',
        }}>
        <Stack.Screen name="Drawer" options={{headerShown: false}}>
          {() => (
            <Drawer.Navigator
              initialRouteName="Home"
              screenOptions={{
                drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
                headerTintColor: darkMode ? 'white' : 'black',
              }}>
              <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  title: 'Pulpit',
                  drawerIcon: HomeDrawerIcon,
                }}
              />
              <Drawer.Screen
                name="PlantCategories"
                component={PlantCategoriesScreen}
                options={{
                  title: 'Kategorie',
                  headerTitle: 'Wybierz kategorię rośliny',
                  drawerIcon: CategoriesDrawerIcon,
                }}
              />
              <Drawer.Screen
                name="MyTimetableScreen"
                component={MyTimetableScreen}
                options={{
                  title: 'Terminarz',
                  drawerIcon: TimetableDrawerIcon,
                }}
              />
              <Drawer.Screen
                name="MyPlantsScreen"
                component={MyPlantsScreen}
                options={{
                  title: 'Moje rośliny',
                  drawerIcon: MyPlantsDrawerIcon,
                }}
              />
              <Drawer.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}
                options={{
                  title: 'Powiadomienia',
                  drawerIcon: NotificationsDrawerIcon,
                }}
              />
              <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                  title: 'Ustawienia',
                  drawerIcon: SettingsDrawerIcon,
                }}
              />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="PlantTypeScreen"
          component={PlantTypeScreen}
          options={{title: 'Wybierz odmianę'}}
        />
        <Stack.Screen
          name="PlantInfoScreen"
          component={PlantScreen}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;
