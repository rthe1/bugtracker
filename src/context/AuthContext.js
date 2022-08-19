import {auth} from "../firebase";
import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {
  
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  const googleSignOut = () => {
    signOut(auth);
  }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log(currentUser)
      })
    
      return () => {
        unsubscribe();
     }
    }, [])
    

  return(
    <AuthContext.Provider value={{googleSignIn, googleSignOut, user}}>
      {children}
    </AuthContext.Provider>
  )
} 

export const UserAuth = () => {
  return useContext(AuthContext)
}