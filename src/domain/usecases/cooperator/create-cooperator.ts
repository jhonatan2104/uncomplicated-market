import { CooperatorModel } from '@/domain/models/cooperator'

export interface CreateCooperator {
  execute: (params: CreateCooperator.Params) => Promise<CreateCooperator.Model>
}

export namespace CreateCooperator {
  export type Params = {
    name: string
    email: string
    password: string
    cnpj: string
    accessCode: string
  }
  export type Model = CooperatorModel
}
