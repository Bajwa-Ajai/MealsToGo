import React, { useState, createContext } from "react";
import {
  loginRequest,
  registerRequest,
  signOutRequest,
} from "./authentication.service";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState([]);

  const auth = getAuth();

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const clearError = () => {
    setError([]);
  };

  const onLogin = (email, password) => {
    // console.log("ohno");
    setIsLoading(true);
    loginRequest(email, password)
      .then((userCredential) => {
        setIsLoading(false);
        setUser(userCredential.user);
        // console.log(userCredential);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };
  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: The repeated password does not match the passsword");
      return;
    }
    setIsLoading(true);
    registerRequest(email, password)
      .then((userCredential) => {
        setIsLoading(false);
        setUser(userCredential);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };
  const onLogout = () => {
    signOutRequest()
      .then(() => {
        setUser(null);
      })
      .catch((er) => {
        console.log(er);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        isAuthenticated: !!user,
        onLogin,
        clearError,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
