import { createTheme } from '@mui/material/styles'

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#2614FE',
      light: '#5c6bc0',
      dark: '#5c6bc0',
      contrastText: '#fff !important'
    }
  },

  typography: {
    fontFamily: `"Inter", sans-serif`,
    fontSize: 14,
    allVariants: {
      color: '#605F6A'
    },
    caption: {
      fontSize: '14px !important'
    },
    button: {
      textTransform: 'none'
    },
    h5: {
      color: '#2614FE !important',
      fontSize: 20,
      fontWeight: 700
    }
  },

  shape: {
    borderRadius: 4
  },

  components: {
    MuiButton: { 
      styleOverrides: { 
        root: { 
          height: 35,
          paddingTop: 7, 
          paddingBottom: 6 
        } 
      } 
    },

    MuiCssBaseline: {
      styleOverrides: {
        '.MuiSelect-select': {
          padding: '4px 8px 4px 8px!important',
          width: '350px'
        },
        '.MuiInputLabel-outlined.MuiInputLabel-shrink': {
          backgroundColor: 'white',
          paddingLeft: '5px !important',
          paddingRight: '5px !important'
        },
        '.MuiOutlinedInput-root': {
          height: '2.0em',
          '& fieldset': {
            borderRadius: '25px !important',
          },
          marginBottom: '2px',
          padding: '15px 8px 15px 8px !important'
        },
        '*::-webkit-scrollbar': {
          backgroundColor: '#F3F6F9',
          width: '0.3em'
        },
        '*::-webkit-scrollbar-track': {
          WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)'
        },
        '.MuiToolbar-root': {
          height: '55px !important',
          minHeight: '55px !important'
        },
        '.MuiToolbar-root.MuiToolbar-gutters': {
          paddingLeft: 0,
          marginLeft: 0,
        },
        '.MuiTableCell-root': 
        {
          alignItems: 'center',
          padding: '5px !important',
          lineHeight: '1rem !important',
        },
        '.MuiTableCell-head': 
        {
          lineHeight: '1rem !important',
          fontWeight: 'bold',
          padding: '10px 5px 10px 5px !important',
          backgroundColor: '#FAFAFA !important'
        },
        '.MuiGrid-root': {
          flexGrow: 1,
          marginTop: '0px !important', 
          marginBottom: '5px !important',
          marginLeft: '0px !important'
        },
        '.MuiGrid-item': {
        },
        '.MuiSvgIcon-root': {
          color: '#5c6bc0'
        },
        '.MuiTypography-root': {
          color: '#605F6A !important'
        },
        '.MuiTypography-caption': {
          marginBottom: '0 !important',
          lineHeight: '1 !important',
          color: '#13100D !important'
        },
        '.MuiFormHelperText-root': {
          marginLeft: '0px !important'
        },
        '.MuiButton-root': {
          borderRadius: '25px !important',
        },
        'textarea': {
          resize: 'none',
          borderRadius: '12px !important',
          width: '100%',
          marginTop: '10px',
          padding: '10px',
          outline: 'none !important',
          border: '1px solid #C4C4C4',
          fontFamily: `"Inter", sans-serif`,
          fontSize: 14,
          color: '#605F6A',
          '&:focus': {
            border: '2px solid #2614FE'
          }
        }
      }
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        margin: 'dense',
        autoComplete: 'off',
        fullWidth: true
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          background: "#fff",
          borderRadius: '25px !important',
          "&:-webkit-autofill": {
            transitionDelay: "9999s",
            transitionProperty: "background-color, color",
          },
          paddingLeft: '7px !important',
          paddingRight: '5px !important',
          fontSize: '14px'
        },
      },
    },

    MuiInputLabel: {
      defaultProps: {
        shrink: true
      }
    },

    MuiButtonBase: {
      defaultProps: {
      }
    },

    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: '#605F6A',
        },
        tooltip: {
          backgroundColor: '#605F6A',
          fontSize: '0.9em'
        }
      }
    },
    
    MuiIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '14px !important'
        },
      },
    },
  },

  zIndex: {
    appBar: 1200,
    drawer: 1100
  },

  transitions: {
    duration: {
      standard: 300,
    }
  }
})
