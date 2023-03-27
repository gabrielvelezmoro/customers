import React from 'react'
import { Paper, Typography } from '@mui/material'
import { useStyles } from "./styles"
import logo from 'assets/logo-main.svg'

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <Paper elevation={3} className={classes.paper}>
      <img src={logo} alt="Finteto" className={classes.logo} />
      <Typography variant="subtitle1" className={classes.homeText} >
        financiamento imobiliário inteligente
      </Typography>
    </Paper>
  )
}

export default Home
