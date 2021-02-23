import { CompanyActionTypes, SET_COMPANY } from './@types/actions'

type actionSetCompanyParams = {
  accessCode: string
  cnpj: string
}

export const actionSetCompany = (params: actionSetCompanyParams): CompanyActionTypes => {
  return {
    type: SET_COMPANY,
    payload: params
  }
}
