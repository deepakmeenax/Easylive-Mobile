import * as api from '../../api';

export const updatelocation =
  ({ coord, formatedAddress, onsucess }) =>
  dispatch => {
    try {
      console.log(formatedAddress);
      dispatch({
        type: 'INITIALIZE_LOCATION',
        payload: { coord, formatedAddress },
      });
      let serviceable = true;
      console.log(serviceable);
      if (serviceable)
        dispatch({ type: 'LOCATION_CHEACK_SUCESS', payload: serviceable });
      else dispatch({ type: 'LOCATION_CHEACK_FAILURE', payload: serviceable });

      onsucess();
    } catch (error) {
      dispatch({ type: 'LOCATION_ERROR', payload: error.message });
      console.log(error);
    }
  };
