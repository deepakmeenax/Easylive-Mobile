const initialState = {
  user: [],
  isLogin: false,
  authtoken: null,
  error: null,
  isExist: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VERIFY_OTP_SUCESS':
      return {
        ...state,
        isExist: action.payload.isExist === null ? false : true,
        isLogin: action.payload.isExist === null ? false : true,
        user: action.payload.isExist,
        authtoken: action.payload.token,
      };
    case 'VERIFY_OTP_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'NEW_USER_SUCESS':
      return {
        ...state,
        user: action.payload.user,
        isLogin: true,
        authtoken: action.payload.token,
      };
    case 'NEW_USER_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        user: [],
        isLogin: false,
        error: null,
        authtoken: null,
        isExist: false,
      };
    case 'LOGOUT_USER_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
