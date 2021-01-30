import { TYPE_COMPANY, TYPE_COOPERATOR } from '@/data/constants/account'

export type TypeAccount = typeof TYPE_COMPANY | typeof TYPE_COOPERATOR

export interface SystemState {
  typeAccount: TypeAccount
}
