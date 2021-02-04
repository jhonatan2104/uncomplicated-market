import { AccountModel } from '@/domain/models'
import { SystemActionTypes, SET_TYPE_ACCOUNT, SET_ACCOUNT } from './@types/actions'
import { TypeAccount } from './@types/state'

export const actionSetTypeAccount = (typeAccount: TypeAccount): SystemActionTypes => {
  return {
    type: SET_TYPE_ACCOUNT,
    payload: typeAccount
  }
}

export const actionSetAccount = (account: AccountModel): SystemActionTypes => ({
  type: SET_ACCOUNT,
  payload: account
})
