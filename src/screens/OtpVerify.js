import OTPInputView from '@twotalltotems/react-native-otp-input';
import * as React from 'react';

import {
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  getHash,
  getOtp,
  requestHint,
  startOtpListener,
  useOtpVerify,
} from 'react-native-otp-verify';

export default function App() {
  const [hashFromMethod, setHashFromMethod] = React.useState('');
  const [otpFromMethod, setOtpFromMethod] = React.useState('');
  const [codes, setCodes] = React.useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const box1Ref = React.useRef(),
    box2Ref = React.useRef(),
    box3Ref = React.useRef(),
    box4Ref = React.useRef();

  // const {hash, otp, timeoutError, stopListener, startListener} = useOtpVerify();

  // using methods
  React.useEffect(() => {
    getHash()
      .then(res => setHashFromMethod(res))
      .catch(err => {
        console.error(err);
      });
    startOtpListener(message => {
      console.log(message, 'message');
      const otp = /(\d{4})/g.exec(message)[1];
      setOtpFromMethod(otp);
    });
    getOtp();
  }, []);

  React.useEffect(() => {
    splitOtp();
  }, [otpFromMethod]);

  const splitOtp = () => {
    const splitCode = otpFromMethod.split('');
    console.log(splitCode);
    setCodes({
      ...codes,
      first: splitCode[0],
      second: splitCode[1],
      third: splitCode[2],
      fourth: splitCode[3],
    });
  };
  console.log(hashFromMethod);
  const onFormUpdate = (itemNum, text) => {
    if (itemNum === 1) {
      setCodes({
        ...codes,
        first: text,
      });
      if (text === '') {
        Keyboard.dismiss();
      } else {
        box2Ref.current.focus();
      }
    } else if (itemNum === 2) {
      setCodes({
        ...codes,
        second: text,
      });
      // if(text === ""){
      //   box1Ref.current.focus()
      // }
      // else {
      // box3Ref.current.focus()
      // }
      if (text !== '') {
        box3Ref.current.focus();
      }
    } else if (itemNum === 3) {
      setCodes({
        ...codes,
        third: text,
      });
      if (text === '') {
        box2Ref.current.focus();
      } else {
        box4Ref.current.focus();
      }
    } else if (itemNum === 4) {
      setCodes({
        ...codes,
        fourth: text,
      });
      if (text === '') {
        box3Ref.current.focus();
      } else {
        Keyboard.dismiss();
      }
    }
  };

  console.log(codes);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: Dimensions.get('window').width - 16,
          justifyContent: 'space-evenly',
        }}>
        <TextInput
          maxLength={1}
          keyboardType={'number-pad'}
          ref={box1Ref}
          value={codes.first}
          style={styles.singleBox}
          onChangeText={text => onFormUpdate(1, text)}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              Keyboard.dismiss();
            }
          }}
        />
        <TextInput
          maxLength={1}
          keyboardType={'number-pad'}
          ref={box2Ref}
          value={codes.second}
          style={styles.singleBox}
          onChangeText={text => onFormUpdate(2, text)}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              if (codes.second != '') {
                setCodes({
                  ...codes,
                  second: '',
                });
              } else {
                box1Ref.current.focus();
              }
            }
          }}
        />
        <TextInput
          maxLength={1}
          keyboardType={'number-pad'}
          ref={box3Ref}
          value={codes.third}
          style={styles.singleBox}
          onChangeText={text => onFormUpdate(3, text)}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              box2Ref.current.focus();
            }
          }}
        />
        <TextInput
          maxLength={1}
          keyboardType={'number-pad'}
          ref={box4Ref}
          value={codes.fourth}
          style={styles.singleBox}
          onChangeText={text => onFormUpdate(4, text)}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              box3Ref.current.focus();
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultView: {
    margin: 10,
  },
  resultHeader: {
    fontSize: 18,
    marginBottom: 5,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  singleBox: {
    height: 50,
    width: 50,
    borderRadius: 5,
    paddingVertical: 13,
    paddingLeft: 20,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
