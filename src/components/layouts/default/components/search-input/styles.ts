import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center', 
      width: 400, 
      height: 30,
      borderRadius: '25px !important',
      fontSize: '14px'
    },
  }),
)

export { useStyles }
