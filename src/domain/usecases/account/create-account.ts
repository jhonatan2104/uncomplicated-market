import { AccountModel } from '@/domain/models/account'

export interface CreateAccount {
  execute: (params: CreateAccount.Params) => Promise<CreateAccount.Model>
}

export namespace CreateAccount {
  export type Params = {
    name: string
    email: string
    password: string
    type: string
  }
  export type Model = AccountModel
}
