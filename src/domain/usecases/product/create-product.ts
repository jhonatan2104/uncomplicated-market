import { ProductModel } from '@/domain/models'

export interface CreateProduct {
  execute: (params: CreateProduct.Params) => Promise<CreateProduct.Model>
}

export namespace CreateProduct {
  export type Params = {
    price: number
    name: string
    code: string
    company: string
    createdBy?: string
  }

  export type Model = ProductModel
}
