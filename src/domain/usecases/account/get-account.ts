import { AccountModel } from '@/domain/models'

export interface GetAccount {
  execute: (params: GetAccount.Params) => Promise<GetAccount.Model>
}

export namespace GetAccount {
  export type Params = {
    uid: string
  }

  export type Model = AccountModel | null
}
