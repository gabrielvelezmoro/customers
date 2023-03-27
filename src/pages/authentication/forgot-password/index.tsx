import React, { useState, useCallback, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, TextField, Button, Grid, Link, Paper, LinearProgress, Alert, Typography } from '@mui/material'
import { useStyles } from './styles'
import logoImage from 'assets/logo.svg'
import backgroundLogo from 'assets/finteto-logo-background.png'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import LoginFooter from 'components/login-footer'
import api from 'services/api'

interface IForgotPasswordFormData {
  email: string
}

const ForgotPassword: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [mainError, setMainError] = useState('')

  const firstInputElement = useRef(null)
  const history = useHistory()
	const classes = useStyles()

	const validationSchema = yup.object().shape({
    name: yup.string().required('Nome is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is requred')
  })

  const { register, handleSubmit, formState: { errors } } = useForm<IForgotPasswordFormData>({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = useCallback(
    async (data: IForgotPasswordFormData) => {
      try {
        setIsLoading(true)

        await api.post('/password/forgot', {
          email: data.email
        })

        setIsLoading(false)
        history.push('/')
      } catch (err) {
        setIsLoading(false)
        setMainError('Erro ao solicitar reset de senha!')
      }
    },
    [history],
  )

  const handleChange = (formField: any) => {
    setMainError('')
  }

	return (
		<Box className={classes.container}>
			<Box className={classes.mainWrapper}>
        <Box className={classes.loginWrapper}>
          <Box className={classes.logoWrapper}>
            <img src={logoImage} className={classes.logoImage} alt="Logo" />
          </Box>

          <Paper elevation={3} className={classes.paperWrapper}>
            <Box 
              component="form" 
              onSubmit={handleSubmit(onSubmit)} 
              noValidate 
              data-testid="form"
              className={classes.formBox}
            >
              <h3>Recuperar senha</h3>
              
              <Grid container item xs={12} spacing={0}>
                <Grid item xs={12}>
                  <Typography variant="caption" display="block" gutterBottom>
                    Email *
                  </Typography>
                  <TextField
                    id="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    variant="outlined"
                    margin="dense"
                    size="small"
                    fullWidth={true}
                    autoFocus
                    inputRef={firstInputElement}
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      maxLength: 100
                    }}
                    {...register("email",
                      { onChange: (e) => handleChange(e) }
                    )}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                className={classes.mainButton}
              >
                Recuperar
              </Button>

              <Grid container>
                <Grid item xs>
                </Grid>
                
                <Grid item xs className={classes.signupLink}>
                  <Link href="/" variant="body2" data-testid="signup-link">
                    Voltar ao Login
                  </Link>
                </Grid>
              </Grid>

              {isLoading && (
                <LinearProgress className={classes.linearProgress} />
              )}

              {mainError !== '' && (
                <Alert severity="error" className={classes.alert}>{mainError}</Alert>
              )}
            </Box>
          </Paper>
        </Box>

        <LoginFooter />
			</Box>

      <Box className={classes.backgroundWrapper}>
        <Box className={classes.backgroundTransparencyBlue}>
          <Box className={classes.backgroundTransparencyBlack}>
            <img src={backgroundLogo}  className={classes.backgroundLogo} />
          </Box>
        </Box>
      </Box>
  	</Box>
	)
}

export default ForgotPassword
