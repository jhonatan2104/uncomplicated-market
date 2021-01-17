import { ProductModel } from '@/domain/models'

export interface GetProduct {
  execute: (params: GetProduct.Params) => Promise<GetProduct.Result>
}

export namespace GetProduct {
  export type Params = {
    code: string
    company: string
  }

  export type Result = ProductModel | null
}
