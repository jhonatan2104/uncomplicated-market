import { CompanyModel } from '@/domain/models/company'

export interface CreateCompany {
  execute: (params: CreateCompany.Params) => Promise<CreateCompany.Model>
}

export namespace CreateCompany {
  export type Params = {
    name: string
    email: string
    password: string
    cnpj: string
    accessCode: string
  }

  export type Model = CompanyModel
}
