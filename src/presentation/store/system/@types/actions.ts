
import { AccountModel } from '@/domain/models'
import { TypeAccount } from './state'

export const SET_TYPE_ACCOUNT = 'SET_TYPE_ACCOUNT'
export const SET_ACCOUNT = 'SET_ACCOUNT'

interface SetTypeAccountAction {
  type: typeof SET_TYPE_ACCOUNT
  payload: TypeAccount
}

interface SetAccount {
  type: typeof SET_ACCOUNT
  payload: AccountModel
}

export type SystemActionTypes = SetTypeAccountAction | SetAccount
