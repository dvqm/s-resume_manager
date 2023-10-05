import { logout } from './firebase';
import { authStyles } from './../mainTheme/localStyles.js';

const Dashboard = (props) => {
  logout = () => {
    logout();
    props.setToState('user', null);
  };

  const { photoURL, displayName, email } = props.state.user;

  const { Container, Avatar, UserInfo, UserName, UserEmail, LogoutBtn } =
    authStyles;

  return <>
    {props.state.user !== null && (
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
          onClick={logout}
        >
          Logout
        </LogoutBtn>
      </Container>
    )}
  </>
}

export default Dashboard;
