import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Account from './src/screens/Account';



const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default  App;