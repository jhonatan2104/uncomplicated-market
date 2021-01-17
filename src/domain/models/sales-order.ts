import { ProductModel, ProductBasicModel } from './product'
import { AccountModel } from './account'
import { ClientModel } from './client'

export type ItemSalesOrder = {
  content: ProductBasicModel | ProductModel
  multiplier: number
}

export type SalesOrderModel = {
  price: number
  items: ItemSalesOrder[]
  company: AccountModel
  emitter: AccountModel
  timestamp: string
  client?: ClientModel
}
