import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithPopup,
  updateProfile,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //  account creation with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email password
  const loginUserWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Email verification
  const verifyUserEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // Update user name
  const updateUserName = (userName) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
    });
  };
  const updateUserProfile = (userName, userImage) => {
    // Construct the update object dynamically
    const updateData = { displayName: userName };

    if (userImage && Object.keys(userImage).length !== 0) {
      updateData.photoURL = userImage;
    }

    // Update the user profile
    return updateProfile(auth.currentUser, updateData);
  };

  // Send reset password email
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // login with google
  const googlelogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Logout user
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.emailVerified) {
        setUser(currentUser);
      } else {
        setUser(null);
        logout();
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUserWithEmailPassword,
    verifyUserEmail,
    updateUserName,
    updateUserProfile,
    resetPassword,
    googlelogin,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
