import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import AlarmScreen from './AlarmScreen';
import DateScreen from './DateScreen';
import { DrawerContent } from './HomeScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/> }>
            <Drawer.Screen name="home" component={HomeScreen} options={{headerShown:false}}/>
            <Drawer.Screen name="AlarmScreen" component={AlarmScreen} options={{headerShown:false}}/>
            <Drawer.Screen name="DateScreen" component={DateScreen} options={{headerShown:false}}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
