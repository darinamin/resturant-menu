export const constants = {
  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT: "LOGOUT",
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case constants.LOGIN_START:
      return {
        user: null,
        loading: true,
        error: false,
      };
    case constants.LOGIN_SUCCESS:
      return {
        user: { ...action.payload },
        loading: false,
        error: false,
      };
    case constants.LOGIN_FAILURE:
      return {
        user: null,
        loading: false,
        error: action.payload.message,
      };
    case constants.LOGOUT:
      return {
        user: null,
        loading: false,
        error: false,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
