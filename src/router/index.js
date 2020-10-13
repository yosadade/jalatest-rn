import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Home, Detail} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default Router;
