import React, { useState, useEffect } from 'react'
import { Paper } from '@mui/material'
import { CustomTable, FormHeader } from 'components'
import ListIcon from '@mui/icons-material/List'
import { useStyles } from './styles'
import api from 'services/api'
import { ITableHeadCellDTO } from 'data/dtos/components/i-table-head-cell-dto'
import { ICityDTO } from 'data/dtos/common/i-city-dto'
import { useAlreadyMounted } from 'utils/use-already-mounted';

const headCells: ITableHeadCellDTO[] = [
  
  {
    id: 'name',
    label: 'Nome',
    width: 5
  },
  {
    id: 'email',
    label: 'Email',
    width: 5
  },
  {
    id: 'gender',
    label: 'Gender',
    width: 10
  },
]

const CityList: React.FC = () => {
  const [loading, setLoading] = useState(0)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(100)
  const [orderByDirection, setOrderByDirection] = useState(true)
  const [citiesList, setCitiesList] = useState<ICityDTO[]>([])
  const [recordToDelete, setRecordToDelete] = useState<string | null>('')
  const [columnOrder, setColumnOrder] = useState<('ASC' | 'DESC')[]>([])

  const classes = useStyles()
  const alreadyMounted = useAlreadyMounted();

  const loadCities = async () => {
    setLoading(1)

    await api
      .get('/customer')
      .then(async listResponse => {
        const { data } = listResponse.data
        console.log(data);
        setCitiesList(data)

        
      })
      .catch(error => {
        console.log(error)
      })
  }

  console.log(citiesList)

  const handleDelete = async () => {
    await api
      .delete(`/customer/${recordToDelete}`)
      .then(async () => {
        await loadCities()
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }


  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number, ) => {
    setPage(newPage);
  }


  const handleChangeRowsPerPage = async (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!alreadyMounted) {
        loadCities()
      }
    }, 1000)

    return () => clearTimeout(timeout)
  }, [search])


  useEffect(() => {
    loadCities()
  }, [orderByDirection, rowsPerPage, page])


  return (
    <Paper elevation={0} className={classes.paper}>

      <FormHeader
        title="Clientes"
        icon={ListIcon}
        newRoute="/customers/new"
        helpText=""
      />

      <CustomTable
        headCells={headCells}
        rows={citiesList}
        totalRows={10}
        handleSearch={setSearch}
        isLoading={loading}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        page={page}
        editRoute="/customers/edit"
        handleDelete={handleDelete}
        handleRecordToDelete={setRecordToDelete}
        columnOrder={columnOrder}
        setColumnOrder={setColumnOrder}
        orderByDirection={orderByDirection}
        setOrderByDirection={setOrderByDirection}
      />

    </Paper>
  )
}

export default CityList
