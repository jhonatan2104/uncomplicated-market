import { AccountModel } from '@/domain/models/account'
import { CompanyModel } from '@/domain/models/company'
import { CooperatorModel } from '@/domain/models/cooperator'
export interface CreateAccount {
  execute: (params: CreateAccount.Params) => Promise<CreateAccount.Model>
}

export namespace CreateAccount {
  export type Params = {
    name: string
    email: string
    password: string
    type: CompanyModel | CooperatorModel
  }
  export type Model = AccountModel
}
