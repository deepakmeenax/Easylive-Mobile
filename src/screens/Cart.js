import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Text>Cart Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
