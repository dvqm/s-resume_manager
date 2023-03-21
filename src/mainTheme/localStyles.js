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

// bs = base styles
const bs = {
  flex: {
    column: {
      nowrap: {
        display: 'flex',
        flexFlow: 'column nowrap',
      },
      wrap: {
        display: 'flex',
        flexFlow: 'column wrap',
      },
    },
    row: {
      nowrap: {
        display: 'flex',
        flexFlow: 'row nowrap',
      },
      wrap: {
        display: 'flex',
        flexFlow: 'row wrap',
      },
    },
    center: {
      display: 'flex',
      justifyContent: 'center',
    },
    items: {
      center: {
        display: 'flex',
        alignItems: 'center',
      },
      stretch: {
        display: 'flex',
        alignItems: 'stretch',
      },
    },
  },

  text: {
    margin: {
      bottom: {
        marginBottom: '15px',
      },

      vh: {
        margin: '10px 40px',
      },

      v: {
        marginTop: 40,
        marginBottom: 40,
      },

      h: {
        marginLeft: 40,
        marginRight: 40,
      },
      pre: {
        marginLeft: 30,
        marginRight: 20,
      },
    },
    width: {
      width: '100%',
    },
    whiteSpace: {
      whiteSpace: 'pre-wrap',
    },
  },
};

export const genericStyles = {
  ArticleStyled: styled('article')({
    margin: '10px 0',
  }),

  SectionStyled: styled('section')({
    marginTop: 20,
  }),

  PreBlock: styled(Typography)(bs.text.whiteSpace, bs.text.margin.pre),

  ManageBtnsWrapper: styled(FormControl)(bs.flex.row.nowrap, {
    justifyContent: 'flex-end',
  }),

  StackRow: styled(Stack)(() => [
    bs.flex.items.center,
    bs.flex.row.wrap,
    {
      justifyContent: 'flex-start',
      margin: '5px 0',
      '&>*': {
        margin: '0 5px',
      },
    },
  ]),
};

export const cvGrid = {
  RootGrid: styled(Grid)(bs.flex.items.stretch),

  CurrentCvGrid: styled(Grid)(bs.flex.column.nowrap),

  SidePanelGrid: styled(Grid)(({ theme }) => [
    bs.flex.column.nowrap,
    {
      backgroundImage: theme.palette.background.spBgGradient,
    },
  ]),
};

export const authStyles = {
  Container: styled(Box)(({ theme }) => [
    bs.flex.column.nowrap,
    {
      padding: '20px',
      borderRadius: '4px',
      '& > *': {
        alignSelf: 'flex-end',
      },
    },
  ]),

  UserInfo: styled('div')(bs.flex.center),

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
    fontSize: '0.875rem',
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

  ListStyled: styled(List)(({ theme }) => [
    bs.flex.column.nowrap,
    bs.flex.center,
    {
      backgroundColor: theme.palette.background.tertiary,
      border: '1px lightgrey solid',
      margin: '1%',
    },
  ]),

  ListBtn: styled(ListItemButton)(({ theme }) => [
    bs.flex.center,
    {
      margin: '15px 20px 0',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
      '&>div>:last-child': {
        marginLeft: 10,
      },
    },
  ]),

  ListBtnSelected: styled(ListItemButton)(({ theme }) => [
    bs.flex.center,
    {
      margin: '0px 10px 0',
    },
  ]),
};

export const manageCvStyles = {
  ManageCvBox: styled(Box)(bs.flex.row.nowrap),
};

export const aboutStyles = {
  EditCredentials: styled(FormControl)(bs.flex.column.nowrap),

  EditInfo: styled(FormControl)(({ theme }) => ({
    [theme.breakpoints.up('md')]: [
      bs.flex.row.wrap,
      {
        justifyContent: 'flex-start',

        '&>*:first-of-type': {
          flexGrow: 0,
        },
        '&>*:last-of-type': {
          flexGrow: 1,
        },
      },
    ],
  })),

  EditAvatar: styled(FormControl)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      margin: '40px auto',
    },

    [theme.breakpoints.up('md')]: [
      bs.flex.column.nowrap,
      {
        position: 'relative',
        margin: '0 30px',
      },
    ],
  })),

  Photo: styled(Avatar)(({ theme }) => ({
    width: 150,
    height: 150,
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
    },
  })),

  ManagePhotoBtn: styled(IconButton)({
    position: 'absolute',
    top: -10,
    right: -20,
  }),

  EditName: styled(FormControl)(bs.flex.column.nowrap),

  EditNameInput: styled(TextField)(bs.text.width, bs.text.margin.bottom),

  EditPosition: styled(TextField)(bs.text.margin.bottom),

  EditAddress: styled(FormControl)(({ theme }) => [
    bs.flex.row.wrap,
    {
      justifyContent: 'space-between',

      '&>*:nth-of-type(2)': { marginLeft: 10, marginRight: 10 },
      [theme.breakpoints.down('md')]: [
        bs.flex.column.wrap,
        {
          '&>*:nth-of-type(2)': { marginLeft: 0, marginRight: 0 },
        },
      ],
    },
  ]),

  AddrInput: styled(TextField)(({ theme }) => [
    bs.text.margin.bottom,
    {
      flex: `1 0 auto`,
    },
  ]),

  EditContacts: styled(FormControl)(({ theme }) => [
    bs.flex.row.wrap,
    {
      justifyContent: 'space-between',

      [theme.breakpoints.down('md')]: bs.flex.column.wrap,
    },
  ]),

  ContactInput: styled(TextField)(({ theme }) => [
    bs.text.margin.bottom,
    {
      flexBasis: `calc(50% - 10px)`,
    },
  ]),

  ViewWrap: styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: bs.flex.row.wrap,
  })),

  ViewMainInfo: styled(Stack)(({ theme }) => ({
    justifyContent: 'center',
    marginLeft: 30,

    [theme.breakpoints.up('md')]: bs.flex.column.nowrap,
  })),

  ViewTitle: styled(Stack)(({ theme }) => ({
    '&>*:last-of-type': { marginLeft: 30 },
    [theme.breakpoints.up('md')]: bs.flex.column.wrap,
  })),

  ViewAddress: styled('address')(({ theme }) => ({
    [theme.breakpoints.up('md')]: bs.flex.row.wrap,
  })),

  ViewContacts: styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: bs.flex.row.wrap,
  })),

  ViewName: styled(Typography)({}),

  ViewPosition: styled(Typography)({}),
};

export const expertiseStyles = {
  TextStyled: styled(TextField)(bs.text.margin.bottom),
};
