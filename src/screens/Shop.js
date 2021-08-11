import React, { useEffect } from 'react';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import { View, Text, Image, StyleSheet } from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ShopScreen({ navigation }) {
  useEffect(() => {}, []);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Text>Shop Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ResultScreen')}>
        <Text>Result</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
        <Text>Search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
