import { combineReducers } from 'redux'
import { companyReducer } from './company/reducers'
import { cooperatorReducer } from './cooperator/reducers'
import { systemReducer } from './system/reducers'

export const RootState = combineReducers({
  system: systemReducer,
  cooperator: cooperatorReducer,
  company: companyReducer
})

export type IRootState = ReturnType<typeof RootState>
