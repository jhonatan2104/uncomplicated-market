
import { AccountModel } from '@/domain/models'

export interface Auth {
  auth: (params: Auth.Params) => Promise<Auth.Model>
}

export namespace Auth {
  export type Params = {
    email: string
    password: string
  }

  export type Model = AccountModel
}
