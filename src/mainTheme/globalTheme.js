import { createTheme } from '@mui/material/styles';

function remToPx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const mainTheme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#3447F0',
    },
    secondary: {
      main: '#0051FF',
    },
    background: {
      primary: '#FFF700',
      secondary: '#FF0000',
      tertiary: '#fff',
      spBgGradient:
        'linear-gradient(225deg, rgba(52,71,240,0.6) 0%, rgba(255,247,0,0.6) 100%)',
    },
  },
  typography: {
    h2: {
      fontSize: '2rem',
    },

    h3: {
      fontSize: '1.7rem',
    },

    h4: {
      fontSize: '1.4rem',
    },
  },
  components: {
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
    MuiDivider: {
      stylesOverride: {},
    },
  },
});

export default mainTheme;
