import { Avatar, Button, Box, Typography, styled } from '@mui/material';

export const authStyles = {
  DashBox: styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: theme.palette.bgPrim.main,
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

  LogoutBtn: styled(Button)({
    maxWidth: 100,
    fontSize: '0.8rem',
  }),
};

export const contentsStyles = {};

export const manageCvStyles = {};

export const currentCvStyles = {};
