import Grid from "@mui/material/Grid";
import { PDFDownloadLink } from "@react-pdf/renderer";
import {
  Avatar,
  Button,
  Box,
  FormControl,
  IconButton,
  TextField,
  Typography,
  Stack,
  List,
  ListItemButton,
  styled,
} from "@mui/material";

// bs = base styles
const bs = {
  flex: {
    column: {
      nowrap: {
        display: "flex",
        flexFlow: "column nowrap",
      },
      wrap: {
        display: "flex",
        flexFlow: "column wrap",
      },
    },
    row: {
      nowrap: {
        display: "flex",
        flexFlow: "row nowrap",
      },
      wrap: {
        display: "flex",
        flexFlow: "row wrap",
      },
    },
    center: {
      display: "flex",
      justifyContent: "center",
    },
    items: {
      center: {
        display: "flex",
        alignItems: "center",
      },
      stretch: {
        display: "flex",
        alignItems: "stretch",
      },
      left: {
        display: "flex",
        alignItems: "flex-start",
      },
    },
  },

  text: {
    margin: {
      bottom: {
        marginBottom: "1rem",
      },

      vh: {
        margin: "0.625rem 2.5rem",
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
      width: "100%",
    },
    whiteSpace: {
      whiteSpace: "pre-wrap",
    },
  },
};

export const genericStyles = {
  ArticleStyled: styled("article")({
    marginTop: "1rem",
  }),

  SectionStyled: styled("section")({
    marginTop: 20,
  }),

  PreBlock: styled(Typography)(bs.text.whiteSpace, bs.text.margin.pre),

  ManageBtnsWrapper: styled(FormControl)(bs.flex.row.nowrap, {
    justifyContent: "flex-end",
  }),

  StackRow: styled(Stack)(() => [
    bs.flex.items.stretch,
    bs.flex.row.wrap,
    {
      justifyContent: "space-between",
    },
  ]),

  StackColumn: styled(Stack)(() => [
    bs.flex.items.stretch,
    bs.flex.column.wrap,
    {
      justifyContent: "space-between",
    },
  ]),

  StackRowRight: styled(Stack)(() => [
    bs.flex.row.wrap,
    {
      justifyContent: "flex-end",
      gap: 15,
    },
  ]),

  StackRowLeft: styled(Stack)(() => [
    bs.flex.row.wrap,
    {
      justifyContent: "flex-start",
      gap: 15,
    },
  ]),
};

export const resumeStyled = {
  ResumeLayout: styled(Grid)(({ theme }) => [
    bs.flex.items.stretch,
    {
      background: theme.palette.background.spBgGradient,
      justifyContent: "space-between",
      minHeight: "100vh",
      padding: "3.5rem",
      [theme.breakpoints.down("lg")]: {
        alignContent: "flex-start",
        gap: 80,
      },
      [theme.breakpoints.down("sm")]: {
        padding: 8,
        gap: "2rem",
        alignContent: "flex-start",
      },
    },
  ]),

  ResumeStyled: styled(Grid)(({ theme }) => [
    bs.flex.column.nowrap,
    {
      padding: "4rem",
      background: "white",
      boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.2)",
      borderRadius: "1rem",
      [theme.breakpoints.down("sm")]: {
        width: "95%",
        padding: "0.9rem",
      },
    },
  ]),

  SidePanelGrid: styled(Grid)(() => [bs.flex.column.nowrap]),
};

export const authStyles = {
  Container: styled(Box)(({ theme }) => [
    bs.flex.row.wrap,
    {
      background: theme.palette.background.tertiary,
      padding: "1.25rem",
      borderRadius: "1rem",
      justifyContent: "space-between",
      alignItems: "center",
      alignContent: "center",
      "& > *": {
        alignSelf: "center",
      },
    },
  ]),

  UserInfo: styled("div")(() => [
    bs.flex.column.nowrap,
    {
      justifyContent: "flex-start",
    },
  ]),

  Avatar: styled(Avatar)({
    width: "6vh",
    height: "6vh",
    margin: "1rem",
  }),

  UserName: styled(Typography)({
    fontWeight: "bold",
    fontSize: "1.1rem",
  }),

  UserEmail: styled(Typography)({
    fontSize: "1.1rem",
  }),

  SignBtn: styled(Button)(({ theme }) => [
    bs.flex.row.nowrap,
    {
      backgroundColor: theme.palette.background.tertiary,
      color: "blue",
      minWidth: "9rem",
      padding: "1rem 1.5rem",
      borderRadius: "0.4rem",
      alignSelf: "center",
      gap: 30,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  ]),
};

export const contentsStyles = {
  BoxStyled: styled(Box)(() => [
    bs.flex.row.nowrap,
    {
      margin: "0 1.5rem 0.5rem 1.5rem",
      justifyContent: "space-between",
    },
  ]),

  ListStyled: styled(List)(({ theme }) => [
    bs.flex.column.nowrap,
    bs.flex.center,
    {
      backgroundColor: theme.palette.background.tertiary,
      paddingTop: "1rem",
      borderRadius: "1rem",
      boxShadow: "8px 8px 16px rgba(0, 0, 0, 0.2)",
      paddingBottom: "1.5rem",
      [theme.breakpoints.down("lg")]: {
        position: "fixed",
        border: "2px darkgray solid",
        top: "15%",
        width: "83%",
        left: "8.4%",
        transform: "translateX(0%)",
      },
    },
  ]),

  ListBtn: styled(ListItemButton)(({ theme }) => [
    bs.flex.center,
    {
      gap: 30,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
      // '&>div>:last-child': {
      //   marginLeft: 10,
      // },
    },
  ]),

  ListBtnSelected: styled(ListItemButton)(() => [
    bs.flex.center,
    {
      gap: 30,
      backgroundColor: "lightBlue",
    },
  ]),

  IconButtonStyled: styled(IconButton)(({ theme }) => ({
    position: "absolute",
    right: -10,
    top: -10,

    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  })),
};

export const pdfStyles = {
  BoxStyled: styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      position: "fixed",
      width: "100%",
      left: "0%",
      top: "6rem",
    },
  })),

  IconButtonStyled: styled(IconButton)(({ theme }) => ({
    position: "absolute",
    right: 20,
    top: 80,

    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  })),
};

export const manageCvStyles = {
  ManageCvBox: styled(Box)(() => [
    bs.flex.row.nowrap,
    {
      margin: "2rem 0",
      justifyContent: "center",
      alignItems: "center",
      height: "3rem",
    },
  ]),
  IconButtonStyled: styled(IconButton)(({ theme }) => ({
    margin: "1rem 0",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  })),

  PDFDownloadLinkStyled: styled(PDFDownloadLink)(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  })),
};

export const aboutStyles = {
  EditCredentials: styled(FormControl)(bs.flex.column.nowrap),

  EditInfo: styled(FormControl)(({ theme }) => ({
    [theme.breakpoints.up("lg")]: [
      bs.flex.row.wrap,
      {
        justifyContent: "flex-start",

        "&>*:first-of-type": {
          flexGrow: 0,
        },
        "&>*:last-of-type": {
          flexGrow: 1,
        },
      },
    ],
  })),

  EditAvatar: styled(FormControl)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      margin: "2.5rem auto",
    },

    [theme.breakpoints.up("lg")]: [
      bs.flex.column.nowrap,
      {
        position: "relative",
        margin: "0 1.875rem",
      },
    ],
  })),

  Photo: styled(Avatar)(({ theme }) => ({
    width: 150,
    height: 150,
  })),

  ManagePhotoBtn: styled(IconButton)({
    position: "absolute",
    top: -10,
    right: -20,
  }),

  EditName: styled(FormControl)(bs.flex.column.nowrap),

  EditNameInput: styled(TextField)(bs.text.width, bs.text.margin.bottom),

  EditPosition: styled(TextField)(bs.text.margin.bottom),

  EditAddress: styled(FormControl)(({ theme }) => [
    bs.flex.row.wrap,
    {
      justifyContent: "space-between",

      "&>*:nth-of-type(2)": { marginLeft: 10, marginRight: 10 },
      [theme.breakpoints.down("lg")]: [
        bs.flex.column.wrap,
        {
          "&>*:nth-of-type(2)": { marginLeft: 0, marginRight: 0 },
        },
      ],
    },
  ]),

  AddrInput: styled(TextField)(() => [
    bs.text.margin.bottom,
    {
      flex: `1 0 auto`,
    },
  ]),

  EditContacts: styled(FormControl)(({ theme }) => [
    bs.flex.row.wrap,
    {
      justifyContent: "space-between",

      [theme.breakpoints.down("lg")]: bs.flex.column.wrap,
    },
  ]),

  ContactInput: styled(TextField)(() => [
    bs.text.margin.bottom,
    {
      width: "100%",
    },
  ]),

  ViewWrap: styled(Stack)(() => [
    bs.flex.row.wrap,
    {
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
    },
  ]),

  ViewMainInfo: styled(Stack)(({ theme }) => [
    {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: 20,

      [theme.breakpoints.up("lg")]: bs.flex.row.wrap,
    },
  ]),

  ViewTitle: styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
      ...bs.flex.column.wrap,
      alignItems: "flex-start",
      justifyContent: "flex-start",
      alignContent: "flex-start",
    },
  })),

  ViewAddress: styled("address")(({ theme }) => ({
    fontSize: "1.5rem",
    [theme.breakpoints.up("lg")]: bs.flex.row.wrap,
    [theme.breakpoints.down("lg")]: {
      fontSize: "1rem",
    },
  })),

  ViewContacts: styled(Stack)(({ theme }) => [
    bs.flex.column.nowrap,
    {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      alignContent: "flex-start",
      fontSize: "1.2rem",
      gap: 2,
    },
    {
      [theme.breakpoints.down("lg")]: {
        fontSize: "1rem",
      },
    },
  ]),

  ViewName: styled(Typography)({}),

  ViewPosition: styled(Typography)({}),
};

export const expertiseStyles = {
  TextStyled: styled(TextField)(bs.text.margin.bottom),
};
