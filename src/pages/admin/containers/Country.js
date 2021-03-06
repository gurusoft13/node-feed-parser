import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CountryComponent from '../components/Country'
import * as api from '../../../api'
import { loadTeams } from '../../../redux/actions'
import { useSnackbar } from 'notistack'
const Country = () => {
  const countries = useSelector((state) => state.teams)
  const languages = useSelector((state) => state.languages)
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()
  const handleSubmit = async (data, newData) => {
    if (data._id) {
      try {
        await api.updateCountry(data._id, newData)
        enqueueSnackbar('Successfully updated', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        dispatch(loadTeams())
      } catch (err) {
        enqueueSnackbar('Update Error', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
      }
    } else {
      try {
        await api.addNewCountry(newData)
        enqueueSnackbar('Successfully added', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        dispatch(loadTeams())
      } catch (err) {
        enqueueSnackbar('Add Error', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
        console.log(err)
      }
    }
  }

  const handleRemove = async (data) => {
    try {
      await api.removeCountry(data._id)
      enqueueSnackbar('Successfully removed', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
      dispatch(loadTeams())
    } catch (err) {
      enqueueSnackbar('Remove error', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      })
      console.log('err', err)
    }
  }

  return (
    <CountryComponent
      countries={countries}
      languages={languages}
      handleSubmit={handleSubmit}
      handleRemove={handleRemove}
    />
  )
}

export default Country
