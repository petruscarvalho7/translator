/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/core/redux/reducers';
import Navigation from './src/navigation';
import theme from './src/assets/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

let middleware = applyMiddleware(ReduxThunk);

console.disableYellowBox = true; //eslint-disable-line

const store = createStore(reducers, {}, middleware);

Icon.loadFont();

const App: () => React$Node = () => {
  return (
    <View>
      <SafeAreaView
        style={{flex: 0, backgroundColor: theme.colors.statusBar}}
      />
      <SafeAreaView>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </SafeAreaView>
    </View>
  );
};

export default App;
