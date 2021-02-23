import { AccountModel } from '@/domain/models'

export interface CooperatorState {
  company: AccountModel | undefined
  status: string
}
