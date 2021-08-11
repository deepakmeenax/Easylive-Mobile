const initialState = {
  loading: false,
  camps: [],
  banks: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_BANK_SUCESS':
      return {
        ...state,
        loading: false,
        banks: action.payload.data,
        error: '',
      };
    case 'FETCH_CAMP_SUCESS':
      return {
        ...state,
        loading: false,
        camps: action.payload.data,
        error: '',
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        banks: [],
        camps: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
