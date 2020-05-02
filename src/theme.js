import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'

// Mostly using the default theme without personalisation.
// Any personalisation will be added inside the object passed to `createMuiTheme`.
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      background: {
        default: '#F0F0F0',
      },
    },
    typography: {
      fontFamily: 'Avenir',
      h5: {
        fontWeight: 600,
      },
    },
    overrides: {
      MuiButton: {
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        label: {
          fontWeight: 600,
          textTransform: 'none',
        },
      },
      MuiCard: {
        root: {
          boxShadow: '0 0 10px gray',
        },
      },
    },
  }),
)

export default theme
