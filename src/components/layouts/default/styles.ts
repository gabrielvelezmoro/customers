import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const drawerWidth = 260
const contentLeftOpen = drawerWidth
const contentLeftClose = 55

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
    '*:hover::-webkit-scrollbar': {
      width: '0.6em'
    },
  },

  mainContentWrapper: {
    display: 'flex',
    grow: 1,
    position: 'fixed',
    top: '45px',
    height: 'calc(100vh - 40px)',
    overflow: 'overlay',
    padding: '20px 2px 10px 4px'
  },

  mainContentWrapperOpen: {
    left: contentLeftOpen,
    width: `calc(100% - ${contentLeftOpen}px)`,
    transition: theme.transitions.create(['left', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.standard,
    }),
  },

  mainContentWrapperClose: {
    left: contentLeftClose,
    width: `calc(100% - ${contentLeftClose}px)`,
    transition: theme.transitions.create(['left', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.standard,
    })
  },
}));

export { useStyles }
