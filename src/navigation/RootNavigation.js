import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Debouncing from '../screens/Debouncing'
import App from '../../App'

const RootNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'App' component = {App} />
                <Stack.Screen name = 'Debouncing' component = {Debouncing} />
            </Stack.Navigator>
        </NavigationContainer>
  )

}

export default RootNavigation

const styles = StyleSheet.create({})