/* eslint-disable @typescript-eslint/default-param-last */
import { CompanyActionTypes, SET_COMPANY } from './@types/actions'
import { CompanyState } from './@types/state'

const initialState: CompanyState = {
  accessCode: '',
  cnpj: ''
}

export function companyReducer (
  state = initialState,
  action: CompanyActionTypes
): CompanyState {
  switch (action.type) {
    case SET_COMPANY:
      return {
        ...state,
        accessCode: action.payload.accessCode,
        cnpj: action.payload.cnpj
      }
    default:
      return state
  }
}
