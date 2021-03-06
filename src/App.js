import React from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Router from './router';

const App = () => {
  const entireScreenWidth = Dimensions.get('window').width;
  EStyleSheet.build({$rem: entireScreenWidth / 320});
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
