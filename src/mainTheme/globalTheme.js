import { createTheme } from '@mui/material/styles';

function remToPx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#87F1FA',
    },
    secondary: {
      main: '#0051FF',
    },
    bgPrim: {
      main: '#FFF700',
    },
    bgSec: {
      main: '#FF0000',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  spacing: 4,
});

export default mainTheme;
