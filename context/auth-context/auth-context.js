import { useState, createContext, useReducer, useEffect } from "react";
// reducer
import AuthReducer from "./auth-reducer";

import { parseCookies } from "nookies";
import { loginSuccess } from "./auth-actions";

// context initial state
const INITIAL_STATE = {
  user: null,
  loading: false,
  error: false,
  message: null,
  status: null,
};

// create context
export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    const cookies = parseCookies(null, { path: "/" });

    if (cookies?.user) {
      dispatch(loginSuccess(JSON.parse(cookies?.user)));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        status: state.status,
        message: state.message,
        dispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
