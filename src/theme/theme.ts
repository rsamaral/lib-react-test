import { createTheme } from '@mui/material/styles';

// Define the custom theme with typography variants
const theme = createTheme({
  typography: {
    fontFamily: 'Comfortaa, sans-serif',
    h1: {
      fontWeight: 'bold',
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 'bold',
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    h5: {
      fontWeight: 'bold',
      fontSize: '1.25rem',
      lineHeight: 1.6,
    },
    h6: {
      fontWeight: 'bold',
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body1: {
      fontWeight: 'normal',
      fontSize: '1rem',
    },
    body2: {
      fontWeight: 'normal',
      fontSize: '0.875rem',
    },
    caption: {
      fontWeight: 'normal',
      fontSize: '0.75rem',
    },
    overline: {
      fontWeight: 'normal',
      fontSize: '0.75rem',
    },
    // Add other typography variants if needed
  },
});

export default theme;
