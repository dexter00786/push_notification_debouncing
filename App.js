import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { notificationListner, requestUserPermission } from './src/PushNotification_helper'
import CustomButton from './src/components/CustomButton'
import { useNavigation } from '@react-navigation/native'
const App = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    requestUserPermission();
    notificationListner()
  },[])

  return (
    <SafeAreaView style = {styles.container} >
      <View style = {[styles.container, {justifyContent : 'center', alignItems : "center"}]} >
          <CustomButton backgroundColor = {'#0F73EE'} label = {"Debouncing"} onPress = {()=> navigation.navigate('Debouncing')} />
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container : {
    flex  : 1,
  }
})