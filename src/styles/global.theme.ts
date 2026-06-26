import { createTheme } from '@mui/material/styles';

export const GLOBAL_MUI_THEME = createTheme({
  palette: {
    resume: {
      50: '#f5f5f5',
      100: '#e0e0e0',
      200: '#cccccc',
      300: '#b3b3b3',
      400: '#8c8c8c',
      500: '#666666',
      600: '#4d4d4d',
      700: '#333333',
      800: '#1a1a1a',
      900: '#0a0a0a',
    },
    primary: {
      main: '#1a1a1a',
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '& > .MuiSwitch-thumb': {
            backgroundColor: '#FFFFFF',
          },
          '&.Mui-checked > .MuiSwitch-thumb': {
            backgroundColor: '#666666', // resume 500 variant
          },
          '& + .MuiSwitch-track': {
            backgroundColor: '#e0e0e0', // resume 100 variant
          },
          '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#e0e0e0', // resume 100 variant
          },
        },
      },
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    resume: Palette['grey'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    resume?: PaletteOptions['grey'];
  }
}
