import { SystemActionTypes, SET_TYPE_ACCOUNT } from './@types/actions'
import { TypeAccount } from './@types/state'

export const actionSetTypeAccount = (typeAccount: TypeAccount): SystemActionTypes => {
  return {
    type: SET_TYPE_ACCOUNT,
    payload: typeAccount
  }
}
