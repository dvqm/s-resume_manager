import React, { useContext, useEffect, useState } from 'react';
import { auth, signInWithGoogle, logout, getData } from './firebase';
import { authStyles } from './../mainTheme/localStyles.js';
import Dashboard from './Dashboard';
import { InitialState } from '../state/context';

const Auth = (props) => {
  const { resumesDispatch} = useContext(InitialState);
  const [state, setState] = useState({
    email: '',
    password: '',
    user: null,
    loading: true,
    error: null,
  });


  useEffect(() => {
    auth.onAuthStateChanged((user) => setState({ ...state, user }));
  }, [state])

  const signIn = async () => {
    await signInWithGoogle();

    const resumes = await getData();

    if (state.user) resumesDispatch({ t: 'RES_LOAD', p: resumes });
  }

  const { LoginBtn } = authStyles;

  return <>
    {state.user ? (
      <Dashboard
        state={state}
        history={props.history}
        setState={setState}
      />
    ) : (
      <LoginBtn variant='contained' size='small' onClick={signIn}>
        Connect with Google
      </LoginBtn>
    )}
  </>
}

export default Auth;
