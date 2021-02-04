import { AccountModel } from '@/domain/models'

export interface StateAuth {
  execute: () => Promise<StateAuth.Model>
}

export namespace StateAuth {

  export type Model = AccountModel | undefined
}
