import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  },

  container: {
    maxHeight: 'calc(100vh - 320px)',
  },

  paper: {
    padding: '20px',
    minHeight: 'calc(100vh - 110px)',
    maxHeight: 'calc(100vh - 110px)',
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

  formContainer: {
    margin: '12px 20px 10px 0px',
    width: '99%',
    maxHeight: 'calc(100vh - 200px)',
    overflow: 'overlay',
    paddingRight: '7px'
  },

  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },

  iconHead: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    width: 1,
    minWidth: 1,
    maxWidth: 1,
  },

  tableIcon: {
  	margin: '-5px',
  	padding: '-5px',
  	lineHeight: 0,
  	fontSize: 20,
  	cursor: 'pointer',
  	color: theme.palette.primary.main,
  },

  actionButton: {
    marginLeft: '10px !important',
  },
  
  submitButton: {
    marginTop: 20,
    justifyContent: 'flex-end',
  },

  checkBox: {
    marginTop: 3,
    marginBottom: 5
  },

  gridPaper: {
    padding: '20px 17px 10px 10px', 
    marginTop: '20px'
  }
}))

export { useStyles }
