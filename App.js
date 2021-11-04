
import React, { Component } from 'react';
import { View } from 'react-native';
// import {getBottomSpace} from 'react-native-iphone-x-helper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './src/core/redux/index';
import HomeStackNavigator from './src/navigations/Navigator'
const { persistor, store } = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <View style={{ flex: 1 }}>
            <HomeStackNavigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
export default App