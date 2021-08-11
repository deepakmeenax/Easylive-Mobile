import * as api from '../../api';

export const regDonor = ({ id }) => async dispatch => {
  try {
    dispatch({ type: 'REG_REQUEST', payload: [] });
    console.log(id);
    const { data } = await api.addparticipant({ id });
    console.log('from action reg donor sucess');
    console.log(data);
    dispatch({ type: 'REG_SUCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'REG_FAILURE', payload: error.message });
    console.log('from action reg donor fail');
    console.log(error);
  }
};
