import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#157DD2',
      main: '#2267B1',
      dark: '#0d47a1',
    },
    secondary: {
      light: '#d32f2f',
      main: '#BF311A',
      dark: '#b71c1c',
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
    typography: {
      useNextVariants: true,
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    },
  },
});

export default theme;
