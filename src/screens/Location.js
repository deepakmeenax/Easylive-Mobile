import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';

import { updatelocation } from '../redux/actions/location';

export default function LocationScreen({ navigation }) {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.location.isLoading);

  const onsucess = () => {
    navigation.navigate('BottomTabStack');
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.getForegroundPermissionsAsync();
    console.log(`status first ${status}`);
    if (status !== 'granted') {
      status = await Location.requestForegroundPermissionsAsync();
    }

    await Location.hasServicesEnabledAsync();
    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    const address = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    console.log(address);
    const formatedAddress = ` ${address[0].street ? address[0].street : ''} ${
      address[0].city ? address[0].city : ''
    } ${address[0].subregion ? address[0].subregion : ''} ${
      address[0].district ? address[0].district : ''
    } ${address[0].postalCode ? address[0].postalCode : ''}`;
    console.log(formatedAddress);

    dispatch(
      updatelocation({
        coord: [location.coords.latitude, location.coords.longitude],
        formatedAddress: formatedAddress,
        onsucess: onsucess,
      })
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => getCurrentLocation()}>
          <Text>GET Location</Text>
        </TouchableOpacity>
      </View>
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size='large' color='#00ff00' />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
