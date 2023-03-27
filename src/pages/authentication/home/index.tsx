
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Paper, Typography } from '@mui/material'
import { useStyles } from "./styles"
import logo from 'assets/logo-main.svg'
import {Button } from '@mui/material'


const Home: React.FC = () => {
  const classes = useStyles()
  
  const history = useHistory()
  return (
    
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="subtitle1" className={classes.homeText} >
       CRUD de clientes
      </Typography>
      <Button variant="contained" color="primary" onClick={() => history.push('customers')}>Clientes</Button>
    </Paper>
    
  )
}

export default Home
