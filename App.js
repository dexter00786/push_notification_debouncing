import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  notificationListner,
  requestUserPermission,
} from './src/utils/PushNotification_helper';
import CustomButton from './src/components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Signup from './src/screens/Signup/Signup';
import RootNavigation from './src/navigation/RootNavigation';
const App = () => {
  const navigation = useNavigation();
  // useEffect(()=>{
  //   requestUserPermission();
  //   notificationListner()
  // },[])

  return (
    <SafeAreaView style={styles.container}>
      <RootNavigation />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
