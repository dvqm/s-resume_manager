import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let mainTheme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#0000FF',
    },
    secondary: {
      main: '#0051FF',
    },
    background: {
      primary: '#FFF700',
      secondary: '#FF0000',
      tertiary: '#fff',
      spBgGradient:
        'linear-gradient(81deg, #7B3EFF 17.17%, #A666FF 43.85%, #FC5CFF 72.24%, #FFDB00 99.78%)',
    },
  },
  typography: {
    h2: {
      fontSize: '1.3rem',
    },

    h3: {
      fontSize: '1.2rem',
    },

    h4: {
      fontSize: '1rem',
    },
    subtitle1: {
      fontWeight: 'bold',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '0.6rem 0',
        },
      },
    },
    MuiChip: {
      variants: [
        {
          props: { variant: 'skill' },
          style: {
            fontSize: '1rem',
            color: '#000',
            border: 'none',
            backgroundColor: 'inherit',
          },
        },
        {
          props: { variant: 'link' },
          style: {
            fontSize: '1rem',
            color: '#00E',
            border: 'none',
            backgroundColor: 'inherit',

            '&:hover, &:focus, &:active': {
              backgroundColor: 'inherit',
            },
          },
        },
      ],
    },
  },
});

mainTheme = responsiveFontSizes(mainTheme);

export default mainTheme;
