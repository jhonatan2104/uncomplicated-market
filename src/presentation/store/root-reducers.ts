import { combineReducers } from 'redux'
import { systemReducer } from './system/reducers'

export const RootState = combineReducers({
  system: systemReducer
})

export type IRootState = ReturnType<typeof RootState>
