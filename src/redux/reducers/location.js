const initialState = {
  coord: [],
  formatedAddress: 'Please enter your location',
  serviceable: false,
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE_LOCATION':
      return {
        ...state,
        coord: [action.payload.coord[0], action.payload.coord[1]],
        formatedAddress: action.payload.formatedAddress,
        isLoading: true,
      };
    case 'LOCATION_CHEACK_SUCESS':
      return {
        ...state,
        serviceable: true,
        isLoading: false,
      };
    case 'LOCATION_CHEACK_FAILURE':
      return {
        ...state,
        isLoading: false,
        serviceable: false,
      };
    case 'LOCATION_ERROR':
      return {
        ...state,
        isLoading: false,
        serviceable: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
