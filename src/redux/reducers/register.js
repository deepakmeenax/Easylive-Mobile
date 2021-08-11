const initialState = {
  loading: false,
  data: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REG_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'REG_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: '',
      };
    case 'REG_FAILURE':
      return {
        ...state,
        loading: false,
        mates: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
