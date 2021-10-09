import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Info from '../pages/Info';
import Settings from '../pages/Settings';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Group>
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Contact"
                component={Contact}
            />
        </Stack.Group>
        <Stack.Group>
            <Stack.Screen
                name="Info"
                component={Info}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
            />
        </Stack.Group>
        
    </Stack.Navigator>
  );
}
export default StackNavigation;