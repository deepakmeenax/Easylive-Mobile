import * as api from '../../api';

export const getBank = ({ lat, lng }) => async dispatch => {
  try {
    dispatch({ type: 'FETCH_REQUEST', payload: [] });
    const { data } = await api.fetchBank({ lat, lng });
    console.log('from action bank sucess');
    console.log(data);
    dispatch({ type: 'FETCH_BANK_SUCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_FAILURE', payload: error.message });
    console.log('from action bank fail');
    console.log(error);
  }
};

export const getCamp = ({ lat, lng }) => async dispatch => {
  try {
    dispatch({ type: 'FETCH_REQUEST', payload: [] });
    const { data } = await api.fetchCamp({ lat, lng });
    console.log('from action camp sucess');
    console.log(data);
    dispatch({ type: 'FETCH_CAMP_SUCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_FAILURE', payload: error.message });
    console.log('from action camp fail');
    console.log(error);
  }
};
