import React, { useState, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Typography, Box, TextField, Button, Grid, Link, Paper, LinearProgress, Alert } from '@mui/material'
import { useStyles } from './styles'
import logoImage from 'assets/logo.svg'
import backgroundLogo from 'assets/finteto-logo-background.png'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import LoginFooter from 'components/login-footer'
import api from 'services/api'

interface IResetPasswordFormData {
  password: string
  password_confirmation: string
}

const ResetPassword: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [mainError, setMainError] = useState('')

  const history = useHistory()
  const location = useLocation()

	const classes = useStyles()

	const validationSchema = yup.object().shape({
    password: yup.string().required('Senha obrigatória'),
    password_confirmation: yup.string().oneOf(
      [yup.ref('password'), null],
      'Confirmação incorreta',
    ),
  })

  const { register, handleSubmit, formState: { errors } } = useForm<IResetPasswordFormData>({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = useCallback(
    async (data: IResetPasswordFormData) => {
      try {
        setIsLoading(true)

        const { password, password_confirmation } = data
        const token = location.search.replace('?token=', '')

        if (!token) {
          throw new Error()
        }

        await api.post('/password/reset', {
          password,
          password_confirmation,
          token,
        })

        setIsLoading(false)
        history.push('/')
      } catch (err) {
        setIsLoading(false)
        setMainError('Erro ao resetar a senha!')
      }
    },
    [location.search, history],
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
              <h3>Resetar senha</h3>

              <Grid container item xs={12} spacing={0}>
                <Grid item xs={12}>
                  <Typography variant="caption" display="block" gutterBottom>
                    Senha *
                  </Typography>
                  <TextField
                    id="password"
                    type="password"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                    variant="outlined"
                    margin="dense"
                    size="small"
                    fullWidth={true}
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      maxLength: 30
                    }}
                    {...register("password",
                      { onChange: (e) => handleChange(e) }
                    )}
                  />
                </Grid>
              </Grid>

              <Grid container item xs={12} spacing={0}>
                <Grid item xs={12}>
                  <Typography variant="caption" display="block" gutterBottom>
                    Confirmação da senha *
                  </Typography>
                  <TextField
                    id="password_confirmation"
                    type="password_confirmation"
                    error={!!errors.password_confirmation}
                    helperText={errors?.password_confirmation?.message}
                    variant="outlined"
                    margin="dense"
                    size="small"
                    fullWidth={true}
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      maxLength: 30
                    }}
                    {...register("password_confirmation",
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
                Resetar
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

export default ResetPassword
