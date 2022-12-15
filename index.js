/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import RootNavigation from './src/navigation/RootNavigation';

AppRegistry.registerComponent(appName, () => RootNavigation);



// When the application is in a background or quit state, the onMessage handler will not be called when receiving messages. Instead, you need to setup a background callback handler via the setBackgroundMessageHandler method.

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

