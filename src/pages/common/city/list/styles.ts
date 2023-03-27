import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  },

  container: {
    maxHeight: 'calc(100vh - 280px)',
  },

  paper: {
    padding: '20px',
    minHeight: 'calc(100vh - 80px)',
    maxHeight: 'calc(100vh - 80px)',
    width: '100%'
  },

  formTitle: {
    display: 'flex',
    width: '100%',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.palette.primary.main
  },

  formTitleLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 800
  },

  formTitleLeftIcon: {
    marginRight: 5
  }
}))

export { useStyles }
