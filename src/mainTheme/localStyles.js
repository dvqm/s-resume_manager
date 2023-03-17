import Grid from '@mui/material/Grid';
import {
  Avatar,
  Button,
  Box,
  Drawer,
  FormControl,
  IconButton,
  TextField,
  Typography,
  Stack,
  List,
  ListItemButton,
  styled,
} from '@mui/material';

export const authStyles = {
  DashBox: styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: theme.palette.background.primary,
    borderRadius: '4px',
    '& > *': {
      alignSelf: 'flex-end',
    },
  })),

  UserInfo: styled('div')({
    display: 'flex',
    alignItems: 'center',
  }),

  Avatar: styled(Avatar)({
    width: 40,
    height: 40,
    marginRight: 5,
  }),

  UserName: styled(Typography)({
    fontWeight: 'bold',
  }),

  UserEmail: styled(Typography)({}),

  LoginBtn: styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.light,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  })),

  LogoutBtn: styled(Button)(({ theme }) => ({
    marginTop: 5,
    color: 'black',
    border: 'none',
    maxWidth: 100,
    fontSize: '0.8rem',
    '&:hover': {
      border: 'none',
      outline: `1px solid ${theme.palette.primary.main}`,
    },
  })),
};

export const contentsStyles = {
  BoxStyled: styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  })),
  DrawerStyled: styled(Drawer)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  })),
  IconButtonStyled: styled(IconButton)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      top: 10,
      left: 10,
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  })),
  ListStyled: styled(List)({
    backgroundColor: 'white',
    border: '1px lightgrey solid',
    margin: '1%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
  ListBtn: styled(ListItemButton)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    margin: '5px 20px 0',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  })),
  ListBtnSelected: styled(ListItemButton)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    margin: '5px 20px 0',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  })),
};

export const cvGrid = {
  CurrentCvGrid: styled(Grid)({
    display: 'flex',
    flexFlow: 'column nowrap',
  }),
  SidePanelGrid: styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
  }),
};

export const manageCvStyles = {
  ManageCvBox: styled(Box)({
    display: 'flex',
    flexFlow: 'row nowrap',
  }),
};

export const currentCvStyles = {
  ArticleStyled: styled('article')({
    margin: '40px 0',
  }),

  TextBlock: styled(Typography)({
    whiteSpace: 'pre-wrap',
  }),

  TextFieldStyled: styled(TextField)(({ theme }) => ({
    margin: '10px 40px',

    [theme.breakpoints.up('md')]: {
      minWidth: '40%',
    },
  })),

  FormControlRowStart: styled(FormControl)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'flex-start',
    },
  })),

  FormControlRowEnd: styled(FormControl)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'flex-end',
    },
  })),

  FormControlColumn: styled(FormControl)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  })),

  IconBtnStyled: styled(IconButton)({
    position: 'absolute',
    top: -10,
    right: -20,
  }),

  StackRow: styled(Stack)({
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    margin: '5px 0',
    '&>*': {
      margin: '0 5px',
    },
  }),
};

export const aboutStyles = {
  ApplicantPhoto: styled(Avatar)({
    width: 150,
    height: 150,
  }),

  FormControlName: styled(FormControl)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minWidth: '50%',
    },
  })),

  FormControlAvatar: styled(FormControl)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      margin: '40px auto',
    },

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      margin: '0 30px',
    },
  })),
};
