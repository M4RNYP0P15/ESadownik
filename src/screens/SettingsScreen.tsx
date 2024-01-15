// import {Colors} from 'react-native/Libraries/NewAppScreen';
import main from '../../styles/main';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  Switch,
} from 'react-native';
import {SettingsProps} from '../navigation/types';
import {createSettingsStyles} from '../../styles/settings';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectDarkMode,
  selectNotifications,
  toggleDarkMode,
  toggleNotifications,
} from '../redux-store/reducers';
import notifee, {AuthorizationStatus} from '@notifee/react-native';
import {showToast} from '../utils/toast';

export default function SettingsScreen({}: SettingsProps) {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  const notificationsEnabled = useSelector(selectNotifications);
  // const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handletoggleNotifications = async () => {
    const newNotificationsEnabled = !notificationsEnabled;
    try {
      const settings = await notifee.requestPermission();
      console.log(
        'Permission status(1-Authorized):',
        settings.authorizationStatus,
      );
      if (settings.authorizationStatus === AuthorizationStatus.DENIED) {
        showToast({text: 'Brak uprawnień - Odmowa', long: true});
        if (notificationsEnabled === false) {
          return;
        }
        dispatch(toggleNotifications(false));
        return;
      }
      dispatch(toggleNotifications(newNotificationsEnabled));
    } catch (error) {
      console.error('Error requesting permission:', error);
    }
  };

  const handleToggleTheme = () => {
    // toggleTheme(dispatch, darkMode, local_storage);
    const newDarkMode = !darkMode;
    dispatch(toggleDarkMode(newDarkMode));
  };

  // const isDarkMode = useColorScheme() === 'dark';
  const styles = createSettingsStyles(darkMode);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={darkMode ? main.darker : main.lighter}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <Text style={styles.title}>Ogólne</Text>
        <View style={styles.setting}>
          <Text style={styles.text}>Włącz powiadomienia</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={handletoggleNotifications}
          />
        </View>
        <View style={styles.setting}>
          <Text style={styles.text}>Ciemny motyw</Text>
          <Switch value={darkMode} onValueChange={handleToggleTheme} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
