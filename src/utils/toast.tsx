import {ToastAndroid} from 'react-native';

interface ToastProps {
  text: string;
  long: boolean;
  // type: 'top' | 'center' | 'bottom'; // not there yet
}

export const showToast = ({text, long}: ToastProps) => {
  if (text.length > 0) {
    if (long) {
      ToastAndroid.show(text, ToastAndroid.LONG);
    } else {
      ToastAndroid.show(text, ToastAndroid.SHORT);
    }
  }
  // ToastAndroid.show(text, long);
  // ToastAndroid.SHORT;
  // ToastAndroid.showWithGravity(text, time,ToastAndroid.BOTTOM);
  // ToastAndroid.showWithGravityAndOffset(text, time,ToastAndroid.BOTTOM, 25, 50);
};
