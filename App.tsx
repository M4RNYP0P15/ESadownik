import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux-store/store';
import Index from './Index';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
export default App;
