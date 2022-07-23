import axios from "axios";
import { setCookie } from "nookies";
import { loginFailure, loginStart, loginSuccess } from "./auth-actions";

export const login = async (values, dispatch) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_HOST + process.env.NEXT_PUBLIC_LOGIN,
      {
        ...values,
      }
    );
    if (data?.status === true) {
      setCookie(null, "user", JSON.stringify(data?.description), {
        path: "/",
      });
      dispatch(loginSuccess(data?.description));
      return Promise.resolve(true);
    } else {
      dispatch(
        loginFailure(
          data?.description || "Something went wrong! Please try again later"
        )
      );
      return Promise.resolve(false);
    }
  } catch (err) {
    console.log("err");
    console.log(err.toString());
    dispatch(loginFailure());
    return Promise.resolve(false);
  }
  //   try {
  //     const res = await axios.post("http://localhost:8800/api/auth/login", user);
  //     dispatch(loginSuccess(res.data));
  //   } catch (err) {
  //     dispatch(loginFailure());
  //   }
};
