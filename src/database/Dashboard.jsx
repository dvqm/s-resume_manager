import { logout } from './firebase';
import { authStyles } from './../mainTheme/localStyles.js';
import GoogleIcon from '@mui/icons-material/Google';

const Dashboard = ({ state, setState }) => {
  const handleLogout = async () => {
    try {
      await logout();
      setState(prevState => ({ ...prevState, user: null }));
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const { photoURL, displayName, email } = state.user;

  const { Container, Avatar, UserInfo, UserName, UserEmail, SignBtn } =
    authStyles;

  return <>
    {state.user !== null && (
      <Container>
        <SignBtn
          variant='outlined'
          color='primary'
          size='small'
          onClick={handleLogout}
        >
          <GoogleIcon />
          <span>Logout</span>
        </SignBtn>
        <UserInfo>
          <Avatar alt='User' src={photoURL} />
          <UserName variant='subtitle1'>{displayName}</UserName>
          <UserEmail variant='body1'>{email}</UserEmail>
        </UserInfo>
      </Container>
    )}
  </>
}

export default Dashboard;
