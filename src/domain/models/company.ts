import { AccountModel } from './account'

export type CompanyModel = {
  account: AccountModel
  cnpj: string
  accessCode: string
}
