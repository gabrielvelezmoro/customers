import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Box, Paper, Grid, TextField, MenuItem, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormHeader, FormAlert } from 'components'
import ListIcon from '@mui/icons-material/List'
import * as yup from 'yup'
import { useStyles } from './styles'
import api from 'services/api'
import { ICityDTO } from 'data/dtos/common/i-city-dto'

interface IRouteParams {
  id: string
}

const CityForm: React.FC = () => {
  const [mainError, setMainError] = useState('')

  const params = useParams<IRouteParams>()
  const firstInputElement = useRef(null)
  const classes = useStyles()
  const history = useHistory()

  const validationSchema = yup.object().shape({
    name: yup.string()
      .required('Campo obrigatório'),
  })

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
    control
  } = useForm<ICityDTO>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      id: null,
      name: '',
    }
  })

 const genderData = [
   {id: 'Male', code: 'Male'},
  {id: 'Female', code: 'Female'},
   {id: 'Other', code: 'Other'}
 ]


  // main data load

  useEffect(() => {
    async function loadData() {
      const { id } = params

      // form data

      await api
        .get(`/customer/${id}`)
        .then(response => {
          const { data } = response.data

          const cityResult = {
            id: data.id.id,
            name: data.name,
            email: data.email,
            gender: data.gender,
          }

          return cityResult
        })
        .then((cityResult: ICityDTO) => {
          reset(cityResult)
        })
        .catch(error => {
          console.log(error)
          return error
        })
    }

    if (params.id) {
      loadData()
    }
  }, [params, params.id])


  // data save

  const onSubmit = useCallback(async (data: ICityDTO) => {
    const payLoad: ICityDTO = {
      name: data.name,
      email: data.email,
      gender: data.gender,
    }

    if (params.id) {
      const { id } = params
      console.log('id para update: ', id)
      console.log('payload: ', payLoad)
      await api
        .put(`/customer/${id}`, payLoad)
        .then(history.push('/customers'))
        .catch(error => {
          console.log('error: ', error)
          setMainError(error)
          return error
        })
    } else {
      await api
        .post('/customer', payLoad)
        .then(history.push('/customers/new'))
        .then(() => reset())
        .then(() => setTimeout(() => { firstInputElement.current.focus() }, 0))
        .catch(error => {
          console.log('error: ', error)
          setMainError(error)
          return error
        })
    }
  }, [])


  const handleChange = (formField: any) => {
    setMainError('')
  }


  return (
    <Paper elevation={0} className={classes.paper}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        data-testid="form"
      >
        <FormHeader
          title="Clientes"
          icon={ListIcon}
          backRoute="/customers"
          showSaveButton={true}
          helpText=""
        />

        <FormAlert setMainError={setMainError} mainError={mainError} />

        <Paper elevation={1} className={classes.gridPaper}>
          <Grid container spacing={1} className={classes.formContainer}>

            

            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="caption" display="block" gutterBottom>
                      Nome
                    </Typography>
                    <TextField
                      id="name"
                      error={!!errors.name}
                      helperText={errors?.name?.message}
                      variant="outlined"
                      margin="dense"
                      size="small"
                      fullWidth={true}
                      InputLabelProps={{
                        shrink: true
                      }}
                      inputProps={{
                        maxLength: 100
                      }}
                      {...register("name",
                        { onChange: (e) => handleChange(e) }
                      )}
                      />
                  </Grid>
                </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                    <Typography variant="caption" display="block" gutterBottom>
                      Email
                    </Typography>
                    <TextField
                      id="email"
                      error={!!errors.email}
                      helperText={errors?.email?.message}
                      variant="outlined"
                      margin="dense"
                      size="small"
                      fullWidth={true}
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
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography variant="caption" display="block" gutterBottom>
                  Genero
                </Typography>
                <TextField
                  id="id"
                  error={!!errors.id}
                  helperText={errors?.id?.message}
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth={true}
                  value={`${watch().id}`}
                  select
                  autoFocus
                  inputRef={firstInputElement}
                  {...register("id", { onChange: (e) => {
                    setValue("id", e.target.value)
                    handleChange(e)
                  }})}
                >
                {genderData.map((state) => (
                  <MenuItem
                    key={state.id}
                    value={state.code}
                  >
                    {state.code}
                  </MenuItem>
                ))}
                </TextField>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Paper>
  )
}

export default CityForm
