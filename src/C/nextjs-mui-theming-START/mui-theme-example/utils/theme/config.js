// utils/theme/config.js
import { createTheme, createMuiTheme } from '@mui/material'

const themeOptions = {
  typography: {
    h2: {
        fontFamily: 'Lato',
    }
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
};

const theme = createTheme(themeOptions);

export { theme }