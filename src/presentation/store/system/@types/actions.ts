
import { TypeAccount } from './state'
export const SET_TYPE_ACCOUNT = 'SET_TYPE_ACCOUNT'

interface SetTypeAccountAction {
  type: typeof SET_TYPE_ACCOUNT
  payload: TypeAccount
}

export type SystemActionTypes = SetTypeAccountAction
