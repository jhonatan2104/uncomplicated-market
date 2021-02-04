import { AccountModel } from '@/domain/models'
import { IRootState } from '../root-reducers'
import { TypeAccount } from './@types/state'

export const getTypeAccount = (state: IRootState): TypeAccount => {
  return state.system.typeAccount
}

export const getAccount = (state: IRootState): AccountModel | undefined => {
  return state.system.account
}
