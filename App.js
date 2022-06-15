import 'react-native-gesture-handler';
import React from 'react';

import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//Manzano Javier - legajo:73261

export default  App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="albumList"
        component={AlbumList}
        options={{title: 'Albums'}}
      />
      <Stack.Screen
        name="photoList"
        component={PhotoList}
        options={{title: 'Photos'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

