import {Calendar, LocaleConfig} from 'react-native-calendars';
import {MyTimeTableProps} from '../navigation/types';
import {useState} from 'react';

export default function MyTimetableScreen({
  navigation,
  route,
}: MyTimeTableProps) {
  const [selected, setSelected] = useState('');
  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: 'orange',
        },
      }}
    />
  );
}
