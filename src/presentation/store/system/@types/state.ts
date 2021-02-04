import { TYPE_COMPANY, TYPE_COOPERATOR } from '@/data/constants/account'
import { AccountModel } from '@/domain/models'

export type TypeAccount = typeof TYPE_COMPANY | typeof TYPE_COOPERATOR

export interface SystemState {
  typeAccount: TypeAccount
  account?: AccountModel | undefined
}
