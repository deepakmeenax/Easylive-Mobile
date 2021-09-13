import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HouseScreen from '../screens/Home';
import ShopScreen from '../screens/Shop';
import ProfileScreen from '../screens/Profile';
import SearchScreen from '../screens/Search';
import ResultScreen from '../screens/Result';
import LocationScreen from '../screens/Location';
import CartScreen from '../screens/Cart';
import Login from '../screens/Login';
import OtpVerify from '../screens/OtpVerify';
import Header from '../components/Header';
import LocationHeader from '../components/LocationHeader';

// function Authstack() {
//   return (
//     <Stack.Navigator
//       initialRouteName='Login'
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name='Login' component={Login} />
//       <Stack.Screen name='OtpVerify' component={OtpVerify} />
//     </Stack.Navigator>
//   );
// }

const BottomTab = createBottomTabNavigator();

function BottomTabStack() {
  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-minus' : 'home-minus-outline';
          } else if (route.name === 'Shop') {
            iconName = focused ? 'shopping' : 'shopping-outline';
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <BottomTab.Screen name='Home' component={HouseScreen} />
      <BottomTab.Screen name='Shop' component={ShopScreen} />
    </BottomTab.Navigator>
  );
}

const MainScreens = createStackNavigator();
function MainStack() {
  return (
    <MainScreens.Navigator>
      <MainScreens.Screen
        name='BottomTabStack'
        component={BottomTabStack}
        options={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
      />
      <MainScreens.Screen name='SearchScreen' component={SearchScreen} />
      <MainScreens.Screen name='ResultScreen' component={ResultScreen} />
      <MainScreens.Screen name='CartScreen' component={CartScreen} />
      <MainScreens.Screen name='ProfileScreen' component={ProfileScreen} />
      <MainScreens.Screen
        name='LocationScreen'
        component={LocationScreen}
        options={{
          header: ({ navigation }) => <LocationHeader navigation={navigation} />,
        }}
      />
    </MainScreens.Navigator>
  );
}

export default function Navigator() {
  const isLogin = useSelector(state => state.auth.isLogin);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  ); // ) : (
  //   <NavigationContainer>
  //     <Authstack />
  //   </NavigationContainer>
  // );
}
