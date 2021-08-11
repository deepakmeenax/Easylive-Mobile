import * as api from '../../api';

export const getcode = number => async dispatch => {
  try {
    const { data } = await api.getcode(number);
  } catch (error) {
    console.log(error);
  }
};

export const verifycode = ({ number, code }) => async dispatch => {
  try {
    const { data } = await api.verifycode({ number, code });
    dispatch({ type: 'VERIFY_OTP_SUCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'VERIFY_OTP_FAILURE', payload: error });
    console.log(error);
  }
};

export const singup = ({ number, name, isverify }) => async dispatch => {
  try {
    const { data } = await api.singup({ number, name, isverify });
    dispatch({ type: 'NEW_USER_SUCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'NEW_USER_FAILURE', payload: error });
    console.log(error);
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch({ type: 'LOGOUT_USER', payload: null });
    toast.info(`Logout Success`);
  } catch (error) {
    dispatch({ type: 'LOGOUT_USER_FAILURE', payload: error });
    console.log(error);
  }
};
