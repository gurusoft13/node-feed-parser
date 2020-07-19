import { createAction } from 'redux-actions'
import * as api from '../api'
export const INIT_TEAMS = 'INIT_TEAMS'
export const INIT_LANGUAGES = 'INIT_LANGUAGES'
export const SET_MY_LANGUAGE = 'SET_MY_LANGUAGE'
export const initTeams = createAction(INIT_TEAMS)
export const initLanguages = createAction(INIT_LANGUAGES)
export const setMyLanguage = createAction(SET_MY_LANGUAGE)

export const loadTeams = () => async (dispatch) => {
  try {
    const res = await api.getTeams()
    console.log('res ====> ', res.data)
    dispatch(initTeams(res.data))
  } catch (e) {
    console.log('Error ====> ', e.message)
    dispatch(initTeams([]))
    throw e
  }
}

export const loadLanguages = () => async (dispatch) => {
  try {
    const res = await api.getLanguages()
    console.log('res getLanguages ====> ', res.data)
    dispatch(initLanguages(res.data))
  } catch (e) {
    console.log('Error ====> ', e.message)
    dispatch(initLanguages([]))
    throw e
  }
}