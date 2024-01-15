import notifee from '@notifee/react-native';
import {Button, View} from 'react-native';
import {NotificationsScreenProps} from '../navigation/types';

export default function NotificationsScreen({
  navigation,
  route,
}: NotificationsScreenProps) {
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
  return (
    <View>
      <Button
        title="Push notification"
        onPress={() => onDisplayNotification()}
      />
    </View>
  );
}
