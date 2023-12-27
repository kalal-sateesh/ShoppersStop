import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

const systemIsDarkTheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const initialTheme =
  localStorage.getItem("isDark") != null
    ? localStorage.getItem("isDark") === "true"
    : systemIsDarkTheme;

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(initialTheme);

  const lightToDarkHandler = () => setIsDark(true);
  const darkToLightHandler = () => setIsDark(false);

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{ isDark, lightToDarkHandler, darkToLightHandler }}
    >
      {children}
      {isDark && (
        <style>
          {`body{
        background-color:black;
        color:white;
       }`}
        </style>
      )}
    </ThemeContext.Provider>
  );
};
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ThemeProvider;
