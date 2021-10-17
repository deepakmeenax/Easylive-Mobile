import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

import { updatelocation } from '../redux/actions/location';

const API_KEY = 'AIzaSyBBvQLI7BPpXln_Jzl_tIUVH1f775C7GXM';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LocationHeader({ navigation }) {
  const [searchKeyword, setSearchkeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isShowingResults, setShowingResults] = useState(false);

  const dispatch = useDispatch();

  const onsucess = () => {
    navigation.navigate('BottomTabStack');
  };

  const handleChanges = async text => {
    setSearchkeyword(text);
    if (searchKeyword.trim() === '') {
      setShowingResults(false);
      return;
    }
    if (searchKeyword.length >= 3) {
      searchLocation();
    }
  };

  const searchLocation = async () => {
    axios
      .request({
        method: 'post',
        url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&input=${searchKeyword}&type=(regions)&language=en&components=country:in`,
      })
      .then(response => {
        console.log(`data response`);
        console.log(response.data.predictions);

        setSearchResults(response.data.predictions);
        setShowingResults(true);
      })
      .catch(e => {
        console.log(`error on axios ${e}`);
      });
  };

  const getLocation = place_id => {
    // https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJrTLr-GyuEmsRBfy61i59si0&key=YOUR_API_KEY
    axios
      .request({
        method: 'post',
        url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${API_KEY}`,
      })
      .then(response => {
        console.log(`palceid response`);
        console.log(response.data);
        console.log(response.data.result.geometry);
        console.log(response.data.result.geometry.location);
        console.log(response.data.result.formatted_address);
        dispatch(
          updatelocation({
            coord: [
              response.data.result.geometry.location.lat,
              response.data.result.geometry.location.lng,
            ],
            formatedAddress: response.data.result.formatted_address,
            onsucess: onsucess,
          })
        );
      })
      .catch(e => {
        console.log(`error on axios ${e}`);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.autocompleteContainer}>
        <AntDesign name='search1' size={20} color='black' />
        <TextInput
          placeholder='Search for an address'
          returnKeyType='search'
          style={styles.searchBox}
          placeholderTextColor='#000'
          onChangeText={text => handleChanges(text)}
          value={searchKeyword}
        />

        {isShowingResults && (
          <FlatList
            data={searchResults}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.resultItem}
                  onPress={() => {
                    setSearchkeyword(item.description);
                    setShowingResults(false);
                    getLocation(item.place_id);
                    console.log(item.place_id);
                  }}
                >
                  <Text>{item.description}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            style={styles.searchResultsContainer}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  autocompleteContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchResultsContainer: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 50,
  },
  resultItem: {
    width: '100%',
    justifyContent: 'center',
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    paddingLeft: 15,
  },
  searchBox: {
    width: 340,
    height: 50,
    fontSize: 18,
    color: '#000',
    backgroundColor: '#fff',

    paddingLeft: 15,
  },
});
