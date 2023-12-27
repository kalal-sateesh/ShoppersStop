import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext();

const initUserData = JSON.parse(localStorage.getItem("userData"));

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(initUserData || {});

  const { isAuth } = useContext(AuthContext);

  const addUserDataHandler = (data) => setUserData(data);
  const clearUserDataHandler = () => setUserData({});

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    if (!isAuth) {
      setUserData({});
    }
  }, [isAuth]);

  return (
    <UserContext.Provider
      value={{ userData, addUserDataHandler, clearUserDataHandler }}
    >
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
