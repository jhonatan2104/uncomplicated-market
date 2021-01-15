import { ProductModel, SalesOrderModel, ClientModel } from '@/domain/models'

export interface CreateSalesOrder {
  execute: (params: CreateSalesOrder.Params) => Promise<CreateSalesOrder.Model>
}

export namespace CreateSalesOrder {
  export type Params = {
    price: number
    items: ProductModel[]
    company: string
    emitter: string
    client?: ClientModel
  }

  export type Model = SalesOrderModel
}
