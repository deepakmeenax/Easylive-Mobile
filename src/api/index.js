import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = axios.create({ baseURL: 'http://90c5121d19a8.ngrok.io' });

API.interceptors.request.use(async function (config) {
  const obj = await AsyncStorage.getItem('persist:root');
  const myobj = JSON.parse(obj);
  const authtoken = myobj.authtoken;
  const token = JSON.parse(authtoken);
  console.log(token);
  config.headers.authorization = token ? `Bearer ${token}` : null;
  return config;
});

export const getcode = number => API.post('/getcode', { number });

export const verifycode = ({ number, code }) =>
  API.post('/verifycode', { number, code });

export const singup = ({ number, name, isverify }) =>
  API.post('/singup', { number, name, isverify });

export const fetchBank = ({ lat, lng }) =>
  API.get(`/search/bloodbank/within/${lat}/${lng}`);

export const fetchCamp = ({ lat, lng }) =>
  API.get(`/search/camp/${lat}/${lng}`);

export const addparticipant = ({ id }) => API.get(`/reg/in/camp/${id}`);
