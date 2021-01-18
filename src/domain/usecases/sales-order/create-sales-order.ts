import { SalesOrderModel, ItemSalesOrder, ClientModel } from '@/domain/models'

export interface CreateSalesOrder {
  execute: (params: CreateSalesOrder.Params) => Promise<CreateSalesOrder.Model>
}

export namespace CreateSalesOrder {
  export type Params = {
    price: number
    items: ItemSalesOrder[]
    uid_company: string
    uid_emitter: string
    client?: ClientModel
  }

  export type Model = SalesOrderModel
}
