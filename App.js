import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { PersistGate } from 'redux-persist/integration/react';
import { enableScreens } from 'react-native-screens';
enableScreens();

import { store, persistor } from './src/redux/store';
import Navigator from './src/navigations/Navigator';

export default function App() {
  const [isFontLoaded, setISFontLoaded] = useState(false);

  useEffect(() => {
    async function loadfont() {
      await Font.loadAsync({
        'Bold': require('./src/assets/fonts/Montserrat-ExtraBold.otf'),
        'Medium': require('./src/assets/fonts/Montserrat-Medium.otf'),
        'Regular': require('./src/assets/fonts/Montserrat-Regular.otf'),
      });
      setISFontLoaded(true);
    }
    loadfont();
  }, []);

  return isFontLoaded ? (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  ) : (
    <AppLoading />
  );
}
