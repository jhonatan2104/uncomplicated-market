import { AccountModel } from '@/domain/models'

export const SET_COOPERATOR = 'SET_COOPERATOR'

type CooperatorActionPayload = {
  company: AccountModel
  status: string
}

interface SetCooperator {
  type: typeof SET_COOPERATOR
  payload: CooperatorActionPayload
}

export type CooperatorActionTypes = SetCooperator
