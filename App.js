import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { getFcmToken, notificationListner, requestUserPermission } from './src/PushNotification_helper'

const App = () => {
  useEffect(()=>{
    requestUserPermission();
    notificationListner()
  },[])
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})