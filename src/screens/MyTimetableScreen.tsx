import {Calendar, DateData, LocaleConfig} from 'react-native-calendars';
import {MyTimeTableProps} from '../navigation/types';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addEvent, selectEvents} from '../redux-store/calendarSlice';
import {Button, Text, View} from 'react-native';
import notifee from '@notifee/react-native';
import { selectDarkMode } from '../redux-store/reducers';
import { setUpcomingEvents } from '../redux-store/notificationsSlice';

export default function MyTimetableScreen({
  navigation,
  route,
}: MyTimeTableProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  const events = useSelector(selectEvents);
  const handleDayPress = day => {
    const formattedDate = day.dateString;
    setSelectedDate(formattedDate);
  };
  const handleAddEvent = () => {
    if (selectedDate) {
      dispatch(
        addEvent({
          date: selectedDate,
          event: 'Oprysk drzewek',
          dotColor: 'blue',
        }),
      );
    }
  };

  const handleSetNotification = async () => {
    if (selectedDate) {
      try {
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
        const settings = await notifee.requestPermission();
        console.log(
          'Permission status(1-Authorized):',
          settings.authorizationStatus,
        );

        await notifee.displayNotification({
          title: 'Zbliżające się wydarzenie',
          body: 'Oprysk drzewek w dniu ' + selectedDate,
          android: {
            channelId,
            color: '#FF0000',
          },
        });
        // dispatch(setUpcomingEvents())

        // await notifee.displayNotification(notification);
      } catch (error) {
        console.error('Error requesting permission:', error);
      }
    }
  };

  return (
    // <View>
    //   <Calendar onDayPress={handleDayPress} markedDates={events} />
    //   {selectedDate && (
    //     <View>
    //       <Text>Wybrana data: {selectedDate}</Text>
    //       <Button title="Dodaj wydarzenie" onPress={handleAddEvent} />
    //       <Button title="Ustaw powiadomienie" onPress={handleSetNotification} />
    //     </View>
    //   )}
    // </View>

    <View style={{flex: 1, backgroundColor: darkMode ? '#121212' : '#FFFFFF'}}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={events}
        theme={{
          backgroundColor: darkMode ? '#121212' : '#FFFFFF', // Zmiana koloru tła kalendarza
          calendarBackground: darkMode ? '#121212' : '#FFFFFF', // Zmiana koloru tła kalendarza
          textSectionTitleColor: darkMode ? '#FFFFFF' : '#000000', // Zmiana koloru tekstu tytułowego sekcji
          textDayHeaderFontSize: 12,
          textDayHeaderFontWeight: 'bold',
          textDayStyle: {color: darkMode ? '#FFFFFF' : '#000000'},
          // textDayHeaderColor: darkMode ? '#FFFFFF' : '#000000', // Zmiana koloru tekstu dni tygodnia
          textMonthFontSize: 16,
          textMonthFontWeight: 'bold',
          monthTextColor: darkMode ? '#FFFFFF' : '#000000',
          // textMonthTextColor: darkMode ? '#FFFFFF' : '#000000', // Zmiana koloru tekstu miesiąca
          dayTextColor: darkMode ? '#FFFFFF' : '#000000', // Zmiana koloru tekstu dni
          textDisabledColor: darkMode ? '#808080' : '#A0A0A0', // Zmiana koloru tekstu nieaktywnych dni
          selectedDayBackgroundColor: darkMode ? '#FFFFFF' : '#FF0000', // Zmiana koloru tła wybranego dnia
          selectedDayTextColor: darkMode ? '#000000' : '#FFFFFF', // Zmiana koloru tekstu wybranego dnia
          todayTextColor: darkMode ? '#00FF00' : '#FF0000', // Zmiana koloru tekstu dzisiejszego dnia
        }}
      />
      {selectedDate && (
        <View>
          <Text style={{color: darkMode ? '#FFFFFF' : '#000000'}}>
            Wybrana data: {selectedDate}
          </Text>
          <Button
            title="Dodaj wydarzenie"
            onPress={handleAddEvent}
            color="#FF1F1F"
          />
          <Button
            title="Ustaw powiadomienie"
            onPress={handleSetNotification}
            color="#1F1F8F"
          />
        </View>
      )}
    </View>
  );
}
