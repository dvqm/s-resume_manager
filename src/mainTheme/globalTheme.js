import { createTheme } from '@mui/material/styles';

function remToPx(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const mainTheme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#87F1FA',
    },
    secondary: {
      main: '#0051FF',
    },
    background: {
      primary: '#FFF700',
      secondary: '#FF0000',
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
