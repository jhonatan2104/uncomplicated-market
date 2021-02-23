export const SET_COMPANY = 'SET_COMPANY'

type CompanyActionPayload = {
  cnpj: string
  accessCode: string
  listMember?: any[]
}

interface SetCompany {
  type: typeof SET_COMPANY
  payload: CompanyActionPayload
}

export type CompanyActionTypes = SetCompany
