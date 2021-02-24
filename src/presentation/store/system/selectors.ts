import { AccountModel } from '@/domain/models'
import { IRootState } from '../root-reducers'

export const getTypeAccount = (state: IRootState): string => {
  return state.system.typeAccount
}

export const getAccount = (state: IRootState): AccountModel | undefined => {
  return state.system.account
}
