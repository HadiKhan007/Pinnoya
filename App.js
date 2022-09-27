import React, {useEffect} from 'react';
import {StatusBar, Platform, LogBox} from 'react-native';
import MainNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from './src/redux/store';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import {
//   initialConfig,
//   stripe_publishableKey,
//   web_client_id,
// } from './src/shared/exporter';
// import {StripeProvider} from '@stripe/stripe-react-native';
import {Provider as PaperProvider} from 'react-native-paper';

// ignore warnings
LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs(['ViewPropTypes']);

const App = () => {
  // //Initialize Google Signin
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId: web_client_id,
  //   });
  //   initialConfig();
  // }, []);

  return (
    // <StripeProvider
    //   publishableKey={stripe_publishableKey}
    //   merchantIdentifier="merchant.com.billionpound.app">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <InternetConnectionAlert onChange={connectionState => {}}>
            <MainNavigation />
          </InternetConnectionAlert>
        </PaperProvider>
      </PersistGate>
    </Provider>
    // </StripeProvider>
  );
};

export default App;
