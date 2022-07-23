import { constants } from "./auth-reducer";

export const loginStart = () => ({
  type: constants.LOGIN_START,
});
export const loginSuccess = (user) => ({
  type: constants.LOGIN_SUCCESS,
  payload: {
    ...user,
  },
});
export const loginFailure = (message) => ({
  type: constants.LOGIN_FAILURE,
  payload: {
    message: message,
  },
});
export const logout = () => ({
  type: constants.LOGOUT,
});
