import * as React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from "./Screen/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
const Stack = createNativeStackNavigator();

function Router () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;