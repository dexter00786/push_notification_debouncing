import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>signup</Text>
        <Button
          onPress={() => navigation.navigate('Debouncing')}
          title={'Go to debounce'}></Button>
        <Button
          onPress={() => navigation.navigate('OtpVerify')}
          title={'Go to Verification'}></Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    width: Dimensions.get('window').width - 16,
  },
});
