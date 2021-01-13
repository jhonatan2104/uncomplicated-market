import { AccountModel } from './account'

export type CooperatorModel = {
  account: AccountModel
  company: string
  status: string
}
