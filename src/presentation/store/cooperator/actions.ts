import { AccountModel } from '@/domain/models'
import { CooperatorActionTypes, SET_COOPERATOR } from './@types/actions'

type actionSetCooperatorParams = {
  company: AccountModel
  status: string
}

export const actionSetCooperator = (params: actionSetCooperatorParams): CooperatorActionTypes => {
  return {
    type: SET_COOPERATOR,
    payload: params
  }
}
