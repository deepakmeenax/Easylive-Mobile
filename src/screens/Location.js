import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Image, Modal, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LocationModal({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <View>
            <Text>This is Half Modal</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BottomTabStack');
            }}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    opacity: 1,
  },
  innerContainer: {
    opacity: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 200,
    backgroundColor: 'red',
  },
});
