import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { verifycode } from '../redux/actions/auth';

export default function OtpVerify({ route, navigation }) {
  const dispatch = useDispatch();
  const { number } = route.params;
  const [otp, setOtp] = useState('');
  const error = useSelector(state => state.auth.error);
  const isExist = useSelector(state => state.auth.isExist);

  const verifyOtp = () => {
    console.log(otp);
    dispatch(verifycode({ number, code: otp }));
    // if (!isExist) {
    //   navigation.navigate('SingUp', { number, isverify: true });
    // }
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Image
          source={require('../assets/images/login.png')}
          style={styles.center_img}
        />
        <Text style={styles.center_text}>Enter OTP to verify</Text>

        <Text style={styles.sent_info_text}>
          OTP Sent To: <Text style={styles.sent_info_text_num}>{number}</Text>
        </Text>

        <View style={styles.number_input_box}>
          <TextInput
            style={styles.number_input}
            onChangeText={text => setOtp(text)}
            placeholder='Enter OTP'
            keyboardType='numeric'
          />
        </View>

        {error && <Text style={styles.error_text}>{error.message}</Text>}

        <TouchableOpacity
          onPress={() => verifyOtp()}
          style={styles.send_otp_btn}
        >
          <Text style={styles.send_otp_btn_text}>Verify OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.not_recive_btn}
        >
          <Text style={styles.not_recive_btn_text}>Don't Recive? Resend</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center_img: {
    marginVertical: 30,
    width: 200,
    alignSelf: 'center',
    height: '25%',
  },
  center_text: {
    fontSize: 18,
    fontFamily: 'Bold',
    alignSelf: 'center',
    marginHorizontal: 30,
  },
  error_text: {
    fontSize: 10,
    fontFamily: 'Bold',
    alignSelf: 'center',
    marginHorizontal: 40,
  },
  sent_info_text: {
    fontSize: 10,
    fontFamily: 'Regular',
    alignSelf: 'center',
    marginLeft: 40,
  },
  sent_info_text_num: {
    fontSize: 10,
    fontFamily: 'Medium',
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 40,
  },
  number_input_box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 55,
    borderWidth: 1,
    marginTop: 50,
    paddingHorizontal: 10,
    borderColor: '#f7475b',
    borderRadius: 10,
    paddingVertical: 2,
  },
  number_input: {
    paddingHorizontal: 10,
    width: '100%',
    height: 40,
  },
  send_otp_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7475b',
    marginHorizontal: 55,
    marginVertical: 20,
    borderRadius: 23,
    height: 50,
  },
  send_otp_btn_text: {
    color: '#fff',
    fontSize: 15,
  },
  not_recive_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 55,
    marginVertical: 20,
    borderRadius: 23,
    height: 50,
  },
  not_recive_btn_text: {
    color: '#f7475b',
    fontSize: 15,
  },
});
