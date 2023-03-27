import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Box, Paper, Grid, TextField, InputLabel, MenuItem, Typography } from '@mui/material'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Checkbox } from '@mui/material'
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
  const [statesA, setStatesA] = useState([])

  const params = useParams<IRouteParams>()
  const firstInputElement = useRef(null)
  const classes = useStyles()
  const history = useHistory()

  const validationSchema = yup.object().shape({
    stateId: yup.string()
      .required('Campo obrigatório'),
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
      stateId: null,
      name: '',
    }
  })

  // initial load

  useEffect(() => {
    async function loadData() {

      // select UF

      await api
        .post('/states/select')
        .then(response => {
          const { data } = response.data

          return data
        })
        .then((statesResult) => {
          setStatesA(statesResult)
        })
        .catch(error => {
          console.log(error)
          return error
        })
    }

    loadData()
  }, [])


  // main data load

  useEffect(() => {
    async function loadData() {
      const { id } = params

      // form data

      await api
        .get(`/cities/${id}`)
        .then(response => {
          const { data } = response.data

          const cityResult = {
            stateId: data.stateId.id,
            name: data.name,
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
      stateId: data.stateId,
      name: data.name,
    }

    if (params.id) {
      const { id } = params

      payLoad.id = id

      await api
        .put(`/cities`, payLoad)
        .then(history.push('/cities'))
        .catch(error => {
          console.log(error.response.data)
          setMainError(error.response.data.data.name)
          return error.response.data.data
        })
    } else {
      await api
        .post('/cities', payLoad)
        .then(history.push('/cities/new'))
        .then(() => reset())
        .then(() => setTimeout(() => { firstInputElement.current.focus() }, 0))
        .catch(error => {
          console.log(error.response.data)
          setMainError(error.response.data.data.name)
          return error.response.data.data
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
          title="Cidades"
          icon={ListIcon}
          backRoute="/cities"
          showSaveButton={true}
          helpText="Nesta opção serão informadas as cidades brasileiras, pertencentes a cada unidade da federação."
        />

        <FormAlert setMainError={setMainError} mainError={mainError} />

        <Paper elevation={1} className={classes.gridPaper}>
          <Grid container spacing={1} className={classes.formContainer}>

            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography variant="caption" display="block" gutterBottom>
                  UF
                </Typography>
                <TextField
                  id="stateId"
                  error={!!errors.stateId}
                  helperText={errors?.stateId?.message}
                  variant="outlined"
                  margin="dense"
                  size="small"
                  fullWidth={true}
                  value={`${watch().stateId}`}
                  select
                  autoFocus
                  inputRef={firstInputElement}
                  {...register("stateId", { onChange: (e) => {
                    setValue("stateId", e.target.value)
                    handleChange(e)
                  }})}
                >
                {statesA.map((state) => (
                  <MenuItem
                    key={state.id}
                    value={state.id}
                  >
                    {state.code}
                  </MenuItem>
                ))}
                </TextField>
              </Grid>
            </Grid>

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

          </Grid>
        </Paper>
      </Box>
    </Paper>
  )
}

export default CityForm
