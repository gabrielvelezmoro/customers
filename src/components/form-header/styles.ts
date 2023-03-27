import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => ({
  formTitle: {
    display: 'flex',
    width: '100%',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#000 !important'
  },

  formTitleLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  formButtonsRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  formTitleLeftIcon: {
    marginRight: 5
  },

  formTitleHelpIcon: {
    marginLeft: 7,
    marginTop: 2,
    opacity: 0.4
  },

  actionButton: {
    marginLeft: 5
  }
}))

export { useStyles }
