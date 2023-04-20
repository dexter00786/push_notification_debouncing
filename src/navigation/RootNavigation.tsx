import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Debouncing from '../screens/Debouncing';
import Signup from '../screens/Signup/Signup';

import {LinkingOptions} from '@react-navigation/native';
import Otpverify from '../screens/OtpVerify';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();

  const deepLinksConf = {
    initialRouteName: 'Signup',
    screens: {
      debounce: 'Debouncing',
      signup: 'Signup',
      //   Comics: 'comics/:comicsId',
      //   Quiz: 'quiz/:quizGroupId/:title',
      //   PersonalityTest: 'personality/:testId',
      //   Home: 'home',
    },
  };

  const linking: LinkingOptions = {
    prefixes: ['myapp://', 'pushnotificationdexter.page.link/debounce'],
    config: deepLinksConf,
  };
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Debouncing" component={Debouncing} />
        <Stack.Screen name='OtpVerify' component={Otpverify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
