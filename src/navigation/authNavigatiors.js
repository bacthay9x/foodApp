import React from 'react';
import {
  createNativeStackNavigator,
  TransitionPresets,
} from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SingInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Auth.Navigator>
  );
}
