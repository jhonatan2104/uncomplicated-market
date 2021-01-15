import { AccountModel } from '@/domain/models/account'

export interface GetCompany {
  execute: (params: GetCompany.Params) => Promise<GetCompany.Model>
}

export namespace GetCompany {
  export type Params = {
    cnpj: string
  }

  export type Model = AccountModel | null
}
