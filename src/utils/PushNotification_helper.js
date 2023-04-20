import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';


// This module provides a requestPermission method which triggers a native permission dialog requesting the user's permission:
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}


// function to get FCM token
export const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmtoken');
    console.log(fcmToken ,"old token")
    if(!fcmToken){
        try {
             let fcmToken = await messaging().getToken();
             if(fcmToken){
                console.log(fcmToken, "new token")
               await AsyncStorage.setItem('fcmtoken', fcmToken);
             }
        } catch (error) {
            console.log("error in token", error);
        }
    }
}


// When a user interacts with your notification by pressing on it, the default behavior is to open the application (since notifications via FCM only display when the application is in the background, the application will always open).

// In many cases, it is useful to detect whether the application was opened by pressing on a notification (so you could open a specific screen for example). The API provides two APIs for handling interaction:

// 1) getInitialNotification: When the application is opened from a quit state.
// 2) onNotificationOpenedApp: When the application is running, but in the background.

export const notificationListner = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
      });
      messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          ); 
        }
      });

      messaging().onMessage(async remoteMessage => {
        console.log("notification on foreground state.......", remoteMessage )
      })
}