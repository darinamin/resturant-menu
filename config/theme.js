// import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
// import { getTheme } from "../helpers/theme";

const lightTheme = {
  colors: {
    primary: "#ffa500",
    secondary: "#416d64",
    danger: "#f85c50",
    success: "#008000",
    default: "#000",
    bg: "#f4f4f4",
  },
  alphaColors: {
    primary: "#ffa50045",
    secondary: "#416d64045",
    danger: "#f74538",
    success: "#008000045",
    default: "#000",
  },
  hovers: {
    primary: "#063c3c",
    secondary: "#6e6964",
    danger: "#b33636",
  },
  buttons: {
    small: "5px 10px",
    default: "4px 12px",
    large: "10px 20px",
  },
  layers: {
    target: 2000,
    overlay: 100,
  },
};

const Theme = ({ children }) => {
  //   const [theme, setTheme] = useState();
  //   useEffect(() => {
  //     const __theme = getTheme();
  //     if (__theme) setTheme(__theme);
  //     else setTheme(process.env.NEXT_PUBLIC_SITE_THEME_DEFAULT); //default theme
  //   }, []);

  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default Theme;
