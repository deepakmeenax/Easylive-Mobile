import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Header({ navigation }) {
  const formatedAddress = useSelector(state => state.location.formatedAddress);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_row}>
        <TouchableOpacity
          style={styles.header_left}
          onPress={() => navigation.navigate('LocationScreen')}
        >
          <Text
            numberOfLines={1}
            ellipsizeMode='tail'
            style={styles.locationtxt}
          >
            <Octicons name='location' size={20} color='tomato' />
            {'  '}
            {formatedAddress}
          </Text>
        </TouchableOpacity>
        <View style={styles.header_right}>
          <TouchableOpacity style={styles.cart}>
            <AntDesign name='shoppingcart' size={30} color='black' />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profile}>
            <AntDesign name='user' size={30} color='tomato' />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  header_row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: windowHeight * 0.08,
  },
  header_left: {
    width: windowWidth * 0.5,
  },
  locationtxt: {
    fontSize: 15,
    fontFamily: 'Bold',
  },
  header_right: {
    width: windowWidth * 0.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
