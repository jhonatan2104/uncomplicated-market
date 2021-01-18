import { ProductModel } from '@/domain/models'

export interface CreateProduct {
  execute: (params: CreateProduct.Params) => Promise<CreateProduct.Model>
}

export namespace CreateProduct {
  export type Params = {
    price: number
    name: string
    code: string
    uid_company: string
    uid_createdBy?: string
  }

  export type Model = ProductModel
}
