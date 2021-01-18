import { ProductModel } from '@/domain/models'

export interface GetProduct {
  execute: (params: GetProduct.Params) => Promise<GetProduct.Result>
}

export namespace GetProduct {
  export type Params = {
    code: string
    uid_company: string
  }

  export type Result = ProductModel | null
}
