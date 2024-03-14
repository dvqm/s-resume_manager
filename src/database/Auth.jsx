import React, { useEffect, useState } from "react";
import { auth, signInWithGoogle } from "./firebase";
import { authStyles } from "./../mainTheme/localStyles.js";
import Dashboard from "./Dashboard";
import GoogleIcon from "@mui/icons-material/Google";

const Auth = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    user: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (JSON.stringify(user) !== JSON.stringify(state.user)) {
        setState({ ...state, user });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [state, setState]);

  const signIn = async () => {
    await signInWithGoogle();
  };

  const { SignBtn } = authStyles;

  return (
    <>
      {state.user ? (
        <Dashboard state={state} setState={setState} />
      ) : (
        <SignBtn variant="contained" size="small" onClick={signIn}>
          <GoogleIcon />
          <span> Sync with Google </span>
        </SignBtn>
      )}
    </>
  );
};

export default Auth;
