import React from 'react';
import { auth, signInWithGoogle, logout, getData } from './firebase';
import { authStyles } from './../mainTheme/localStyles.js';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      user: null,
      loading: true,
      error: null,
    };

    this.signIn = this.signIn.bind(this);
  }

  setToState = (...params) => {
    let i = 0;

    const recursiveSetToState = () => {
      if (i >= params.length) return;

      const key = params[i];

      const value = params[i + 1];

      i += 2;

      this.setState({ ...this.state, [key]: value }, () => {
        recursiveSetToState();
      });
    };

    recursiveSetToState();
  };

  async signIn() {
    await signInWithGoogle();

    const cvBase = await getData();

    if (this.state.user) this.props.helper.setState('cvBase', cvBase);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => this.setToState('user', user));
  }

  render = () => {
    const { LoginBtn } = authStyles;

    return (
      <>
        {this.state.user ? (
          <Dashboard
            state={this.state}
            history={this.props.history}
            setToState={this.setToState}
          />
        ) : (
          <LoginBtn variant='contained' size='small' onClick={this.signIn}>
            Connect with Google
          </LoginBtn>
        )}
      </>
    );
  };
}

class Dashboard extends React.Component {
  logout = () => {
    logout();

    this.props.setToState('user', null);
  };

  render() {
    const { photoURL, displayName, email } = this.props.state.user;

    const { Container, Avatar, UserInfo, UserName, UserEmail, LogoutBtn } =
      authStyles;

    return (
      <>
        {this.props.state.user !== null && (
          <Container>
            <UserInfo>
              <Avatar alt='User' src={photoURL} />
              <UserName variant='subtitle1'>{displayName}</UserName>
            </UserInfo>
            <UserEmail variant='body1'>{email}</UserEmail>
            <LogoutBtn
              variant='outlined'
              color='primary'
              size='small'
              onClick={this.logout}
            >
              Logout
            </LogoutBtn>
          </Container>
        )}
      </>
    );
  }
}

export default Auth;
