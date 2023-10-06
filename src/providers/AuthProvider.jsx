import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

useEffect(()=>{
  const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
       setUser(currentUser);
       console.log('observing current user' , currentUser)
    });
    return ()=>{
        unSubscribe();
    }
},[])

  const authInfo = { user, createUser, signInUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};

/* 1) create context and export it
 *  2) set provider with value
 *  3) use the auth provider in the main.jsx file
 *  4) access children in the auth provider component as children  and use it as the middle of the provider
 */
