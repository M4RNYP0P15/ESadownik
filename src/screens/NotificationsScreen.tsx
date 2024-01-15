import notifee from '@notifee/react-native';
// import {Button, View} from 'react-native';
import {NotificationsScreenProps} from '../navigation/types';
import {useDispatch, useSelector} from 'react-redux';
import {MyPlantsScreenProps} from '../navigation/types';
import {removePlant, selectedUserPlants} from '../redux-store/plantListSlice';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import {selectDarkMode} from '../redux-store/reducers';
import {createMyPlantsStyles} from '../../styles/myPlantsStyles';
import { selectEvents } from '../redux-store/calendarSlice';

export default function NotificationsScreen({
  navigation,
  route,
}: NotificationsScreenProps) {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  const userPlants = useSelector(selectedUserPlants);
  const events = useSelector(selectEvents);

  const handleRemovePlant = (plant: Plant) => {
    dispatch(removePlant(plant));
  };

  const styles = createMyPlantsStyles(darkMode);

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('PlantInfoScreen', {
            name: item.nazwa,
            rodzaj: item.kategoria,
          });
        }}>
        <Text style={styles.itemText}>
          {item.nazwa} - {item.kategoria}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemovePlant(item)}>
        <Text style={styles.removeButtonText}>Usuń</Text>
      </TouchableOpacity>
    </View>
  );
  async function onDisplayNotification() {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Ogólny',
    });
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Body of the notification',
      android: {
        channelId,
        smallIcon: 'small-icon',
      },
    });
  }
  // return (
  //   <View>
  //     <Button
  //       title="Push notification"
  //       onPress={() => onDisplayNotification()}
  //     />
  //   </View>
  // );
  return (
    <FlatList
      data={userPlants.userPlants}
      renderItem={renderItem}
      keyExtractor={item => item.nazwa.toString()}
      ListEmptyComponent={
        <Text style={styles.noResultsText}>Brak wydarzeń.</Text>
      }
      contentContainerStyle={styles.containerStyle}
    />
  );
}
